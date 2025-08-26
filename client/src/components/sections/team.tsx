import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Dribbble, Twitter } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import donyorjonImg from '../../../images/donyorjonAka.jpg';
import muhammadYusufImg from '../../../images/myImg.jpg';
import fayzullohImg from "../../../images/fayzulloh.jpg";

const teamMembers = [
  {
    name: "Doniyorjon Kuchkarov",
    position: "Founder",
    description: "",
    image: donyorjonImg,
    social: [
      { icon: Linkedin, href: "#" },
      { icon: Github, href: "#" },
    ],
  },
  {
    name: "Fayzulloh Shavkatov",
    position: "Founder",
    image: fayzullohImg,
    social: [
      { icon: Linkedin, href: "#" },
      { icon: Dribbble, href: "#" },
    ],
  },
  {
    name: "Muhammad Yusuf",
    position: "Full-Stack Developer",
    description:
      "Specialized in full-stack development, creating user-friendly front-end experiences, designing scalable APIs, and optimizing databases for high performance.",
    image: muhammadYusufImg,
    social: [
      { icon: Linkedin, href: "#" },
      { icon: Github, href: "#" },
    ],
  },
  {
    name: "Zarnigor Umaraliyeva",
    position: "Full-Stack Developer",
    description:
      "Digital marketing expert focused on SEO optimization and growth strategies.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
    social: [
      { icon: Linkedin, href: "#" },
      { icon: Twitter, href: "#" },
    ],
  },
];

export default function Team() {
  const { t } = useLanguage();
  return (
    <section id="team" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4">
            {t("team.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("team.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <div className="aspect-square">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#b8b8b8]">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm mb-4">{t(`team${index}`)}</p>
                <div className="flex space-x-3">
                  {member.social.map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      href={social.href}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
