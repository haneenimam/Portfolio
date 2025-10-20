import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Craftora – E-Commerce Platform",
    img: "/images/craftora.jpg",
    desc:
      "Full-stack MERN app with Stripe payments, dashboards, CRUD functionality & roles.",
    live: "https://craftoraa.netlify.app/",
    github: "https://github.com/haneenimam/Craftoraa",
  },
  {
    title: "Flyee – Flight Booking App",
    img: "/images/flyee.png",
    desc:
      "A modern full-stack flight booking application utilizing Next.js and Node.js(Express) API. Features a responsive UI, robust search and efficient data handling",
    live: "https://flyee-fullstack-z7qg.vercel.app/",
    github: "https://github.com/haneenimam/FLYEE-Fullstack",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Projects" />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              tabIndex={0}
              className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/65 group-hover:opacity-100 group-focus-within:bg-black/65 group-focus-within:opacity-100 px-6 text-center">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/90 max-w-md">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    className={cn(
                      buttonVariants({ variant: "default", size: "sm" }),
                      "bg-white text-black px-4 py-2"
                    )}
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  <a
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      "bg-white text-black border-white/80"
                    )}
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
