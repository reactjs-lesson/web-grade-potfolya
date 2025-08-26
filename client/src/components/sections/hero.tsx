import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import TypingAnimation from "@/components/ui/typing-animation";

export default function Hero() {
  const { t, language } = useLanguage();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const servicesTexts = language === 'uz' ? [
    'Vebsaytlar',
    'Telegram botlar', 
    'SEO xizmatlari',
    'UX/UI dizayn',
    'AI integratsiya'
  ] : [
    'Websites',
    'Telegram bots',
    'SEO services', 
    'UX/UI design',
    'AI integration'
  ];

  return (
    <section id="home" className="pt-16 gradient-hero dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight dark:text-foreground">
              <span className="block sm:inline">
                {language === 'uz' ? 'Biznesingiz uchun professional ' : 'Professional for your business '}
              </span>
              <br className="hidden sm:block" />
              <TypingAnimation 
                texts={servicesTexts}
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={2000}
                className="text-primary block sm:inline"
              />
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed dark:text-muted-foreground">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all"
              >
                {t("hero.getStarted")}
              </Button>
              <Button
                onClick={() => scrollToSection("#services")}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground"
              >
                {t("hero.ourServices")}
              </Button>
            </div>
            <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
                <div className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground">{t("hero.projects")}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">25+</div>
                <div className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground">{t("hero.clients")}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-primary">3+</div>
                <div className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground">{t("hero.experience")}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern IT office workspace"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border dark:bg-card">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground dark:text-muted-foreground">{t("hero.support")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
