import { motion } from "framer-motion";

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-16">
      <motion.div
        className="w-12 h-1 bg-accent rounded-full mb-4"
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
      <h2 className="text-3xl md:text-4xl font-bold text-texts">{title}</h2>
      {subtitle && (
        <p className="text-muted text-lg mt-3">{subtitle}</p>
      )}
    </div>
  );
}
