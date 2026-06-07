const items = [
  {
    year: "2023",
    title: "Computer Science Foundation",
    body: "Started Diploma in Computer Science Engineering and built a strong foundation in programming, problem-solving, Object-Oriented Programming, and core computer science concepts.",
  },
  {
    year: "2024",
    title: "Web Development Journey",
    body: "Started learning HTML, CSS, JavaScript, and frontend development. Built projects such as Pick Manga, Pet Friendly City, and DLC Website while developing strong UI and responsive design skills.",
  },
  {
    year: "2025",
    title: "Web Development Internship",
    body: "Completed a Web Development Internship at CollegeTips.in, contributing to responsive user interfaces, frontend improvements, and real-world web projects in a collaborative environment.",
  },
  {
    year: "2025",
    title: "Industrial Training - Data Annotation",
    body: "Completed 120 hours of industrial training at NIELIT, working with machine learning datasets, annotation workflows, and AI data preparation techniques.",
  },
  {
    year: "2025",
    title: "AI Traffic Light Optimizer",
    body: "Led a 5-member team to develop an AI-powered traffic optimization system using YOLOv8 and Roboflow. Managed project planning, team coordination, and AI solution integration.",
  },
  {
    year: "2025",
    title: "Flutter & Mobile Development",
    body: "Expanded into cross-platform mobile development using Flutter and Dart. Built mobile applications with responsive interfaces, Firebase integration, and modern UI/UX principles.",
  },
  {
    year: "2025",
    title: "Campus Ambassador",
    body: "Represented GeeksforGeeks as a Campus Ambassador, helping students discover learning opportunities, technical resources, and coding communities.",
  },
  {
    year: "2025",
    title: "Hand Sign Detection System",
    body: "Worked as a Frontend Developer on a real-time Hand Sign Detection project, creating intuitive user interfaces and collaborating closely with the AI/ML team.",
  },
  {
    year: "2026",
    title: "PayFlow & Full-Stack Development",
    body: "Built PayFlow, a secure enterprise digital wallet system using Spring Boot, PostgreSQL, and React. Implemented JWT authentication with token rotation, database query indexing, and pessimistic concurrency locks to ensure thread-safe transaction processing.",
  },
];

const Experience = () => (
  <section
    id="experience"
    className="relative py-20 md:py-32 border-t border-border/60"
  >
    <div className="container">
      <div className="mb-16 reveal">
        <p className="section-label mb-4">03 — Journey</p>
        <h2 className="heading-lg">
          A timeline of <span className="text-primary">making</span>.
        </h2>
      </div>

      <ol className="relative max-w-4xl mx-auto">
        <span
          aria-hidden
          className="absolute left-3 sm:left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent"
        />
        {items.map((it, i) => (
          <li
            key={it.title}
            className={`relative mb-10 md:mb-12 md:grid md:grid-cols-2 md:gap-12 reveal ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div
              className={`pl-10 sm:pl-12 md:pl-0 ${
                i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
              }`}
            >
              <p className="font-mono text-[10px] tracking-[0.3em] text-primary mb-2">
                {it.year}
              </p>
              <h3 className="font-tech text-xl sm:text-2xl text-foreground mb-3">
                {it.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
            <span
              aria-hidden
              className="absolute left-3 sm:left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--background)),0_0_20px_hsl(var(--primary))]"
            />
            <div className="hidden md:block" />
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
