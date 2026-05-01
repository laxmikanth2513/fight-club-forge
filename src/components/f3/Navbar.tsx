import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Gallery", href: "#gallery" },
  { label: "Membership", href: "#membership" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-primary/10 py-3" : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-sm bg-fire shadow-glow">
            <Flame className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl tracking-widest">
            F3<span className="text-primary">.</span>CLUB
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative px-3 py-2 font-display text-sm tracking-widest text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label.toUpperCase()}
              <span className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-fire transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-sm bg-fire px-5 py-2.5 font-display text-sm tracking-widest text-primary-foreground shadow-glow transition-transform hover:scale-105 animate-pulse-glow"
        >
          JOIN NOW
        </a>

        <button
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden rounded-sm border border-primary/30 p-2 text-primary"
          aria-label="menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden glass border-t border-primary/10"
          >
            <div className="container flex flex-col py-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1, transition: { delay: i * 0.04 } }}
                  className="border-b border-border/40 py-3 font-display tracking-widest text-foreground/80 hover:text-primary"
                >
                  {l.label.toUpperCase()}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center rounded-sm bg-fire px-5 py-3 font-display tracking-widest text-primary-foreground shadow-glow"
              >
                JOIN NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
