import { useRef, useState } from "react";
import shopzillaImg from "@/assets/shopzilla.png";
import dlcWebsiteImg from "@/assets/dlc-website.png";
import petCityImg from "@/assets/pet-friendly-city.png";
import photoGalleryImg from "@/assets/photo-gallery.png";
import pickMangaImg from "@/assets/pick-manga.png";
import chatbotImg from "@/assets/chatbot.png";
import handSign from "@/assets/hand-sign.png";
import trafficImg from "@/assets/traffic.png";
import ticTacToeImg from "@/assets/tictactoe.png";
import payflowImg from "@/assets/payflow.png";
import todoImg from "@/assets/todo.png";

import {
  Github,
  ExternalLink,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type Category = ("MOBILE" | "WEB" | "AI/ML")[];

type Project = {
  title: string;
  category: Category;
  description: string;
  tech: string[];
  github: string;
  achievement: string;
  image?: string;
  live?: string;
  status?: "RECENT" | "FEATURED";
};

/* Ordered by GitHub repository recency / stars
   (most recent push first — Hand-Sign-Detection is current work). */
const projects: Project[] = [
  {
    title: "PayFlow",
    category: ["WEB"],
    image: payflowImg,
    description:
      "Enterprise-grade digital wallet system with secure JWT authentication, transaction history tracking, admin dashboard controls, and pessimistic concurrency safe balance operations.",
    tech: ["Spring Boot", "PostgreSQL", "React", "JWT", "Docker"],
    github: "https://github.com/Shivam-3004/digital-wallet",
    live: "https://digital-wallet-one-inky.vercel.app/",
    achievement: "Pessimistic concurrency safe backend",
    status: "RECENT",
  },
  {
    title: "Hand Sign Detection",
    category: ["AI/ML", "MOBILE"],
    image: handSign,
    description:
      "Real-time hand sign language classifier built with computer vision. Streams webcam frames through a trained CNN to predict gestures live — built for accessibility tooling.",
    tech: ["Python", "TensorFlow", "OpenCV", "Dart"],
    github: "https://github.com/Shivam-3004/Hand-Sign-Detection",
    achievement: "Currently shipping · real-time inference",
  },
  {
    title: "Shopzilla",
    category: ["WEB"],
    image: shopzillaImg,
    description:
      "Modern e-commerce front-end with product catalogue, cart, and responsive shopping flow — pixel-tuned and mobile-first.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Shivam-3004/shopzilla",
    live: "https://shivam-3004.github.io/shopzilla/",
    achievement: "Full e-commerce flow shipped",
  },
  {
    title: "AI Traffic Light Optimizer",
    category: ["AI/ML", "WEB"],
    image: trafficImg,
    description:
      "YOLOv8-driven adaptive traffic signal controller that rebalances green-time based on live lane density — led a 4-person team.",
    tech: ["YOLOv8", "Python", "OpenCV"],
    github: "https://github.com/Shivam-3004/ai-traffic-optimizer",
    achievement: "~32% wait-time reduction",
  },
  {
    title: "Tic Tac Toe",
    category: ["MOBILE", "WEB"],
    image: ticTacToeImg,
    description:
      "Polished classic with smart move highlighting, scores, and minimal but satisfying animations — written in modern C++/web.",
    tech: ["C++", "Game Logic"],
    github: "https://github.com/Shivam-3004/tic-tac-toe",
    live: "https://github.com/Shivam-3004/tic-tac-toe/releases/download/v1.0.0/app-release.apk",
    achievement: "Clean game-state architecture",
  },
  {
    title: "DLC Website",
    category: ["WEB"],
    image: dlcWebsiteImg,
    description:
      "Responsive marketing site for the campus DLC initiative — semantic HTML, accessible interactions, modern CSS.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Shivam-3004/DLC-Website",
    live: "https://shivam-3004.github.io/DLC-Website/",
    achievement: "Responsive · accessible",
  },
  {
    title: "DLC Chatbot",
    category: ["AI/ML", "WEB"],
    image: chatbotImg,
    description:
      "Conversational assistant for the DLC site — guided Q&A flows, intent matching, and helpful resource routing.",
    tech: ["HTML", "JS", "NLP"],
    github: "https://github.com/Shivam-3004/DLC-Chatbot",
    live: "https://shivam-3004.github.io/DLC-Chatbot/",
    achievement: "Intent-driven flows",
  },
  {
    title: "Photo Gallery",
    category: ["WEB"],
    image: photoGalleryImg,
    description:
      "Native-feeling gallery with grid/list views, lazy loading, and smooth image-detail transitions.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/Shivam-3004/gallery-project",
    live: "https://shivam-3004.github.io/gallery-project/",
    achievement: "Performance-tuned scrolling",
  },
  {
    title: "Pet Friendly City",
    category: ["WEB"],
    image: petCityImg,
    description:
      "Discover pet-friendly spots, services, and routes around your city — community-first experience.",
    tech: ["HTML", "CSS", "Maps"],
    github: "https://github.com/Shivam-3004/Pet-Friendly-City-",
    live: "https://shivam-3004.github.io/Pet-Friendly-City-/",
    achievement: "Geo + community features",
  },
  {
    title: "Todo App",
    category: ["WEB"],
    image: todoImg,
    description:
      "Minimalist productivity app with local persistence, gentle animations, and gesture-first interactions.",
    tech: ["JavaScript", "LocalStorage"],
    github: "https://github.com/Shivam-3004/Todo-App",
    live: "https://todo-app-six-psi-24.vercel.app",
    achievement: "Offline-first architecture",
  },
  {
    title: "Pick Manga",
    category: ["WEB"],
    image: pickMangaImg,
    description:
      "Clean app for browsing, searching, and tracking manga reading lists across providers.",
    tech: ["JavaScript", "REST API"],
    github: "https://github.com/Shivam-3004/Pick-Manga",
    achievement: "Content-first UX",
    live: "https://shivam-3004.github.io/Pick-Manga/",
  },
];

const filters = ["ALL", "MOBILE", "WEB", "AI/ML"] as const;

const Projects = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("ALL");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const list =
    active === "ALL"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 border-t border-border/60 overflow-hidden"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="reveal">
            <p className="section-label mb-4">05 — Selected Work</p>
            <h2 className="heading-lg">
              Things I've <span className="text-primary">built</span>.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground font-mono uppercase tracking-[0.25em]">
              ← Scroll horizontally · most recent first
            </p>
          </div>
          <div className="flex flex-wrap gap-2 reveal" role="tablist">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => {
                  setActive(f);
                  scrollerRef.current?.scrollTo({
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className={`chip transition-all ${active === f ? "chip-active" : "hover:text-foreground"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Horizontal scroller */}
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-12 lg:px-24 pb-6"
          style={{ scrollbarWidth: "thin" }}
        >
          {list.map((p, i) => (
            <article
              key={p.title}
              data-card
              className="group glass glass-hover rounded-2xl p-6 flex flex-col shrink-0 snap-start reveal w-[92vw] sm:w-[75vw] md:w-[420px] lg:w-[440px]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-wrap gap-2">
                  {p.category.map((cat) => (
                    <span key={cat} className="chip">
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {p.status && (
                    <span
                      className={`chip ${p.status === "RECENT" ? "chip-active" : ""}`}
                    >
                      {p.status === "RECENT" && (
                        <span className="mr-1.5 inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      )}
                      {p.status}
                    </span>
                  )}

                  <span className="font-mono text-[10px] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
              </div>

              <a
                href={p.live || p.github}
                target="_blank"
                rel="noreferrer"
                className="block relative aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-border bg-surface"
              >
                {p.image ? (
                  <>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex gap-1 flex-wrap">
                        {p.category.map((cat) => (
                          <span
                            key={cat}
                            className="font-mono text-[9px] uppercase tracking-[0.2em] text-white"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>

                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        VIEW PROJECT
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(circle at 70% 30%, hsl(184 100% 50% / 0.18), transparent 60%)",
                      }}
                    />

                    <div className="absolute inset-0 grain-bg opacity-40" />

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      <span>{p.category}</span>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        ● PREVIEW SOON
                      </span>
                    </div>
                  </>
                )}
              </a>

              <h3 className="font-tech text-xl text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {p.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="font-mono text-[10px] text-muted-foreground border border-border rounded px-2 py-0.5"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-primary font-mono">
                ↳ {p.achievement}
              </p>

              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  <Github className="size-3.5" /> Code
                </a>
                {p.live ? (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground hover:text-primary"
                  >
                    <ExternalLink className="size-3.5" />
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    <ExternalLink className="size-3.5" />
                    Demo Soon
                  </span>
                )}
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </article>
          ))}
          <div className="shrink-0 w-6" aria-hidden />
        </div>

        {/* edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent"
        />

        {/* Controls */}
        <div className="container mt-6 flex items-center justify-end gap-3">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll projects left"
            className="size-11 rounded-full border border-border hover:border-primary/60 hover:text-primary text-muted-foreground flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll projects right"
            className="size-11 rounded-full border border-border hover:border-primary/60 hover:text-primary text-muted-foreground flex items-center justify-center transition-colors"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
