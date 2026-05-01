import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const plans = [
  {
    name: "Beginner",
    price: 49,
    period: "/mo",
    desc: "Start your combat journey.",
    features: ["3 classes / week", "Group training", "Locker room access", "Free intro session"],
    featured: false,
  },
  {
    name: "Pro Fighter",
    price: 99,
    period: "/mo",
    desc: "Train like you mean it.",
    features: [
      "Unlimited classes",
      "All disciplines",
      "1 personal session / month",
      "Open mat & sparring",
      "Recovery zone access",
    ],
    featured: true,
  },
  {
    name: "Elite Unlimited",
    price: 179,
    period: "/mo",
    desc: "All in. No limits.",
    features: [
      "24/7 gym access",
      "Weekly 1-on-1 coaching",
      "Nutrition planning",
      "Fight team eligibility",
      "Bring a guest 4x/mo",
    ],
    featured: false,
  },
];

export const Membership = () => {
  return (
    <section id="membership" className="relative py-28 sm:py-36 bg-carbon/40">
      <div className="container">
        <SectionTitle
          eyebrow="JOIN THE ARENA"
          title="MEMBERSHIP"
          accent="PLANS."
          description="No contracts. No excuses. Just results."
          align="center"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-sm border p-8 transition-all hover:-translate-y-2 ${
                p.featured
                  ? "border-primary bg-fire-soft shadow-glow-strong scale-[1.02] lg:scale-105"
                  : "border-border bg-carbon hover:border-primary/60"
              }`}
            >
              {p.featured && (
                <>
                  <div className="absolute inset-x-0 top-0 h-px bg-fire animate-pulse-glow" />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-sm bg-fire px-3 py-1 font-display text-[10px] tracking-[0.3em] text-primary-foreground shadow-glow">
                      <Zap className="h-3 w-3" /> MOST POPULAR
                    </span>
                  </div>
                </>
              )}
              <div className="font-display text-xs tracking-[0.4em] text-primary mb-3">{p.name.toUpperCase()}</div>
              <div className="flex items-baseline gap-1">
                <span className="font-display text-5xl sm:text-6xl">${p.price}</span>
                <span className="font-display text-sm tracking-widest text-muted-foreground">{p.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm ${
                        p.featured ? "bg-fire text-primary-foreground" : "bg-fire-soft text-primary border border-primary/30"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-sm px-6 py-3.5 font-display tracking-widest transition-all ${
                  p.featured
                    ? "bg-fire text-primary-foreground shadow-glow hover:scale-[1.03] animate-pulse-glow"
                    : "border border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary"
                }`}
              >
                CHOOSE PLAN
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
