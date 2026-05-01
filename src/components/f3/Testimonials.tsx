import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const testimonials = [
  {
    name: "Daniel Ford",
    role: "Member, 2 years",
    text: "F3 changed my life. Lost 22kg, gained confidence I never had. The coaches push you, but they care. Best decision I ever made.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Aisha Khan",
    role: "Amateur Fighter",
    text: "From day one I felt at home. The Muay Thai program is world class — Coach Kiran is a legend. I won my first amateur bout in 8 months.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Liam O'Connor",
    role: "Member, 1 year",
    text: "Tried 3 gyms before F3. Nothing comes close. The atmosphere, the discipline, the energy — it's a real fight gym, not a cosplay.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=68",
  },
  {
    name: "Mia Chen",
    role: "Kickboxing student",
    text: "Sofia is an unreal coach. I came in shy and now I spar 3x a week. F3 is a family that pushes you to be your best self.",
    rating: 5,
    img: "https://i.pravatar.cc/150?img=45",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionTitle
          eyebrow="VOICES OF THE FLOOR"
          title="WHAT FIGHTERS"
          accent="SAY."
          align="center"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute -left-8 top-0 hidden md:block">
            <Quote className="h-24 w-24 text-primary/20" />
          </div>

          <div className="relative overflow-hidden rounded-sm border border-primary/20 glass p-8 sm:p-12 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-display text-xl sm:text-2xl uppercase leading-tight tracking-wide text-foreground">
                  "{t.text}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    width={56}
                    height={56}
                    loading="lazy"
                    className="h-14 w-14 rounded-full border-2 border-primary object-cover"
                  />
                  <div>
                    <div className="font-display tracking-widest">{t.name.toUpperCase()}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Slide ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    k === i ? "w-10 bg-fire shadow-glow" : "w-4 bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border hover:border-primary hover:bg-fire hover:text-primary-foreground transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-border hover:border-primary hover:bg-fire hover:text-primary-foreground transition-all"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
