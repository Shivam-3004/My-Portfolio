import {
  Users,
  Cpu,
  Smartphone,
  Rocket,
  BookOpen,
  Lightbulb,
} from "lucide-react";

const items = [
  {
    icon: Users,
    title: "Team Leadership",
    body: "Led a 5-member team during the AI Traffic Light Optimizer project, coordinating development, task allocation, and successful project delivery within deadlines.",
  },
  {
    icon: Cpu,
    title: "AI & Computer Vision",
    body: "Developed practical experience in Computer Vision and Machine Learning through projects involving YOLOv8, Roboflow, dataset preparation, and real-time detection systems.",
  },
  {
    icon: Smartphone,
    title: "Flutter Development",
    body: "Built responsive cross-platform applications using Flutter and Dart, focusing on modern UI/UX principles, performance optimization, and scalable architecture.",
  },
  {
    icon: Rocket,
    title: "Web Development Internship",
    body: "Completed a professional internship at CollegeTips.in, contributing to frontend development, responsive design implementation, and real-world project workflows.",
  },
  {
    icon: BookOpen,
    title: "Industrial Training",
    body: "Completed 120 hours of Industrial Training in Data Annotation at NIELIT, gaining hands-on experience in AI dataset preparation and annotation workflows.",
  },
  {
    icon: Lightbulb,
    title: "Campus Ambassador",
    body: "Represented GeeksforGeeks as a Campus Ambassador, promoting technical learning opportunities, community engagement, and student participation in coding initiatives.",
  },
];

const Achievements = () => (
  <section className="relative py-20 md:py-32 border-t border-border/60">
    <div className="container">
      <div className="mb-16 reveal">
        <p className="section-label mb-4">06 — Achievements</p>
        <h2 className="text-4xl md:text-6xl font-display">
          Achievements & <span className="text-primary">recognition</span>.
        </h2>
      </div>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <li
            key={it.title}
            className="glass glass-hover rounded-2xl p-5 md:p-7 reveal"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="size-10 md:size-12 rounded-xl border border-primary/40 bg-primary/10 flex items-center justify-center text-primary mb-5">
              <it.icon className="size-5" />
            </div>
            <h3 className="font-tech text-lg text-foreground mb-2">
              {it.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {it.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Achievements;
