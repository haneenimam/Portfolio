import SectionHeading from "@/components/SectionHeading";
import { Cake, MapPin, Briefcase, Globe, Phone, Github, Linkedin, Info } from "lucide-react";

const details = [
  { label: "Date of Birth", value: "03 Sep 2001" },
  { label: "Address", value: "Cairo, Egypt" },
  { label: "Freelance", value: "Available" },
  { label: "Languages", value: "English | Arabic" },
  { label: "Phone", value: "+201020451321" },
  { label: "GitHub", value: "github.com/haneenimam", href: "https://github.com/haneenimam" },
  { label: "LinkedIn", value: "linkedin.com/in/haneen-imam", href: "https://www.linkedin.com/in/haneen-imam/" },
  { label: "Email", value: "Haneenimam99@gmail.com", href: "mailto:Haneenimam99@gmail.com" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          title="About Me"
          subtitle="I build dynamic, user-friendly full-stack applications using modern web technologies."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 rounded-xl border bg-card p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Who I am</h3>
            <p className="mt-3 text-muted-foreground">
              I build dynamic, user-friendly full-stack applications using modern
              web technologies. I focus on delivering performant, accessible
              and maintainable code with a strong eye for detail.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {details.map((d) => (
                <div key={d.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shadow-sm">
                    {getIcon(d.label)}
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noreferrer" className="inline-block font-medium hover:underline">{d.value}</a>
                    ) : (
                      <p className="font-medium">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Available for</p>
              <h4 className="mt-1 font-semibold">Freelance & Contract Work</h4>
              <p className="mt-3 text-muted-foreground text-sm">Open to remote opportunities and collaborations.</p>
              <a href="#contact" className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground hover:bg-primary/90">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getIcon(label: string) {
  const props = { className: "h-5 w-5", strokeWidth: 1.5 } as any;
  switch (label) {
    case 'Date of Birth':
      return <Cake {...props} />;
    case 'Address':
      return <MapPin {...props} />;
    case 'Freelance':
      return <Briefcase {...props} />;
    case 'Languages':
      return <Globe {...props} />;
    case 'Phone':
      return <Phone {...props} />;
    case 'GitHub':
      return <Github {...props} />;
    case 'LinkedIn':
      return <Linkedin {...props} />;
    default:
      return <Info {...props} />;
  }
}
