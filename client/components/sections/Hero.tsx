import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20 md:pt-24">
      {/* decorative background shapes */}
      <div className="pointer-events-none absolute -left-40 top-10 hidden w-[420px] transform rotate-12 blur-3xl opacity-30 md:block">
        <div className="h-72 w-72 rounded-[36px] bg-gradient-to-br from-primary/30 to-accent/30" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Hey, I’m Haneen Imam
          </h1>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Frontend & Full-Stack Developer (MEARN Stack)
          </p>

          <img
            src="/images/me.webp"
            alt="Haneen Imam"
            className="mt-8 h-40 w-40 rounded-full ring-4 ring-border object-cover shadow-lg"
          />

          <a
            href="#projects"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "mt-8 px-6 py-3"
            )}
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
