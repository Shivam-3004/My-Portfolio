import { useEffect, useState } from "react";
import {
  ArrowDown,
  Download,
  Github,
  ExternalLink,
  Linkedin,
} from "lucide-react";
import portrait from "@/assets/shivam-portrait.jpg";

const roles = [
  "Web Developer",
  "Flutter Engineer",
  "AI/ML Builder",
  "Open Source Contributor",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => {
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === current)
        setTimeout(() => setDeleting(true), 1400);
      else if (deleting && next === "") {
        setDeleting(false);
        setI(i + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden"
    >
      {/* parallax-ish backdrop layers */}
      <div aria-hidden className="absolute inset-0 grain-bg opacity-30" />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(184 100% 50% / 0.18), transparent 70%)",
        }}
      />

      <div className="container px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
        <div className="order-2 lg:order-1 lg:col-span-7 reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative rounded-full bg-primary h-2.5 w-2.5" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              Available for opportunities · India
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none text-balance">
            SHIVAM
            <br />
            <span className="text-primary">PALIWAL</span>
          </h1>

          <div className="mt-6 md:mt-8 font-tech text-lg sm:text-xl md:text-2xl text-muted-foreground">
            <span className="text-foreground caret">{text}</span>
          </div>

          <p className="mt-6 md:mt-8 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            Crafting cross-platform mobile apps, intelligent ML systems, and
            elegant web experiences. Equal parts engineer, problem solver, and
            product thinker.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <a href="#projects" className="btn-primary magnetic" data-magnetic>
              View Projects <ExternalLink className="size-4" />
            </a>

            <a
              href="https://drive.google.com/file/d/1Y9j-mtZlS-lBsvZKjWl8vaGhJrFhyoMJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost magnetic"
              data-magnetic
            >
              <Download className="size-4" />
              Resume
            </a>

            <a
              href="https://github.com/Shivam-3004"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost magnetic"
              data-magnetic
            >
              <Github className="size-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shivam884/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost magnetic"
              data-magnetic
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>

          <dl className="mt-10 md:mt-14 grid grid-cols-3 gap-3 sm:gap-6 max-w-md">
            {[
              { k: "Projects", v: "12+" },
              { k: "Tech Stack", v: "15+" },
              { k: "Open Source", v: "∞" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.k}
                </dt>
                <dd className="font-display text-2xl sm:text-3xl md:text-4xl mt-2 text-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative reveal mb-8 lg:mb-0">
          <div className="relative mx-auto max-w-md float-y">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-3xl"
              style={{
                background:
                  "radial-gradient(circle, hsl(184 100% 50% / 0.25), transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div className="relative cyan-frame rounded-3xl overflow-hidden glass">
              <img
                src={portrait}
                alt="Shivam Paliwal - Software Developer"
                width={1024}
                height={1280}
                fetchPriority="high"
                className="block w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, hsl(184 100% 50% / 0.15))",
                }}
              />
            </div>
            {/* corner ticks */}
            <span
              aria-hidden
              className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary"
            />
            <span
              aria-hidden
              className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/80">
              <span>SP_001</span>
              <span>· INDIA ·</span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.4em] text-muted-foreground">
          SCROLL
        </span>
        <span className="relative w-px h-12 bg-border overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-3 bg-primary animate-scroll-down" />
        </span>
        <ArrowDown className="size-4 text-primary" />
      </a>
    </section>
  );
};

export default Hero;
