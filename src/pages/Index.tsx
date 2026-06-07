import { useEffect } from "react";
import Loader from "@/components/portfolio/Loader";
import Particles from "@/components/portfolio/Particles";
import CustomCursor from "@/components/portfolio/CustomCursor";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import FeaturedProject from "@/components/portfolio/FeaturedProject";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import GitHubDashboard from "@/components/portfolio/GitHubDashboard";
import Certificates from "@/components/portfolio/Certificates";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Shivam Paliwal — Software Developer · Flutter · AI/ML";
    // structured data
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Shivam Paliwal",
      jobTitle: "Software Developer",
      url: typeof window !== "undefined" ? window.location.href : "",
      email: "mailto:paliwalshivam884@gmail.com",
      address: { "@type": "PostalAddress", addressCountry: "India" },
      sameAs: ["https://github.com/Shivam-3004", "https://www.linkedin.com/in/shivam884/"],
      knowsAbout: ["Flutter", "AI/ML", "YOLOv8", "React", "TypeScript", "Python"],
    });
    document.head.appendChild(ld);
    return () => { document.head.removeChild(ld); };
  }, []);

  return (
    <div className="noise scanlines relative">
      <Loader />
      <Particles />
      <CustomCursor />
      <Nav />
      <main id="main">
        <Hero /> 
        <About /> 
        <Skills />
        <Experience />
        <FeaturedProject />
        <Projects />
        <Achievements />
        <GitHubDashboard />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      {/* watermark */}
      <span aria-hidden className="fixed bottom-3 right-3 z-40 font-mono text-[9px] uppercase tracking-[0.4em] text-muted-foreground/40 select-none pointer-events-none ">
        SP · PORTFOLIO · 2026
      </span>
    </div>
  );
};

export default Index;
