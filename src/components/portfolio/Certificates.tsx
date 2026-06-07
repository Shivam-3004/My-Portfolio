import { Award, ExternalLink, FileBadge2 } from "lucide-react";

/**
 * Drop your certificate images into `public/certificates/` and update the
 * `image` field below (e.g. "/certificates/aws-cloud.jpg"). The `link` can
 * point to a Google Drive / verification URL.
 */
type Certificate = {
  title: string;
  issuer: string;
  year: string;
  image?: string; // optional preview image
  link?: string; // verification / drive link
  skills?: string[];
};

const certificates: Certificate[] = [
  {
    title: "Oracle OCI 2025 AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    link: "https://drive.google.com/file/d/1hSctmO1fpJQmRfdW-m1cYs6x06Uc3R7h/view?usp=sharing",
    skills: ["AI", "Machine Learning", "Cloud"]
  },
  {
    title: "Industrial Training - Data Annotation",
    issuer: "NIELIT",
    year: "2025",
    link: "https://drive.google.com/file/d/15n-BLC3VMBZ3rYgeTKiSF9_k4NEGMWnV/view?usp=sharing",
    skills: ["Data Annotation", "Python", "AI Datasets"]
  },
  {
    title: "Web Development Internship",
    issuer: "CollegeTips.in",
    year: "2025",
    link: "https://drive.google.com/file/d/17R5luP5oxCu6dLs6T5yLTRGiUWCzfv_W/view?usp=sharing",
    skills: ["HTML", "CSS", "JavaScript", "Frontend Development"]
  },
  {
    title: "Campus Ambassador Program",
    issuer: "GeeksforGeeks",
    year: "2025",
    link: "https://drive.google.com/file/d/1FSGWGOWwNqZIk7qlhSaubF3zMInNTKnN/view?usp=sharing",
    skills: ["Leadership", "Community Building", "Student Engagement"]
  },
  {
    title: "Complete Java (Core)",
    issuer: "Knowledge Gate",
    year: "2025",
    link: "https://drive.google.com/file/d/12E-xryTUAFxgW4QWaS89OG1dlzJyZFs0/view?usp=sharing",
    skills: ["Java", "OOP", "Programming"]
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    year: "2025",
    link: "https://drive.google.com/file/d/1VPbVGrzI4_ejyeSFHGBgV6NXw9_4K2pQ/view?usp=sharing",
    skills: ["Cybersecurity", "Networking", "Security"]
  },
  {
    title: "Power BI",
    issuer: "Microsoft",
    year: "2025",
    link: "https://drive.google.com/file/d/1O38bckJsWZ-y0nxtpPhrqFxQPEA0zdcp/view?usp=sharing",
    skills: ["Power BI", "Data Analytics", "Visualization"]
  },
  {
    title: "Resume Building Mastery",
    issuer: "GeeksforGeeks",
    year: "2025",
    link: "https://drive.google.com/file/d/1VPcPBYEybvVWvTVdAAo5X3Ovq2AutP3q/view?usp=sharing",
    skills: ["Professional Development", "Career Readiness"]
  }
];

const Certificates = () => (
  <section
    id="certificates"
    className="relative py-32 border-t border-border/60"
  >
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div className="reveal">
          <p className="section-label mb-4">07 — Credentials</p>
          <h2 className="heading-lg text-3xl sm:text-4xl md:text-5xl">
            Certifications & <span className="text-primary">recognition</span>.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            A curated set of programs, courses, and assessments that anchor my
            day-to-day craft. Verification links available on request.
          </p>
        </div>
        <div className="flex items-center gap-2 reveal">
          <span className="chip">
            <Award className="size-3 mr-1.5 text-primary" /> Verified
          </span>
          <span className="chip">Updated 2026</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {certificates.map((c, i) => (
          <article
            key={c.title}
            className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full reveal"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            {/* Preview area — replace with real image when available */}
            <div className="relative aspect-[16/10] border-b border-border bg-surface overflow-hidden">
              {c.image ? (
                <img
                  src={c.image}
                  alt={`${c.title} certificate`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <>
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, hsl(184 100% 50% / 0.18), transparent 60%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 grain-bg opacity-40"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FileBadge2
                      className="size-12 text-primary/70"
                      strokeWidth={1.2}
                    />
                  </div>
                </>
              )}
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                CERT_0{i + 1}
              </span>
              <span className="absolute top-3 right-3 font-mono text-[10px] text-primary">
                {c.year}
              </span>
            </div>

            <div className="p-4 md:p-6 flex flex-col flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                {c.issuer}
              </p>
              <h3 className="font-tech text-base md:text-lg text-foreground leading-snug">
                {c.title}
              </h3>

              {c.skills && (
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <li
                      key={s}
                      className="font-mono text-[10px] text-muted-foreground border border-border rounded px-2 py-0.5"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 pt-5 border-t border-border flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <Award className="size-3.5 text-primary" /> Credential
                </span>
                <a
                  href={c.link ?? "#contact"}
                  target={c.link ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[9px] md:text-[10px] font-mono uppercase tracking-wide text-foreground group-hover:text-primary transition-colors"
                >
                  {c.link ? "Verify Certificate" : "On request"}{" "}
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;
