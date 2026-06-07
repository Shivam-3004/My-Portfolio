const Footer = () => (

  <footer className="relative border-t border-border/60 py-8 md:py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">


  <div>
    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      © {new Date().getFullYear()} Shivam Paliwal
    </p>
    <p className="mt-1 text-xs text-muted-foreground">
      Software Developer • Flutter Developer • AI/ML Enthusiast
    </p>
  </div>

  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
    Built with React • TypeScript • Tailwind CSS
  </p>

  <a
    href="#top"
    className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary hover:text-primary/80 transition-colors"
  >
    ↑ Back to Top
  </a>

</div>


  </footer>
);

export default Footer;
