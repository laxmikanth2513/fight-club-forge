import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-carbon/40">
      <div className="container">
        <SectionTitle
          eyebrow="STEP INTO THE RING"
          title="JOIN THE"
          accent="FIGHT."
          description="Drop us a message — first session is on the house."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              toast({ title: "Message sent", description: "We'll be in touch within 24h. Stay sharp." });
              setTimeout(() => setSent(false), 3000);
              (e.target as HTMLFormElement).reset();
            }}
            className="lg:col-span-3 rounded-sm border border-primary/20 glass p-6 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">NAME</label>
                <input
                  required
                  className="mt-2 w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">EMAIL</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>
            <div className="mt-5">
              <label className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">PHONE</label>
              <input
                className="mt-2 w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="mt-5">
              <label className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">YOUR GOAL</label>
              <textarea
                rows={4}
                required
                placeholder="I want to..."
                className="mt-2 w-full rounded-sm border border-border bg-background/60 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm bg-fire px-7 py-3.5 font-display tracking-widest text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform animate-pulse-glow"
            >
              {sent ? "SENT ✓" : "SEND MESSAGE"} <Send className="h-4 w-4" />
            </button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
              { Icon: MapPin, title: "VISIT US", text: "221 Combat Avenue, Iron District" },
              { Icon: Phone, title: "CALL US", text: "+1 (555) 010-FIGHT" },
              { Icon: Mail, title: "EMAIL", text: "train@f3club.com" },
            ].map((c, i) => (
              <div
                key={c.title}
                className="group flex items-start gap-4 rounded-sm border border-border bg-carbon/60 p-5 hover:border-primary/60 transition-all"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-fire-soft border border-primary/30 text-primary group-hover:bg-fire group-hover:text-primary-foreground transition-all">
                  <c.Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="font-display text-[10px] tracking-[0.3em] text-primary">{c.title}</div>
                  <div className="text-sm text-foreground mt-1">{c.text}</div>
                </div>
              </div>
            ))}

            <div className="overflow-hidden rounded-sm border border-border h-48">
              <iframe
                title="F3 Gym map"
                className="w-full h-full grayscale opacity-80 contrast-125"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.50%2C-0.10%2C51.52&layer=mapnik"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating call button */}
      <a
        href="tel:+15550103444"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-fire text-primary-foreground shadow-glow hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Call"
      >
        <Phone className="h-5 w-5" />
      </a>
    </section>
  );
};
