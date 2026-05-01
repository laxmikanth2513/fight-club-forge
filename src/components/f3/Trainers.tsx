import { motion } from "framer-motion";
import { Instagram, Twitter, Youtube, Trophy } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";
import { SectionTitle } from "./SectionTitle";

const trainers = [
  { img: t1, name: "Marcus Steele", spec: "Head MMA Coach", exp: "15 yrs", ach: "Ex-UFC Featherweight" },
  { img: t2, name: "Sofia Reyes", spec: "Kickboxing Champion", exp: "12 yrs", ach: "3x National Title" },
  { img: t3, name: "Kiran Thapa", spec: "Muay Thai Master", exp: "18 yrs", ach: "Lumpinee Stadium Vet." },
  { img: t4, name: "Viktor Novak", spec: "S&C Specialist", exp: "10 yrs", ach: "MSc Sports Science" },
];

export const Trainers = () => {
  return (
    <section id="trainers" className="relative py-28 sm:py-36 bg-carbon/40">
      <div className="container">
        <SectionTitle
          eyebrow="THE COACHES"
          title="MEET THE"
          accent="MASTERS."
          description="Champions, professors, and combat veterans. Your team is your edge."
          align="center"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-sm border border-border bg-background hover:border-primary/60"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={`${t.name}, ${t.spec}`}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                {/* Spotlight on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.3),transparent_60%)]" />
                {/* Achievement badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-sm bg-background/80 backdrop-blur-sm px-3 py-1.5 border border-primary/30">
                  <Trophy className="h-3 w-3 text-primary" />
                  <span className="font-display text-[10px] tracking-widest">{t.exp.toUpperCase()}</span>
                </div>
              </div>

              <div className="relative p-5">
                <div className="font-display text-[10px] tracking-[0.3em] text-primary mb-2">{t.spec.toUpperCase()}</div>
                <h3 className="font-display text-2xl uppercase">{t.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t.ach}</p>
                <div className="mt-4 flex gap-2">
                  {[Instagram, Twitter, Youtube].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="flex h-8 w-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-all hover:bg-fire hover:text-primary-foreground hover:border-primary hover:shadow-glow"
                      aria-label="social"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
