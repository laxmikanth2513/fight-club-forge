import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import heroImg from "@/assets/hero-fighter.jpg";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative isolate min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="MMA fighter ready for combat"
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,transparent,hsl(var(--background))_85%)]" />
      </motion.div>

      {/* Animated streak lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute h-px w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-streak"
            style={{
              top: `${20 + i * 25}%`,
              animationDelay: `${i * 1.4}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 flex min-h-screen flex-col justify-center pb-20 pt-32"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-primary" />
          <span className="font-display text-xs tracking-[0.4em] text-primary">F3 COMBAT CLUB / EST. 2014</span>
        </motion.div>

        <h1 className="font-display text-[clamp(3rem,11vw,11rem)] font-bold leading-[0.85] tracking-tight">
          {["TRAIN", "LIKE A", "FIGHTER"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ y: "110%", opacity: 0, rotateX: -45 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 2 + i * 0.18, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="block overflow-hidden"
            >
              <span className={i === 1 ? "text-stroke" : "text-shadow-fire"}>{word}</span>
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          className="mt-8 max-w-xl font-display text-base sm:text-lg tracking-[0.3em] text-foreground/80"
        >
          KICKBOXING <span className="text-primary">•</span> MMA <span className="text-primary">•</span> STRENGTH{" "}
          <span className="text-primary">•</span> DISCIPLINE <span className="text-primary">•</span> FITNESS
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.95, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-fire px-8 py-4 font-display tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] animate-pulse-glow"
          >
            <span className="relative z-10">JOIN NOW</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#programs"
            className="group inline-flex items-center justify-center gap-3 rounded-sm border border-primary/40 bg-background/40 px-8 py-4 font-display tracking-widest text-foreground backdrop-blur-md transition-all hover:border-primary hover:bg-primary/10"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-fire">
              <Play className="h-3 w-3 fill-white text-white" />
            </span>
            BOOK FREE TRIAL
          </a>
        </motion.div>

        {/* Vital stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-l-2 border-primary pl-6"
        >
          {[
            { v: "12K+", l: "ATHLETES" },
            { v: "40+", l: "TITLES WON" },
            { v: "10", l: "YEARS" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl sm:text-4xl text-fire">{s.v}</div>
              <div className="mt-1 font-display text-[10px] tracking-[0.3em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-display text-[10px] tracking-[0.4em] text-muted-foreground">SCROLL</span>
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-primary/50 overflow-hidden">
          <span className="absolute top-2 h-2 w-1 rounded-full bg-primary animate-scroll-down" />
        </span>
        <ChevronDown className="h-4 w-4 text-primary" />
      </motion.div>

      {/* Side rotated label */}
      <div className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 origin-right md:block">
        <span className="font-display text-xs tracking-[0.5em] text-muted-foreground">F3 / WORLD CLASS COMBAT ACADEMY</span>
      </div>
    </section>
  );
};
