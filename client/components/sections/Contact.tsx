import SectionHeading from "@/components/SectionHeading";
import { Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    // In a real app, send this to an API or email service
    alert(`Thanks ${name}! Your message was sent.`);
    form.reset();
  };

  return (
    <section id="contact" className="scroll-mt-28 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading title="Get In Touch" subtitle="I’m open to work and collaborations. Send a message or use the links." />
        <div className="grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-2xl border bg-card p-6 shadow-sm space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" required className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" defaultValue="Haneenimam99@gmail.com" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Send Message</button>
          </form>

          <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <a href="mailto:Haneenimam99@gmail.com" className="block text-sm text-muted-foreground hover:underline">Email: Haneenimam99@gmail.com</a>
            <a href="https://github.com/haneenimam" target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:underline">GitHub: github.com/haneenimam</a>
            <a href="https://www.linkedin.com/in/haneen-imam/" target="_blank" rel="noreferrer" className="block text-sm text-muted-foreground hover:underline">LinkedIn: linkedin.com/in/haneen-imam</a>
            <a href="tel:+201020451321" className="block text-sm text-muted-foreground hover:underline">Phone: +201020451321</a>
          </div>
        </div>
      </div>
    </section>
  );
}
