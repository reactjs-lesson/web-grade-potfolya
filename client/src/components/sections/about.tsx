import { Lightbulb, Users, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      title: t("about.innovation"),
      description: t("about.innovation.desc"),
      icon: Lightbulb,
      color: "bg-primary/10 text-primary"
    },
    {
      title: t("about.collaboration"),
      description: t("about.collaboration.desc"),
      icon: Users,
      color: "bg-secondary/10 text-secondary"
    },
    {
      title: t("about.excellence"),
      description: t("about.excellence.desc"),
      icon: Award,
      color: "bg-accent/10 text-accent"
    },
    {
      title: t("about.reliability"),
      description: t("about.reliability.desc"),
      icon: Clock,
      color: "bg-primary/10 text-primary"
    }
  ];
  return (
    <section id="about" className="py-20 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6 dark:text-foreground">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed dark:text-muted-foreground">
              {t("about.description1")}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed dark:text-muted-foreground">
              {t("about.description2")}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${value.color}`}>
                    <value.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground dark:text-foreground">{value.title}</h4>
                    <p className="text-muted-foreground text-sm dark:text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Technology workspace with modern development setup"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute top-6 right-6 bg-card/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border dark:bg-card">
              <div className="text-sm font-medium text-muted-foreground dark:text-muted-foreground">{t("about.since")}</div>
              <div className="text-2xl font-bold text-primary">2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
