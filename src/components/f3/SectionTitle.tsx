import { motion } from "framer-motion";
import { ReactNode } from "react";

export const SectionTitle = ({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  description?: string;
  align?: "left" | "center";
}) => {
  return (
    <div className={`mb-14 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-10 bg-primary" />
        <span className="font-display text-xs tracking-[0.4em] text-primary">{eyebrow}</span>
        <span className="h-px w-10 bg-primary" />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[0.9] uppercase"
      >
        {title} {accent && <span className="text-fire">{accent}</span>}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5 max-w-xl text-base text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
