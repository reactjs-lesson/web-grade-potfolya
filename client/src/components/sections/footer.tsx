import { SiFacebook, SiTelegram, SiGithub, SiInstagram } from "react-icons/si";

const socialLinks = [
  { icon: SiFacebook, href: "#" },
  { icon: SiTelegram, href: "#" },
  { icon: SiGithub, href: "#" },
  { icon: SiInstagram, href: "#" }
];

const serviceLinks = [
  { label: "Web Development", href: "#services" },
  { label: "Telegram Bots", href: "#services" },
  { label: "SEO Services", href: "#services" },
  { label: "UI/UX Design", href: "#services" },
  { label: "AI Integration", href: "#services" }
];

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
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

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Biz Webgrade</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional IT solutions provider specializing in web development, Telegram bots, 
              SEO services, UI/UX design, and AI integration. Transform your digital presence 
              with our expert team.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Webgrade. All rights reserved. | Designed & Developed with ❤️ by Webgrade Team</p>
        </div>
      </div>
    </footer>
  );
}
