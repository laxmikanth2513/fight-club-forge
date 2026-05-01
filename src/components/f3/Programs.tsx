import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Swords,
  Flame,
  Crown,
  Dumbbell,
  Activity,
  ShieldCheck,
  Baby,
  UserCog,
  ArrowUpRight,
} from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const programs = [
  { icon: Swords, title: "MMA Training", desc: "Striking, grappling, ground game. Master every range." },
  { icon: Flame, title: "Kickboxing", desc: "Explosive combinations of fists, kicks and footwork." },
  { icon: Crown, title: "Muay Thai", desc: "The art of eight limbs — Thailand's brutal striking science." },
  { icon: Dumbbell, title: "Strength & Conditioning", desc: "Build the engine of a fighter: power, speed, gas tank." },
  { icon: Activity, title: "Weight Loss Fitness", desc: "Combat-style HIIT that burns fat and builds confidence." },
  { icon: ShieldCheck, title: "Self Defense", desc: "Real-world techniques to stay safe in any situation." },
  { icon: Baby, title: "Kids Martial Arts", desc: "Discipline, respect, and confidence from age 5+." },
  { icon: UserCog, title: "Personal Training", desc: "1-on-1 coaching tailored to your goals and level." },
];

const Card = ({ p, i }: { p: (typeof programs)[number]; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: px * 8, y: -py * 8 });
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: "transform 0.3s ease-out",
      }}
      className="group relative overflow-hidden rounded-sm border border-border bg-carbon p-6 sm:p-7 hover:border-primary/60"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.18), transparent 60%)",
        }}
      />
      {/* Animated border trail (top edge) */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-streak" />
      </div>

      <div className="relative">
        <div className="mb-6 flex items-center justify-between">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-sm bg-fire-soft border border-primary/30 text-primary transition-all group-hover:bg-fire group-hover:text-primary-foreground group-hover:shadow-glow">
            <p.icon className="h-6 w-6 transition-transform group-hover:rotate-[-8deg] group-hover:scale-110" strokeWidth={2} />
          </span>
          <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">0{i + 1}</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wide group-hover:text-primary transition-colors">
          {p.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        <div className="mt-6 flex items-center gap-2 font-display text-xs tracking-[0.3em] text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          EXPLORE <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.div>
  );
};

export const Programs = () => {
  return (
    <section id="programs" className="relative py-28 sm:py-36">
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionTitle
            eyebrow="OUR ARSENAL"
            title="TRAINING"
            accent="PROGRAMS"
            description="Eight disciplines, one mission: turn you into a complete athlete."
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Card key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
