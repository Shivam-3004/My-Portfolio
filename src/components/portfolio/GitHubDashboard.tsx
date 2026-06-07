import { useEffect, useRef, useState } from "react";
import { Github } from "lucide-react";

function useCount(target: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / duration);
          setVal(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return { val, ref };
}

const Counter = ({
  n,
  label,
  suffix = "",
}: {
  n: number;
  label: string;
  suffix?: string;
}) => {
  const { val, ref } = useCount(n);
  return (
    <div ref={ref} className="glass rounded-2xl p-7">
      <div className="font-display text-4xl md:text-6xl text-primary">
        {val}
        {suffix}
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

const stack = [
  ["Java / Spring Boot", 30],
  ["Flutter / Dart", 25],
  ["Web Technologies", 20],
  ["Python & AI/ML", 15],
  ["Databases & Tools", 10],
] as const;

const GitHubDashboard = () => (
  <section className="relative py-20 md:py-32 border-t border-border/60">
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 reveal">
          <p className="section-label mb-4">07 — GitHub</p>
          <h2 className="heading-lg mb-6">
            Where I <span className="text-primary">build</span> in public.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
            A snapshot of my development journey featuring web applications,
            Flutter projects, AI/ML experiments, and continuous learning through
            real-world implementations.
          </p>
          <a
            href="https://github.com/Shivam-3004"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            <Github className="size-4" /> @Shivam-3004
          </a>

          <div className="mt-10 glass rounded-2xl p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              // Current Focus
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-foreground">
              <li>
                → Building responsive web applications with React & TypeScript
              </li>
              <li>
                → Developing cross-platform mobile apps using Flutter & Dart
              </li>
              <li>
                → Exploring AI-powered solutions with Computer Vision and YOLOv8
              </li>
            </ul>

            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
              // Learning Next
            </p>

            <ul className="space-y-2 text-sm text-foreground">
              <li>→ Full-Stack Development with Spring Boot & REST APIs</li>
              <li>→ Advanced React Architecture & State Management</li>
              <li>→ Open Source Contribution & Scalable Software Design</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
            <Counter n={12} label="Repositories" suffix="+" />
            <Counter n={12} label="Projects" suffix="+" />
            <Counter n={8} label="Certificates" suffix="+" />
            <Counter n={5} label="Team Members Led" suffix="" />
          </div>

          <div className="glass rounded-2xl p-4 md:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-5">
              // Tech stack usage
            </p>
            <ul className="space-y-4">
              {stack.map(([name, pct]) => (
                <li key={name as string}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs text-foreground">
                      {name}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-glow"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GitHubDashboard;
