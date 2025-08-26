import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContactSubmission(validatedData);
      
      // Send email notification using a simple email service
      try {
        await sendContactEmail({
          to: "webgradeuz@gmail.com",
          from: validatedData.email,
          subject: `New Contact Form Submission - ${validatedData.service || 'General'}`,
          firstName: validatedData.firstName,
          lastName: validatedData.lastName,
          email: validatedData.email,
          service: validatedData.service || 'General inquiry',
          message: validatedData.message
        });
      } catch (emailError) {
        console.log("Email sending failed, but form submitted successfully:", emailError);
        // Continue without failing the request
      }
      
      res.json({ 
        success: true, 
        message: "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Ma'lumotlar noto'g'ri to'ldirilgan", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Xabar yuborishda xatolik yuz berdi" 
        });
      }
    }
  });

// Email configuration and sending function
const createTransporter = () => {
  // Gmail SMTP configuration
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'webgradeuz@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });
};

async function sendContactEmail(data: {
  to: string;
  from: string;
  subject: string;
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
}) {
  // Log the submission
  console.log(`
📧 NEW CONTACT FORM SUBMISSION
================================
To: ${data.to}
From: ${data.firstName} ${data.lastName} <${data.from}>
Subject: ${data.subject}

Contact Details:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Service: ${data.service}

Message:
${data.message}

Submitted at: ${new Date().toLocaleString()}
================================
  `);

  // Try to send actual email if Gmail credentials are available
  if (process.env.GMAIL_APP_PASSWORD) {
    try {
      const transporter = createTransporter();
      
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Yangi Contact Form Xabari</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>Mijoz Ma'lumotlari:</h3>
            <p><strong>Ism:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Xizmat:</strong> ${data.service}</p>
            <p><strong>Vaqt:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3>Xabar:</h3>
            <p style="line-height: 1.6;">${data.message}</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Webgrade Website" <webgradeuz@gmail.com>`,
        to: data.to,
        replyTo: data.email,
        subject: data.subject,
        html: htmlContent,
        text: `
Yangi Contact Form Xabari
=========================
Ism: ${data.firstName} ${data.lastName}
Email: ${data.email}
Xizmat: ${data.service}
Vaqt: ${new Date().toLocaleString()}

Xabar:
${data.message}
        `
      });
      
      console.log('✅ Email successfully sent to webgradeuz@gmail.com');
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      throw error;
    }
  } else {
    console.log('⚠️ Gmail App Password not configured. Email logged but not sent.');
  }
}

  // Get contact submissions (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json({ success: true, data: contacts });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
