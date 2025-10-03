import SectionHeading from "@/components/SectionHeading";
import { Cog, Layers, Wrench } from "lucide-react";

const cards = [
  {
    title: "Frontend",
    icon: Layers,
    items: [
      "React.js",
      "Bootstrap",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3/Sass",
      "Next.js",
    ],
  },
  {
    title: "Backend",
    icon: Cog,
    items: ["Node.js", "Express.js", "MongoDB/Mongoose"],
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Postman", "Chrome DevTools"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative scroll-mt-28 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]">
        <div className="mx-auto h-full max-w-5xl bg-gradient-to-br from-primary/10 via-accent/20 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Tech Stack & Tools" />
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <card.icon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {card.items.map((it) => (
                  <li key={it} className="leading-relaxed">• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
