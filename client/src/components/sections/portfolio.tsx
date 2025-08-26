import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const portfolioItems = [
  {
    title: "Mock IELTS",
    description:
      "A modern e-commerce solution with advanced filtering, payment integration, and inventory management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Targeting Course",
    description:
      "Intelligent Telegram bot for automated customer support with natural language processing.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "bot",
    technologies: ["Python", "AI/ML", "Telegram API"],
  },
  {
    title: "Dental Map",
    description:
      "User-centered design for a fitness tracking mobile application with intuitive navigation.",
    image:
      "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "bot",
    technologies: ["Figma", "Prototyping", "User Research"],
  },
  {
    title: "Dance Course",
    description:
      "Professional corporate website with CMS integration and advanced SEO optimization.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "bot",
    technologies: ["WordPress", "SEO", "Analytics"],
  },
  {
    title: "Targeting Course Landing",
    description:
      "Telegram shopping bot with product catalog, order management, and payment processing.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "web",
    technologies: ["Node.js", "Payment API", "Database"],
  },
  {
    title: "Dental Map Landing",
    description:
      "Data visualization dashboard with interactive charts and real-time monitoring capabilities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "web",
    technologies: ["UI Design", "Data Viz", "UX Research"],
  },
];

const categories = [
  { id: "all", labelKey: "portfolio.all" },
  { id: "web", labelKey: "portfolio.web" },
  { id: "bot", labelKey: "portfolio.bots" },
  { id: "design", labelKey: "portfolio.design" },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }
            >
              {t(category.labelKey)}
            </Button>
          ))}
        </div>

        {/* Portfolio Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-dark">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="p-0 text-primary font-medium hover:underline"
                >
                  {t("portfolio.view")}{" "}
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
