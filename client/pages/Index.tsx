import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import ResumeButton from "@/components/site/ResumeButton";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

const RESUME_URL = ""; // TODO: provide resume PDF URL (e.g. https://example.com/resume.pdf). The floating resume button will appear when set.

export default function Index() {
  // Reveal sections on scroll for subtle animations
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      const sections = Array.from(document.querySelectorAll('main section')) as HTMLElement[];
      if (!sections.length) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add('in-view');
          });
        },
        { threshold: 0.12 }
      );

      sections.forEach((s) => {
        s.classList.add('reveal');
        observer.observe(s);
      });
    }, 50);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main" className="sr-only focus:not-sr-only focus:sr-only-visible">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ResumeButton />
    </div>
  );
}