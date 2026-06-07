import { Github, ArrowUpRight } from "lucide-react";
import payflowImg from "@/assets/payflow.png";

const FeaturedProject = () => (
  <section className="relative py-20 md:py-32 border-t border-border/60">
    <div className="container">
      <div className="mb-14 reveal">
        <p className="section-label mb-4">04 — Featured</p>
        <h2 className="heading-lg">
          PayFlow <span className="text-primary">Wallet</span>.
        </h2>
      </div>

      <div className="relative glass rounded-3xl overflow-hidden cyan-frame reveal">
        <div aria-hidden className="absolute inset-0 grain-bg opacity-30" />
        <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 p-5 sm:p-8 md:p-14">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Spring Boot",
                "PostgreSQL",
                "JWT Security",
                "REST API",
                "Pessimistic Locking",
                "Docker",
              ].map((t) => (
                <span key={t} className="chip chip-active">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none mb-6">
              Secure transactions. Thread-safe execution.
            </h3>

            <div className="space-y-4 md:space-y-5 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              <p>
                <span className="text-foreground font-medium">
                  The problem:
                </span>{" "}
                digital payment applications require high-throughput transaction processing, secure token-based authentication, and pessimistic concurrency locks to avoid double-spend vulnerabilities.
              </p>
              <p>
                <span className="text-foreground font-medium">
                  The solution:
                </span>{" "}
                a robust digital wallet API utilizing Spring Boot, JWT authentication with secure refresh token rotation, and PostgreSQL with database indexes and pessimistic concurrency control to guarantee secure, consistent, and fast transaction handling.
              </p>
              <p>
                <span className="text-foreground font-medium">My role:</span>{" "}
                Full-Stack Developer — designed database schema, built 18 secure endpoints, set up role-based security validation, implemented token blacklist logout mechanism, and optimized query runtimes.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md">
              {[
                ["< 50ms", "Database Latency"],
                ["18+", "REST Endpoints"],
                ["100%", "Thread-safe balance ops"],
              ].map(([v, k]) => (
                <div key={k} className="glass rounded-xl p-4">
                  <dd className="font-display text-2xl md:text-3xl text-primary">
                    {v}
                  </dd>
                  <dt className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                    {k}
                  </dt>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="https://github.com/Shivam-3004/digital-wallet"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <Github className="size-4" /> View Code
              </a>
              <a
                href="https://digital-wallet-one-inky.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                Live Demo <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-surface">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, hsl(184 100% 50% / 0.25), transparent 60%)",
                }}
              />
              <img
                src={payflowImg}
                alt="PayFlow Wallet Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>SPRING BOOT</span>
                <span className="text-primary">● LIVE</span>
                <span>DASHBOARD_01</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedProject;
