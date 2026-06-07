import portrait from "@/assets/shivam-portrait.jpg";

const stats = [
  { k: "Projects Built", v: "10+" },
  { k: "Repositories", v: "12+" },
  { k: "Certifications", v: "8+" },
  { k: "Team Projects", v: "3+" },
];

const About = () => (
  <section id="about" className="relative py-20 md:py-32">
    <div className="container px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div className="hidden lg:block lg:col-span-5 reveal">
        <div className="sticky top-32">
         <div className="relative cyan-frame rounded-2xl overflow-hidden w-full max-w-xs sm:max-w-sm mx-auto glass">
            <img
              src={portrait}
              alt="Shivam Paliwal - Software Developer"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            // Engineer · Builder · Learner
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 lg:col-start-6 reveal">
        <p className="section-label mb-6">01 — About</p>
        <h2 className="heading-lg mb-6 md:mb-10">
          Building <span className="text-primary">software</span> that feels
          inevitable.
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          <p>
            I'm a software developer from India focused on{" "}
            <span className="text-foreground">Flutter</span>,{" "}
            <span className="text-foreground">AI/ML</span>, and the web. I love
            shipping production-quality cross-platform apps and exploring
            computer vision and intelligent systems.
          </p>
          <p>
            Recently I contributed to a{" "}
            <span className="text-primary">Hand Sign Detection System</span>,
            where I led the frontend development and user interface experience
            for a real-time gesture recognition application. Working closely
            with the AI/ML pipeline, I focused on creating an intuitive,
            responsive, and accessible interface that seamlessly connects users
            with computer vision technology. Beyond that, I enjoy building
            impactful web and mobile applications, exploring AI-powered
            solutions, and contributing to open-source projects.
          </p>
          <p>
            My playbook: deep curiosity, strong fundamentals, calm leadership,
            and a bias toward shipping.
          </p>
        </div>

        <dl className="mt-10 md:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((s) => (
            <div key={s.k} className="glass rounded-xl p-5">
              <dd className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">{s.v}</dd>
              <dt className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {s.k}
              </dt>
            </div>
          ))}
        </dl>

        <ul className="mt-12 flex flex-wrap gap-2">
          {[
            "Flutter",
            "Python",
            "Java",
            "YOLOv8",
            "Firebase",
            "Node.js",
            "SQL",
            "Spring Boot",
          ].map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
