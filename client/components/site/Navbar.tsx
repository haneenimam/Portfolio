import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]')) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-black/40 transition-shadow",
        elevated ? "shadow-md" : "shadow-none",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-3 font-semibold">
          <span className="text-lg md:text-xl">Haneen Imam</span>
{/*           <span className="hidden md:inline-block h-2 w-2 rounded-full bg-primary" />
 */}        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = id === activeSection;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(id)}
                className={`text-sm transition-colors ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                {item.label}
              </a>
            );
          })}
          <a
            href="/Haneen-Hamada-Imam.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open Resume"
          >
            Resume
          </a>
          <ThemeToggle />
         
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex items-center justify-center p-2 rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t border-border bg-background/95 backdrop-blur px-4",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto max-w-6xl py-3 flex items-center justify-between">
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = id === activeSection;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm transition-colors ${isActive ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col items-end gap-2">
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
            <a
              href="/Haneen-Hamada-Imam.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
