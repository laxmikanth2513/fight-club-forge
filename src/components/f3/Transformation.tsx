import { motion } from "framer-motion";
import bagImg from "@/assets/action-bag.jpg";
import sparImg from "@/assets/action-spar.jpg";
import { SectionTitle } from "./SectionTitle";

const quotes = [
  "PAIN IS TEMPORARY. QUITTING LASTS FOREVER.",
  "DISCIPLINE BEATS MOTIVATION.",
  "BUILT IN BLOOD. FORGED IN SWEAT.",
];

export const Transformation = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Marquee silhouette band */}
      <div className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden whitespace-nowrap opacity-[0.05]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="inline-block font-display text-[12rem] font-bold leading-none text-stroke"
        >
          STRENGTH • DISCIPLINE • STRENGTH • DISCIPLINE • STRENGTH • DISCIPLINE •&nbsp;
        </motion.div>
      </div>

      <div className="container relative">
        <SectionTitle
          eyebrow="TRANSFORMATION"
          title="BUILT BY"
          accent="THE FIGHT."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {[
            { img: bagImg, title: "RAW POWER", sub: "From beginner to brawler in 90 days." },
            { img: sparImg, title: "REAL SPARRING", sub: "Test yourself. Earn your respect." },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-sm border border-border"
            >
              <img
                src={card.img}
                alt={card.title}
                width={1200}
                height={900}
                loading="lazy"
                className="h-[400px] w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="font-display text-3xl sm:text-4xl text-fire">{card.title}</div>
                <div className="mt-2 text-sm text-muted-foreground">{card.sub}</div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/0 transition-all duration-500 group-hover:ring-primary/40" />
            </motion.div>
          ))}
        </div>

        {/* Quotes ribbon */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative rounded-sm border border-primary/30 bg-carbon/60 p-6 font-display text-lg uppercase tracking-wide leading-tight text-foreground/90"
            >
              <span className="absolute -top-3 left-4 bg-background px-2 font-display text-xl text-primary">"</span>
              {q}
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
