import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    applyTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label={`Toggle theme, currently ${theme}`}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-border bg-muted/5 p-1 transition-colors dark:bg-muted/10"
    >
      {/* Sun icon - left */}
      <span className={`absolute left-2 text-yellow-500 transition-opacity ${theme === 'dark' ? 'opacity-40' : 'opacity-100'}`}>
        <Sun className="h-4 w-4" />
      </span>

      {/* Moon icon - right */}
      <span className={`absolute right-2 text-sky-400 transition-opacity ${theme === 'dark' ? 'opacity-100' : 'opacity-40'}`}>
        <Moon className="h-4 w-4" />
      </span>

      {/* Knob */}
      <span
        className={`relative z-10 inline-block h-7 w-7 transform rounded-full bg-white shadow toggle-knob transition-transform duration-300 dark:bg-black ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'}`}
      />
    </button>
  );
}
