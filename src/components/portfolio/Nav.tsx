import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [active, setActive] = useState("#about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(s => io.observe(s));
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`}>
      <div className={`container flex items-center justify-between ${scrolled ? "glass rounded-full px-5" : ""}`}>
        <a href="#top" className="font-display text-2xl tracking-widest" aria-label="Shivam Paliwal — home">
          SP<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className={`px-4 py-2 font-mono text-[11px] uppercase tracking-[0.3em] rounded-full transition-colors ${active === l.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex btn-ghost !py-2 !px-5 !text-[10px]">Let's talk</a>
        <button className="md:hidden p-2 text-foreground" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu className="size-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col p-6 md:hidden animate-fade-in">
          <div className="flex items-center justify-between mb-12">
            <span className="font-display text-2xl tracking-widest">SP<span className="text-primary">.</span></span>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X className="size-7" /></button>
          </div>
          <nav className="flex flex-col gap-6">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                 className="font-display text-5xl tracking-wide hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
