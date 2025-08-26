import { createContext, useContext, useState, ReactNode } from "react";

type Language = "uz" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Translations
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.team": "Team",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Professional IT Solutions for Your Business",
    "hero.description":
      "We are Webgrade, a modern IT company specializing in web development, Telegram bots, SEO optimization, UI/UX design, and AI integration. Transform your digital presence with our expert solutions.",
    "hero.getStarted": "Get Started",
    "hero.ourServices": "Our Services",
    "hero.projects": "Projects Completed",
    "hero.clients": "Happy Clients",
    "hero.experience": "Years Experience",
    "hero.support": "Support",

    // Services Section
    "services.title": "Our Services",
    "services.description":
      "We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation.",
    "services.web.title": "Web Development",
    "services.web.description":
      "Custom websites and web applications built with modern technologies. Responsive, fast, and user-friendly solutions.",
    "services.bot.title": "Telegram Bots",
    "services.bot.description":
      "Intelligent Telegram bots for business automation, customer service, and enhanced user engagement.",
    "services.seo.title": "SEO Services",
    "services.seo.description":
      "Boost your online visibility with our comprehensive SEO strategies and digital marketing solutions.",
    "services.design.title": "UI/UX Design",
    "services.design.description":
      "User-centered design solutions that create intuitive and engaging digital experiences for your users.",
    "services.ai.title": "AI Integration",
    "services.ai.description":
      "Leverage artificial intelligence to automate processes, enhance user experience, and drive innovation.",
    "services.customDesign": "Custom Design",
    "services.responsive": "Responsive Layout",
    "services.seoOptimized": "SEO Optimized",
    "services.customCommands": "Custom Commands",
    "services.payment": "Payment Integration",
    "services.analytics": "Analytics",
    "services.keyword": "Keyword Research",
    "services.content": "Content Strategy",
    "services.tracking": "Performance Tracking",
    "services.research": "User Research",
    "services.prototyping": "Prototyping",
    "services.testing": "Testing",
    "services.chatbots": "Chatbots",
    "services.ml": "Machine Learning",
    "services.dataAnalysis": "Data Analysis",

    // About Section
    "about.title": "About Webgrade",
    "about.description1":
      "Founded with a vision to bridge the gap between innovative technology and business success, Webgrade has emerged as a trusted partner for companies seeking digital transformation.",
    "about.description2":
      "Our team combines technical expertise with creative thinking to deliver solutions that not only meet current needs but also prepare our clients for future challenges in the digital landscape.",
    "about.innovation": "Innovation",
    "about.innovation.desc": "Cutting-edge solutions",
    "about.collaboration": "Collaboration",
    "about.collaboration.desc": "Client-focused approach",
    "about.excellence": "Excellence",
    "about.excellence.desc": "Quality in every project",
    "about.reliability": "Reliability",
    "about.reliability.desc": "On-time delivery",
    "about.since": "Since",

    // Team Section
    "team.title": "Our Team",
    "team.description":
      "Meet the talented professionals who bring your digital vision to life with expertise and passion.",

    team0: "hello every One",
    team1: "hello every One",
    team2:
      "Specialized in full-stack development, creating user-friendly front-end experiences, designing scalable APIs, and optimizing databases for high performance.",
    team3: "this last owner",

    // Portfolio Section
    "portfolio.title": "Our Portfolio",
    "portfolio.description":
      "Discover our latest projects and see how we've helped businesses achieve their digital goals.",
    "portfolio.all": "All Projects",
    "portfolio.web": "Web Development",
    "portfolio.bots": "Telegram Bots",
    "portfolio.design": "UI/UX Design",
    "portfolio.view": "View Project",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.description":
      "Ready to start your next project? Contact us today and let's discuss how we can bring your vision to life.",
    "contact.info": "Contact Information",
    "contact.office": "Office Address",
    "contact.phone": "Phone Number",
    "contact.email": "Email Address",
    "contact.telegram": "Telegram",
    "contact.follow": "Follow Us",
    "contact.sendMessage": "Send us a message",
    "contact.firstName": "First Name",
    "contact.lastName": "Last Name",
    "contact.emailAddress": "Email Address",
    "contact.service": "Service Interested In",
    "contact.selectService": "Select a service",
    "contact.webDev": "Web Development",
    "contact.telegramBots": "Telegram Bots",
    "contact.seoServices": "SEO Services",
    "contact.uiUx": "UI/UX Design",
    "contact.aiIntegration": "AI Integration",
    "contact.other": "Other",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your project...",
    "contact.sendBtn": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Success!",
    "contact.successMessage":
      "Thank you for your message! We will get back to you soon.",
    "contact.error": "Error",
    "contact.errorMessage": "Failed to send message. Please try again.",

    // Footer
    "footer.description":
      "Professional IT solutions provider specializing in web development, Telegram bots, SEO services, UI/UX design, and AI integration. Transform your digital presence with our expert team.",
    "footer.services": "Services",
    "footer.quickLinks": "Quick Links",
    "footer.aboutUs": "About Us",
    "footer.ourTeam": "Our Team",
    "footer.copyright":
      "All rights reserved. | Designed & Developed with ❤️ by Webgrade Team",
  },
  uz: {
    // Navigation
    "nav.home": "Asosiy",
    "nav.services": "Xizmatlar",
    "nav.about": "Biz haqimizda",
    "nav.team": "Jamoa",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Bog'lanish",

    // Hero Section
    "hero.title": "Biznesingiz uchun Professional IT Yechimlari",
    "hero.description":
      "Biz Webgrade kompaniyasimiz - veb-saytlar ishlab chiqish, Telegram botlar, SEO optimallashtirish, UI/UX dizayn va AI integratsiyasi bo'yicha ixtisoslashgan zamonaviy IT kompaniya. Mutaxassis yechimlarimiz bilan raqamli mavjudligingizni o'zgartiring.",
    "hero.getStarted": "Boshlash",
    "hero.ourServices": "Xizmatlarimiz",
    "hero.projects": "Tugallangan loyihalar",
    "hero.clients": "Mamnun mijozlar",
    "hero.experience": "Yillik tajriba",
    "hero.support": "Qo'llab-quvvatlash",

    // Services Section
    "services.title": "Xizmatlarimiz",
    "services.description":
      "Biznes ehtiyojlaringizga moslashtirilgan va raqamli transformatsiyani amalga oshiruvchi keng qamrovli IT yechimlari.",
    "services.web.title": "Veb ishlab chiqish",
    "services.web.description":
      "Zamonaviy texnologiyalar bilan maxsus veb-saytlar va veb-ilovalar. Moslashuvchan, tez va foydalanuvchi-do'st yechimlar.",
    "services.bot.title": "Telegram botlar",
    "services.bot.description":
      "Biznes avtomatlashtirish, mijozlarga xizmat ko'rsatish va foydalanuvchi jalb qilish uchun aqlli Telegram botlar.",
    "services.seo.title": "SEO xizmatlari",
    "services.seo.description":
      "Keng qamrovli SEO strategiyalari va raqamli marketing yechimlari bilan onlayn ko'rinishingizni oshiring.",
    "services.design.title": "UI/UX dizayn",
    "services.design.description":
      "Foydalanuvchilar uchun intuitiviy va jozibali raqamli tajriba yaratuvchi foydalanuvchi-markazli dizayn yechimlari.",
    "services.ai.title": "AI integratsiyasi",
    "services.ai.description":
      "Jarayonlarni avtomatlashtirish, foydalanuvchi tajribasini yaxshilash va innovatsiyani rivojlantirish uchun sun'iy intellektdan foydalaning.",
    "services.customDesign": "Maxsus dizayn",
    "services.responsive": "Moslashuvchan tartib",
    "services.seoOptimized": "SEO optimallashtirilgan",
    "services.customCommands": "Maxsus buyruqlar",
    "services.payment": "To'lov integratsiyasi",
    "services.analytics": "Tahlil",
    "services.keyword": "Kalit so'zlar tadqiqi",
    "services.content": "Kontent strategiyasi",
    "services.tracking": "Natija kuzatuvi",
    "services.research": "Foydalanuvchi tadqiqi",
    "services.prototyping": "Prototiplash",
    "services.testing": "Testlash",
    "services.chatbots": "Chat botlar",
    "services.ml": "Mashinani o'rganish",
    "services.dataAnalysis": "Ma'lumotlar tahlili",

    // About Section
    "about.title": "Webgrade haqida",
    "about.description1":
      "Innovatsion texnologiya va biznes muvaffaqiyati o'rtasidagi ko'prikni qurish maqsadida tashkil etilgan Webgrade raqamli transformatsiya izlayotgan kompaniyalar uchun ishonchli hamkor sifatida namoyon bo'ldi.",
    "about.description2":
      "Bizning jamoamiz texnik tajriba va ijodiy fikrlashni birlashtirib, nafaqat joriy ehtiyojlarni qondiradigan, balki mijozlarimizni raqamli muhitdagi kelajakdagi qiyinchiliklarga ham tayyorlaydigan yechimlarni taqdim etadi.",
    "about.innovation": "Innovatsiya",
    "about.innovation.desc": "Ilg'or yechimlar",
    "about.collaboration": "Hamkorlik",
    "about.collaboration.desc": "Mijozga yo'naltirilgan yondashuv",
    "about.excellence": "Mukammallik",
    "about.excellence.desc": "Har bir loyihadagi sifat",
    "about.reliability": "Ishonchlilik",
    "about.reliability.desc": "O'z vaqtida topshirish",
    "about.since": "Dan beri",

    // Team Section
    "team.title": "Bizning jamoa",
    "team.description":
      "Sizning raqamli tasavvuringizni tajriba va ishtiyoq bilan hayotga taqdim etuvchi iste'dodli mutaxassislar bilan tanishing.",

    team0: "salom hammaga",
    team1: "salom hammaga",
    team2:
      "To'liq stekni ishlab chiqish, foydalanuvchilarga qulay front-end tajribalarini yaratish, kengaytiriladigan API'larni loyihalash va yuqori ishlash uchun ma'lumotlar bazalarini optimallashtirishga ixtisoslashgan.",
    team3: "bu oxirgi tim",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.description":
      "So'nggi loyihalarimiz bilan tanishing va bizneslar raqamli maqsadlariga qanday erishishga yordam berganimizni ko'ring.",
    "portfolio.all": "Barcha loyihalar",
    "portfolio.web": "Veb ishlab chiqish",
    "portfolio.bots": "Telegram botlar",
    "portfolio.design": "UI/UX dizayn",
    "portfolio.view": "Loyihani ko'rish",

    // Contact Section
    "contact.title": "Bog'lanish",
    "contact.description":
      "Keyingi loyihangizni boshlashga tayyormisiz? Bugun biz bilan bog'laning va tasavvuringizni hayotga taqdim etish yo'llarini muhokama qilaylik.",
    "contact.info": "Bog'lanish ma'lumotlari",
    "contact.office": "Ofis manzili",
    "contact.phone": "Telefon raqami",
    "contact.email": "Email manzili",
    "contact.telegram": "Telegram",
    "contact.follow": "Bizni kuzating",
    "contact.sendMessage": "Bizga xabar yuboring",
    "contact.firstName": "Ism",
    "contact.lastName": "Familiya",
    "contact.emailAddress": "Email manzil",
    "contact.service": "Qiziqtirgan xizmat",
    "contact.selectService": "Xizmatni tanlang",
    "contact.webDev": "Veb ishlab chiqish",
    "contact.telegramBots": "Telegram botlar",
    "contact.seoServices": "SEO xizmatlari",
    "contact.uiUx": "UI/UX dizayn",
    "contact.aiIntegration": "AI integratsiyasi",
    "contact.other": "Boshqa",
    "contact.message": "Xabar",
    "contact.messagePlaceholder": "Loyihangiz haqida bizga ayting...",
    "contact.sendBtn": "Xabar yuborish",
    "contact.sending": "Yuborilmoqda...",
    "contact.success": "Muvaffaqiyat!",
    "contact.successMessage":
      "Xabaringiz uchun rahmat! Tez orada siz bilan bog'lanamiz.",
    "contact.error": "Xato",
    "contact.errorMessage":
      "Xabar yuborishda xatolik. Iltimos, qayta urinib ko'ring.",

    // Footer
    "footer.description":
      "Veb ishlab chiqish, Telegram botlar, SEO xizmatlari, UI/UX dizayn va AI integratsiyasi bo'yicha ixtisoslashgan professional IT yechimlari provayderi. Mutaxassis jamoamiz bilan raqamli mavjudligingizni o'zgartiring.",
    "footer.services": "Xizmatlar",
    "footer.quickLinks": "Tezkor havolalar",
    "footer.aboutUs": "Biz haqimizda",
    "footer.ourTeam": "Bizning jamoa",
    "footer.copyright":
      "Barcha huquqlar himoyalangan. | ❤️ bilan Webgrade jamoasi tomonidan ishlab chiqilgan",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("language") as Language;
      if (stored && ["uz", "en"].includes(stored)) {
        return stored;
      }
    }
    return "uz"; // Default to Uzbek as per user request
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}