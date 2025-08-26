import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, MessageSquare, Search, Palette, Bot, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.web.title"),
      description: t("services.web.description"),
      icon: Code,
      features: [t("services.customDesign"), t("services.responsive"), t("services.seoOptimized")],
      color: "bg-primary/10 text-primary"
    },
    {
      title: t("services.bot.title"),
      description: t("services.bot.description"),
      icon: MessageSquare,
      features: [t("services.customCommands"), t("services.payment"), t("services.analytics")],
      color: "bg-secondary/10 text-secondary"
    },
    {
      title: t("services.seo.title"),
      description: t("services.seo.description"),
      icon: Search,
      features: [t("services.keyword"), t("services.content"), t("services.tracking")],
      color: "bg-accent/10 text-accent"
    },
    {
      title: t("services.design.title"),
      description: t("services.design.description"),
      icon: Palette,
      features: [t("services.research"), t("services.prototyping"), t("services.testing")],
      color: "bg-primary/10 text-primary"
    },
    {
      title: t("services.ai.title"),
      description: t("services.ai.description"),
      icon: Bot,
      features: [t("services.chatbots"), t("services.ml"), t("services.dataAnalysis")],
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 dark:text-foreground">{t("services.title")}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto dark:text-muted-foreground">
            {t("services.description")}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all transform hover:-translate-y-1 sm:hover:-translate-y-2 border shadow-lg dark:bg-card dark:border-border">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-6 ${service.color}`}>
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground dark:text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 dark:text-muted-foreground">
                  {service.description}
                </p>
                <ul className="text-sm text-muted-foreground space-y-2 dark:text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
