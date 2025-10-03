import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-card text-muted-foreground dark:bg-foreground dark:text-background">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2025 Haneen Imam. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/haneenimam"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:opacity-80"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/haneen-imam"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:opacity-80"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
