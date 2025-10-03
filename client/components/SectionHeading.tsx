import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 text-center animate-fade-in-up", className)}>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      ) : null}
    </div>
  );
}
