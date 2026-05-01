import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Shield, Trophy, Zap, Users } from "lucide-react";
import gymImg from "@/assets/gym-interior.jpg";
import { SectionTitle } from "./SectionTitle";

const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
};

const stats = [
  { icon: Users, value: 12000, suffix: "+", label: "Members Trained" },
  { icon: Trophy, value: 47, suffix: "", label: "Championships Won" },
  { icon: Zap, value: 10, suffix: "+", label: "Years Experience" },
  { icon: Shield, value: 35, suffix: "", label: "Daily Sessions" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-sm border border-primary/20 shadow-card">
              <img
                src={gymImg}
                alt="F3 gym interior with boxing ring and heavy bags"
                width={1600}
                height={1000}
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/20" />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:right-8 max-w-[260px] rounded-sm border border-primary/40 glass p-5 shadow-glow"
            >
              <div className="font-display text-3xl text-fire">EST. 2014</div>
              <div className="mt-1 text-sm text-muted-foreground">
                A decade forging champions, one round at a time.
              </div>
            </motion.div>
            {/* Background neon block */}
            <div className="absolute -left-6 -top-6 h-24 w-24 border-2 border-primary/40 -z-10" />
          </motion.div>

          {/* Text */}
          <div>
            <SectionTitle
              eyebrow="ABOUT F3"
              title="WHERE WEAKNESS"
              accent="DIES."
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              At F3, we don't just train bodies — we forge mindsets. Built on the pillars of{" "}
              <span className="text-foreground">discipline, strength, and confidence</span>, our combat academy
              transforms ordinary people into extraordinary athletes. From your first jab to your first championship
              belt, every drop of sweat is a step closer to the warrior within.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-base text-muted-foreground leading-relaxed"
            >
              World-class coaches. Olympic-grade equipment. A community that pushes harder.
            </motion.p>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative border-l-2 border-primary/40 pl-4 transition-all hover:border-primary"
                >
                  <s.icon className="mb-2 h-5 w-5 text-primary" />
                  <div className="font-display text-3xl sm:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 font-display text-[10px] tracking-[0.3em] text-muted-foreground">
                    {s.label.toUpperCase()}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
