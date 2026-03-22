import { motion } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection";
import { SectionHeading } from "../components/SectionHeading";
import { SkillBadge } from "../components/SkillBadge";
import eu from "../assets/imgs/eu.png";

const skills = [
  "Java", "Spring Boot", ".NET", "C#", "Python",
  "TypeScript", "Node.js", "React", "Tailwind",
  "Docker", "MySQL", "PostgreSQL", "Git", "GitHub",
];

export function AboutSection() {
  return (
    <AnimatedSection id="sobre" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Sobre Mim" />

        <div className="grid md:grid-cols-[320px_1fr] gap-12 lg:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-accent/10 border border-border">
              <motion.img
                src={eu}
                alt="Gabriel Gouvea"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted text-lg leading-relaxed">
              Estudo{" "}
              <span className="text-texts font-medium">Engenharia de Software na FIAP</span>.
              Meu foco é desenvolvimento backend, gosto de entender como as coisas funcionam
              em cada camada, desde a lógica da API até o banco de dados.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Também transito pelo frontend quando o projeto pede, e tenho interesse em
              construir aplicações completas do zero. Estou buscando{" "}
              <span className="text-accent font-medium">
                minha primeira oportunidade na área de desenvolvimento.
              </span>
            </p>

            {/* Education & Work cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-texts mb-3">Acadêmica</h3>
                <p className="text-texts font-medium">Engenharia de Software</p>
                <p className="text-muted text-sm">FIAP - Paulista (Noturno)</p>
                <p className="text-muted text-sm">jan 2024 - dez 2027</p>
              </div>
              <div className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold text-texts mb-3">Profissional</h3>
                <p className="text-texts font-medium">Garçom</p>
                <p className="text-muted text-sm">Restaurante Spot</p>
                <p className="text-muted text-sm">abril 2023 - atual</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-texts mb-6">Tecnologias</h3>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <SkillBadge name={skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
