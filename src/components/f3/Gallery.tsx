import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import a1 from "@/assets/action-kick.jpg";
import a2 from "@/assets/action-spar.jpg";
import a3 from "@/assets/action-bag.jpg";
import a4 from "@/assets/action-muaythai.jpg";
import a5 from "@/assets/action-strength.jpg";
import a6 from "@/assets/gym-interior.jpg";
import { SectionTitle } from "./SectionTitle";

const items = [
  { src: a1, alt: "Kickboxer high kick", h: "row-span-2" },
  { src: a2, alt: "MMA sparring action", h: "" },
  { src: a3, alt: "Heavy bag impact", h: "row-span-2" },
  { src: a6, alt: "Gym arena interior", h: "" },
  { src: a4, alt: "Muay Thai strike", h: "" },
  { src: a5, alt: "Strength training battle ropes", h: "" },
];

export const Gallery = () => {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionTitle
          eyebrow="INSIDE THE ARENA"
          title="THE F3"
          accent="GALLERY."
          description="Sweat. Steel. Spirit. The moments that define us."
        />

        <div className="grid auto-rows-[200px] grid-cols-2 md:grid-cols-4 gap-3">
          {items.map((it, i) => (
            <motion.button
              key={it.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setOpen(it.src)}
              className={`group relative overflow-hidden rounded-sm border border-border ${it.h}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 transition-all duration-500 group-hover:ring-primary" />
              <span className="absolute bottom-3 left-3 font-display text-[10px] tracking-[0.3em] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                VIEW IMAGE
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-background/95 p-6 cursor-zoom-out"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute top-6 right-6 flex h-11 w-11 items-center justify-center rounded-sm border border-primary/40 text-foreground hover:bg-fire hover:text-primary-foreground transition-all"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={open}
              alt="Expanded view"
              className="max-h-[88vh] max-w-[88vw] rounded-sm border border-primary/30 object-contain shadow-glow-strong"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
