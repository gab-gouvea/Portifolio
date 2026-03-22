import { AnimatedSection } from "../components/AnimatedSection";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projetos" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projetos"
          subtitle="Alguns dos projetos que desenvolvi ao longo da minha jornada."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
