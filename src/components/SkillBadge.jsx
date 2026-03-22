import { motion } from "framer-motion";

export function SkillBadge({ name }) {
  return (
    <motion.span
      className="px-4 py-2 bg-surface border border-border rounded-lg text-sm text-muted hover:text-accent hover:border-accent transition-colors cursor-default"
      whileHover={{ y: -2 }}
    >
      {name}
    </motion.span>
  );
}
