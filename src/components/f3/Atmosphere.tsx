import { useEffect, useRef } from "react";

/** Global background: cursor spotlight + ember particles + grid + flicker arena lights */
export const Atmosphere = () => {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!spotRef.current) return;
      spotRef.current.style.setProperty("--mx", `${e.clientX}px`);
      spotRef.current.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Pre-generate embers
  const embers = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 12,
    duration: 8 + Math.random() * 10,
    size: 2 + Math.random() * 4,
    drift: -40 + Math.random() * 80,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--ember)/0.12),transparent_55%)]" />

      {/* Arena lights flicker */}
      <div className="absolute -top-20 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl animate-flicker" />
      <div className="absolute top-1/3 right-10 h-[300px] w-[300px] rounded-full bg-ember/10 blur-3xl animate-flicker" style={{ animationDelay: "1.5s" }} />

      {/* Embers */}
      {embers.map((e) => (
        <span
          key={e.id}
          className="absolute bottom-0 block rounded-full bg-ember"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            boxShadow: `0 0 ${e.size * 3}px hsl(var(--ember))`,
            animation: `ember-rise ${e.duration}s linear ${e.delay}s infinite`,
            ["--drift" as never]: `${e.drift}px`,
          }}
        />
      ))}

      {/* Cursor spotlight */}
      <div
        ref={spotRef}
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), hsl(var(--primary) / 0.12), transparent 40%)",
        }}
      />

      {/* Noise */}
      <div className="absolute inset-0 noise opacity-[0.05] mix-blend-overlay" />
    </div>
  );
};
