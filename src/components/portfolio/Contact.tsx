import {
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  MapPin,
  Code2,
  BadgeCheck,
  Phone,
} from "lucide-react";

const primary = {
  icon: Mail,
  label: "Email — Preferred",
  value: "paliwalshivam884@gmail.com",
  href: "mailto:paliwalshivam884@gmail.com?subject=Opportunity%20for%20Shivam%20Paliwal",
  meta: "Replies within 24h",
};

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shivam884",
    href: "https://www.linkedin.com/in/shivam884/",
    meta: "Resume + experience",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Shivam-3004",
    href: "https://github.com/Shivam-3004",
    meta: "Code & projects",
  },
  {
    icon: Code2,
    label: "GeeksforGeeks",
    value: "geeksforgeeks.org/user/shivampaliwal",
    href: "https://www.geeksforgeeks.org/user/shivampaliwal/",
    meta: "DSA & problem solving",
  },
];

const Contact = () => (
  <section
    id="contact"
    className="relative py-20 md:py-32 border-t border-border/60"
  >
    <div className="container">
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left: statement */}
        <div className="lg:col-span-5 reveal">
          <p className="section-label mb-4">09 — Contact</p>

          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 mb-6">
            <BadgeCheck className="size-3.5 text-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Open to Opportunities
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
            Let's build
            <br />
            something <span className="text-primary">meaningful</span>.
          </h2>

          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Actively seeking Software Developer, Full-Stack Developer, Flutter
            Developer, and AI/ML opportunities. Open to internships, full-time
            roles, and impactful collaborations.
          </p>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6 max-w-md">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Location
              </dt>
              <dd className="mt-2 flex items-center gap-2 text-foreground">
                <MapPin className="size-4 text-primary" /> India
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Availability
              </dt>
              <dd className="mt-2 text-foreground">Immediate</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Response time
              </dt>
              <dd className="mt-2 text-foreground">Within 24 hours</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Roles
              </dt>
              <dd className="mt-2 text-foreground">SDE · Flutter · AI/ML</dd>
            </div>
          </dl>

          <a href={primary.href} className="btn-primary mt-10">
            <Mail className="size-4" /> Start a conversation
          </a>
        </div>

        {/* Right: channels */}
        <div className="lg:col-span-7 reveal">
          {/* Primary channel */}
          <a
            href={primary.href}
            className="group block glass glass-hover rounded-2xl p-5 md:p-8 mb-4"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-start gap-5">
                <span className="size-14 rounded-xl border border-primary/40 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <primary.icon className="size-6" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                    {primary.label}
                  </p>
                  <p className="font-tech text-base sm:text-lg md:text-2xl text-foreground mt-2 break-all">
                    {primary.value}
                  </p>
                  <p className="mt-2 text-xs font-mono text-muted-foreground">
                    {primary.meta}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="size-6 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0" />
            </div>
          </a>

          {/* Secondary channels */}
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 glass glass-hover rounded-2xl p-4 md:p-6"
                >
                  <div className="flex items-center gap-5">
                    <span className="size-11 rounded-xl border border-border bg-surface flex items-center justify-center text-foreground group-hover:text-primary group-hover:border-primary/40 transition-colors">
                      <l.icon className="size-5" />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        {l.label}{" "}
                        <span className="text-muted-foreground/60">
                          · {l.meta}
                        </span>
                      </p>
                      <p className="font-tech text-base md:text-lg text-foreground mt-1 break-all">
                        {l.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
