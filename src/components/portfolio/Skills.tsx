const groups = [
  {
    title: "Mobile Development",
    items: [
      ["Flutter", 85],
      ["Dart", 80],
      ["Firebase", 75],
      ["REST APIs", 80],
    ],
  },
  {
    title: "Programming Languages",
    items: [
      ["Java", 85],
      ["Python", 80],
      ["JavaScript", 75],
      ["C++", 70],
    ],
  },
  {
    title: "Frontend Development",
    items: [
      ["React", 80],
      ["TypeScript", 75],
      ["HTML/CSS", 90],
      ["Tailwind CSS", 80],
    ],
  },
  {
    title: "Backend Development",
    items: [
      ["Spring Boot", 70],
      ["Node.js", 60],
      ["REST APIs", 80],
      ["MySQL", 75],
    ],
  },
  {
    title: "AI / Machine Learning",
    items: [
      ["YOLOv8", 75],
      ["OpenCV", 70],
      ["Data Annotation", 85],
      ["Machine Learning", 65],
    ],
  },
  {
    title: "Tools & Version Control",
    items: [
      ["Git", 90],
      ["GitHub", 90],
      ["VS Code", 95],
      ["Postman", 80],
    ],
  },
  {
    title: "Core Concepts",
    items: [
      ["OOP", 85],
      ["DSA", 75],
      ["Problem Solving", 85],
      ["Agile", 75],
    ],
  },
] as const;

const Skills = () => (
  <section
    id="skills"
    className="relative py-20 md:py-32 border-t border-border/60"
  >
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
        <div className="reveal">
          <p className="section-label mb-4">02 — Capabilities</p>
          <h2 className="heading-lg">
            Stack &amp; <span className="text-primary">specialty</span>.
          </h2>
        </div>
        <p className="reveal max-w-md text-muted-foreground">
          A working toolkit refined through real projects — from mobile and web
          to vision-based ML systems.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, gi) => (
          <article
            key={g.title}
            className="glass glass-hover rounded-2xl p-5 sm:p-7 reveal"
            style={{ transitionDelay: `${gi * 60}ms` }}
          >
            <header className="flex items-center justify-between mb-6">
              <h3 className="font-tech text-sm uppercase tracking-[0.25em] text-foreground">
                {g.title}
              </h3>
              <span className="font-mono text-[10px] text-primary">
                0{gi + 1}
              </span>
            </header>
            <ul className="space-y-4">
              {g.items.map(([name, pct]) => (
                <li key={name as string}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs text-foreground">
                      {name}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {pct}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-border overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"
                      style={{
                        width: `${pct}%`,
                        boxShadow: "0 0 10px hsl(184 100% 50% / 0.5)",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* horizontal showcase */}
      {/* Desktop Marquee */}
      <div className="hidden md:block mt-16 overflow-hidden border-y border-border/60 py-6 reveal">
        <div
          className="flex gap-8 md:gap-12 whitespace-nowrap font-display text-2xl lg:text-4xl text-muted-foreground/60 animate-[shimmer_30s_linear_infinite]"
          style={{ backgroundSize: "200% auto" }}
        >
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              "Flutter",
              "React",
              "TypeScript",
              "Java",
              "Spring Boot",
              "Python",
              "YOLOv8",
              "Firebase",
              "MySQL",
              "GitHub",
            ].map((s, i) => (
              <span
                key={`${k}-${i}`}
                className="flex items-center gap-8 md:gap-12"
              >
                <span className="hover:text-primary transition-colors">
                  {s}
                </span>
                <span className="text-primary/40">◆</span>
              </span>
            )),
          )}
        </div>
      </div>

      {/* Mobile Skills Showcase */}
      <div className="md:hidden mt-10 reveal">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Flutter",
            "React",
            "TypeScript",
            "Java",
            "Spring Boot",
            "Python",
            "YOLOv8",
            "Firebase",
            "MySQL",
            "GitHub",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full border border-border text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
