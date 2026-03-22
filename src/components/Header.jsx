import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";

const navItems = [
  { label: "Sobre", target: "sobre" },
  { label: "Projetos", target: "projetos" },
  { label: "Contato", target: "contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo("hero")}
          className="font-logo text-accent text-3xl"
          whileHover={{ scale: 1.05 }}
        >
          GG.
        </motion.button>

        {/* Desktop Nav + Theme Toggle */}
        <div className="hidden md:flex items-center gap-2">
          <nav>
            <ul className="flex gap-1">
              {navItems.map((item) => (
                <li key={item.target}>
                  <button
                    onClick={() => scrollTo(item.target)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.target
                        ? "text-texts"
                        : "text-muted hover:text-texts"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.target && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-2 right-2 h-0.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted hover:text-texts hover:bg-surface transition-colors ml-2"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile: Theme Toggle + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted hover:text-texts transition-colors"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-texts"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 text-texts"
            >
              <X size={28} />
            </button>
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className="text-2xl font-medium text-muted hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
