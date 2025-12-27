import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Angular",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "Bootstrap",
  "TailwindCSS",
];

const BRAND: Record<string, { color: string; slug?: string }> = {
  HTML5: { color: "#E34F26", slug: "html5" },
  CSS3: { color: "#1572B6", slug: "css3" },
  JavaScript: { color: "#F7DF1E", slug: "javascript" },
  "React.js": { color: "#61DAFB", slug: "react" },
  Angular: { color: "#DD0031", slug: "angular" },
  "Next.js": { color: "#000000", slug: "nextdotjs" },
  "Node.js": { color: "#339933", slug: "nodedotjs" },
  "Express.js": { color: "#000000", slug: "express" },
  MongoDB: { color: "#47A248", slug: "mongodb" },
  Git: { color: "#F05032", slug: "git" },
  Bootstrap: { color: "#7952B3", slug: "bootstrap" },
  TailwindCSS: { color: "#06B6D4", slug: "tailwindcss" },
};

function slugFor(name: string) {
  const mapped = BRAND[name as keyof typeof BRAND];
  if (mapped?.slug) return mapped.slug;
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, "")
    .replace(/\+/g, "plus");
}

export default function Skills() {
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  return (
    <section id="skills" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Core Skills" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {skills.map((s) => {
            const meta = BRAND[s] || { color: "#94a3b8" };
            const slug = slugFor(s);
            const iconUrl = `https://cdn.simpleicons.org/${encodeURIComponent(
              slug
            )}/ffffff`;

            return (
              <div
                key={s}
                className="group rounded-2xl border bg-card p-4 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${meta.color}20` }}
                >
                  {!imgError[s] ? (
                    <img
                      src={iconUrl}
                      alt={s}
                      className="h-6 w-6"
                      onError={() => setImgError((prev) => ({ ...prev, [s]: true }))}
                    />
                  ) : (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden>
                      <rect width="24" height="24" rx="4" fill={meta.color} />
                      <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="600">
                        {s.replace(/[^A-Za-z0-9]/g, "").slice(0, 3).toUpperCase()}
                      </text>
                    </svg>
                  )}
                </div>
                <div className="text-sm font-medium text-foreground">{s}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
