import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/gab.gmo/", label: "Instagram" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gabriel-gouvea-marques-de-oliveira-50b205200/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/gab-gouvea", label: "GitHub" },
];

const navItems = [
  { label: "Sobre", target: "sobre" },
  { label: "Projetos", target: "projetos" },
  { label: "Contato", target: "contato" },
];

export function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-surface border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo & Copyright */}
        <div className="text-center md:text-left">
          <span className="font-logo text-accent text-2xl">GG.</span>
          <p className="text-muted text-sm mt-1">
            &copy; {new Date().getFullYear()} Gabriel Gouvea
          </p>
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="text-sm text-muted hover:text-texts transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted hover:text-accent transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
