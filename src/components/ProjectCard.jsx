import { motion } from "framer-motion";
import { ExternalLink, Github, Play } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 group h-full">
        {project.badge && (
          <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-4 block">
            {project.badge}
          </span>
        )}

        <h3 className="text-xl md:text-2xl font-bold text-texts mb-3 group-hover:text-accent transition-colors">
          {project.nome}
        </h3>
        <p className="text-muted leading-relaxed mb-6">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tecs.map((tec) => (
            <span
              key={tec}
              className="bg-accent-dim/50 text-accent-light text-xs px-3 py-1 rounded-full"
            >
              {tec}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.page}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
          >
            <ExternalLink size={16} />
            Ver Projeto
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
            >
              <Play size={16} />
              Ver Demonstração
            </a>
          )}
          {project.landing && (
            <a
              href={project.landing}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
            >
              <ExternalLink size={16} />
              Landing Page
            </a>
          )}
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted hover:text-texts transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}
