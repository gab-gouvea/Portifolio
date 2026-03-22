import { useState, useEffect } from "react";

const SECTION_IDS = ["hero", "sobre", "projetos", "contato"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => observers.forEach((o) => o?.observer.disconnect());
  }, []);

  return activeSection;
}
