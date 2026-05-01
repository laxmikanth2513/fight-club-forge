import { motion } from "framer-motion";
import { useState } from "react";
import { Clock, User } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

type ClassItem = { time: string; name: string; coach: string; cat: string };
const schedule: Record<string, ClassItem[]> = {
  MON: [
    { time: "06:00 AM", name: "Power Boxing", coach: "M. Steele", cat: "Boxing" },
    { time: "10:00 AM", name: "Kickboxing Fundamentals", coach: "S. Reyes", cat: "Kickboxing" },
    { time: "06:30 PM", name: "MMA Sparring", coach: "M. Steele", cat: "MMA" },
    { time: "08:00 PM", name: "Strength & Conditioning", coach: "V. Novak", cat: "Strength" },
  ],
  TUE: [
    { time: "06:30 AM", name: "Muay Thai Basics", coach: "K. Thapa", cat: "Muay Thai" },
    { time: "12:00 PM", name: "Lunch Burn HIIT", coach: "V. Novak", cat: "Strength" },
    { time: "07:00 PM", name: "Advanced Kickboxing", coach: "S. Reyes", cat: "Kickboxing" },
  ],
  WED: [
    { time: "06:00 AM", name: "Heavy Bag Drills", coach: "M. Steele", cat: "Boxing" },
    { time: "05:00 PM", name: "Kids Martial Arts", coach: "S. Reyes", cat: "Kids" },
    { time: "07:30 PM", name: "MMA Ground Game", coach: "M. Steele", cat: "MMA" },
  ],
  THU: [
    { time: "07:00 AM", name: "Muay Thai Pads", coach: "K. Thapa", cat: "Muay Thai" },
    { time: "06:00 PM", name: "Self Defense", coach: "V. Novak", cat: "Self Defense" },
    { time: "08:00 PM", name: "Open Mat Sparring", coach: "All", cat: "MMA" },
  ],
  FRI: [
    { time: "06:30 AM", name: "Strength Circuit", coach: "V. Novak", cat: "Strength" },
    { time: "06:00 PM", name: "Fight Night Prep", coach: "M. Steele", cat: "MMA" },
    { time: "07:30 PM", name: "Kickboxing Cardio", coach: "S. Reyes", cat: "Kickboxing" },
  ],
  SAT: [
    { time: "09:00 AM", name: "Saturday Smash", coach: "M. Steele", cat: "MMA" },
    { time: "11:00 AM", name: "Kids Martial Arts", coach: "S. Reyes", cat: "Kids" },
    { time: "04:00 PM", name: "Muay Thai Clinic", coach: "K. Thapa", cat: "Muay Thai" },
  ],
  SUN: [
    { time: "10:00 AM", name: "Recovery & Mobility", coach: "V. Novak", cat: "Strength" },
    { time: "12:00 PM", name: "Family Class", coach: "All", cat: "Kids" },
  ],
};

const cats = ["All", "MMA", "Kickboxing", "Muay Thai", "Boxing", "Strength"];

export const Schedule = () => {
  const [day, setDay] = useState("MON");
  const [cat, setCat] = useState("All");
  const list = schedule[day].filter((c) => cat === "All" || c.cat === cat);

  return (
    <section id="schedule" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionTitle
          eyebrow="WEEKLY ROUNDS"
          title="THE FIGHT"
          accent="SCHEDULE."
          description="Pick your day. Pick your fight. Show up ready."
        />

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-sm border px-4 py-2 font-display text-xs tracking-[0.2em] transition-all ${
                cat === c
                  ? "bg-fire text-primary-foreground border-primary shadow-glow"
                  : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Day tabs */}
        <div className="mb-8 grid grid-cols-7 gap-1 rounded-sm border border-border p-1 bg-carbon">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`relative rounded-sm py-3 font-display text-xs sm:text-sm tracking-widest transition-all ${
                day === d ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {day === d && (
                <motion.span
                  layoutId="active-day"
                  className="absolute inset-0 rounded-sm bg-fire shadow-glow"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative">{d}</span>
            </button>
          ))}
        </div>

        {/* Class list */}
        <div className="grid gap-3">
          {list.length === 0 && (
            <div className="rounded-sm border border-dashed border-border p-10 text-center text-muted-foreground">
              No classes match this filter on {day}.
            </div>
          )}
          {list.map((c, i) => (
            <motion.div
              key={`${day}-${i}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-sm border border-border bg-carbon/60 p-5 transition-all hover:border-primary/60 hover:bg-carbon hover:translate-x-1"
            >
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-4 w-4" />
                  <span className="font-display tracking-widest text-sm">{c.time}</span>
                </div>
                <div className="h-8 w-px bg-border hidden sm:block" />
                <div>
                  <div className="font-display text-lg uppercase">{c.name}</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                    <User className="h-3 w-3" />
                    {c.coach}
                  </div>
                </div>
              </div>
              <span className="self-start sm:self-auto rounded-sm border border-primary/30 bg-fire-soft px-3 py-1 font-display text-[10px] tracking-widest text-primary">
                {c.cat.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
