import { motion } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection";
import { SectionHeading } from "../components/SectionHeading";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    description: "gabgouveaa@gmail.com",
    href: "mailto:gabgouveaa@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "(11) 97700-7150",
    href: "https://wa.me/5511977007150?text=Ol%C3%A1%20Gabriel!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    description: "Gabriel Gouvea",
    href: "https://www.linkedin.com/in/gabriel-gouvea-marques-de-oliveira-50b205200/",
  },
  {
    icon: Github,
    label: "GitHub",
    description: "gab-gouvea",
    href: "https://github.com/gab-gouvea",
  },
];

export function ContactSection() {
  return (
    <AnimatedSection id="contato" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          title="Vamos Conversar?"
          subtitle="Tem uma ideia, oportunidade ou só quer trocar uma ideia? Me chama por qualquer canal."
        />

        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          {contactLinks.map(({ icon: Icon, label, description, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 group text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-dim/50 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-medium text-texts group-hover:text-accent transition-colors">
                    {label}
                  </p>
                  <p className="text-sm text-muted">{description}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
