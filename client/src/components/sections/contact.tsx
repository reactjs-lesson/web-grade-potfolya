import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/contexts/language-context";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { SiTelegram, SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

const contactInfo = [
  {
    title: "Office Address",
    content: "Tashkent, Uzbekistan\nBusiness District",
    icon: MapPin,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Phone Number",
    content: "+998 77 014 11 88",
    icon: Phone,
    color: "bg-secondary/10 text-secondary",
  },
  {
    title: "Email Address",
    content: "info@bizwebgrade.com",
    icon: Mail,
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Telegram",
    content: "@bizwebgrade",
    icon: Send,
    color: "bg-primary/10 text-primary",
  },
];

const socialLinks = [
  { icon: SiFacebook, href: "#", color: "bg-blue-600 hover:bg-blue-700" },
  { icon: SiTelegram, href: "#", color: "bg-blue-500 hover:bg-blue-600" },
  { icon: SiGithub, href: "#", color: "bg-gray-700 hover:bg-gray-800" },
  { icon: SiInstagram, href: "#", color: "bg-pink-600 hover:bg-pink-700" },
];

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    message: "",
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      title: t("contact.office"),
      content: "Tashkent, Uzbekistan\nBusiness District",
      icon: MapPin,
      color: "bg-primary/10 text-primary",
    },
    {
      title: t("contact.phone"),
      content: "+998 77 014 11 88",
      icon: Phone,
      color: "bg-secondary/10 text-secondary",
    },
    {
      title: t("contact.email"),
      content: "webgradeuz@gmail.com",
      icon: Mail,
      color: "bg-accent/10 text-accent",
    },
    {
      title: t("contact.telegram"),
      content: "@webgradeuz",
      icon: Send,
      color: "bg-primary/10 text-primary",
    },
  ];

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: t("contact.success"),
        description: data.message,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: t("contact.error"),
        description: error.message || t("contact.errorMessage"),
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-20 bg-background dark:bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 dark:text-foreground">
            {t("contact.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto dark:text-muted-foreground">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 dark:text-foreground">
              {t("contact.info")}
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${info.color}`}
                  >
                    <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground dark:text-foreground text-sm sm:text-base">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground dark:text-muted-foreground whitespace-pre-line text-sm sm:text-base">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <h4 className="font-semibold text-foreground dark:text-foreground mb-4 text-sm sm:text-base">
                {t("contact.follow")}
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-white transition-colors ${social.color}`}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="shadow-lg border-0 order-1 lg:order-2 dark:bg-card">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground">
                {t("contact.sendMessage")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm sm:text-base">
                      {t("contact.firstName")}
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder={t("contact.firstName")}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm sm:text-base">
                      {t("contact.lastName")}
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder={t("contact.lastName")}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">{t("contact.emailAddress")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service">{t("contact.service")}</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      handleInputChange("service", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={t("contact.selectService")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">
                        {t("contact.webDev")}
                      </SelectItem>
                      <SelectItem value="telegram-bots">
                        {t("contact.telegramBots")}
                      </SelectItem>
                      <SelectItem value="seo">
                        {t("contact.seoServices")}
                      </SelectItem>
                      <SelectItem value="ui-ux">{t("contact.uiUx")}</SelectItem>
                      <SelectItem value="ai-integration">
                        {t("contact.aiIntegration")}
                      </SelectItem>
                      <SelectItem value="other">
                        {t("contact.other")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">{t("contact.message")}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder={t("contact.messagePlaceholder")}
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending
                    ? t("contact.sending")
                    : t("contact.sendBtn")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
