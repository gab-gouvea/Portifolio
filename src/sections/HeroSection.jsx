import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <motion.div
        className="absolute w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative z-10 text-center max-w-4xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-muted text-base md:text-lg tracking-widest uppercase mb-4"
        >
          Olá! Eu sou o
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          Gabriel{" "}
          <span className="text-accent">Gouvea</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted text-lg md:text-xl mb-3"
        >
          Estudante de Engenharia de Software &middot; Foco em Backend
        </motion.p>

        <motion.p
          variants={item}
          className="text-accent text-sm md:text-base font-medium tracking-wide mb-12"
        >
          Buscando primeira oportunidade como desenvolvedor
        </motion.p>

        <motion.div variants={item} className="flex gap-3 md:gap-4 justify-center flex-wrap">
          <motion.button
            onClick={() => scrollTo("projetos")}
            className="bg-accent hover:bg-accent-light text-white px-6 md:px-8 py-3 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Projetos
          </motion.button>
          <motion.a
            href="/curriculo-gabriel-gouvea.pdf"
            download
            className="border border-accent text-accent hover:bg-accent/10 px-6 md:px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Currículo
          </motion.a>
          <motion.button
            onClick={() => scrollTo("contato")}
            className="border border-border text-muted hover:text-texts hover:border-texts/30 px-6 md:px-8 py-3 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contato
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 text-muted"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
