import { Flame, Instagram, Facebook, Youtube, Twitter, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-background">
      {/* Animated divider */}
      <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
        <span className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent animate-streak" />
      </div>

      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-fire shadow-glow">
                <Flame className="h-5 w-5 text-white" />
              </span>
              <span className="font-display text-xl tracking-widest">F3<span className="text-primary">.</span>CLUB</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              The world-class kickboxing & MMA academy. Forging fighters since 2014.
            </p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground hover:bg-fire hover:text-primary-foreground hover:border-primary hover:shadow-glow transition-all"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display text-xs tracking-[0.3em] text-primary mb-4">QUICK LINKS</div>
            <ul className="space-y-2 text-sm">
              {["About", "Programs", "Trainers", "Schedule", "Gallery"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-xs tracking-[0.3em] text-primary mb-4">CONTACT</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>221 Combat Avenue</li>
              <li>Iron District, IL 60601</li>
              <li>+1 (555) 010-FIGHT</li>
              <li>train@f3club.com</li>
            </ul>
          </div>

          <div>
            <div className="font-display text-xs tracking-[0.3em] text-primary mb-4">NEWSLETTER</div>
            <p className="text-sm text-muted-foreground mb-3">
              Get fight tips, schedules and member-only deals.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex rounded-sm border border-border bg-carbon overflow-hidden focus-within:border-primary"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-3 py-2.5 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-fire px-4 text-primary-foreground hover:opacity-90"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} F3 Kickboxing & MMA Fitness Club. All rights reserved.</div>
          <div className="font-display tracking-[0.3em]">FORGED IN FIRE.</div>
        </div>
      </div>
    </footer>
  );
};
