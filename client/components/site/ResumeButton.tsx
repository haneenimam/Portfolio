import { FileDown } from "lucide-react";

export default function ResumeButton() {
  return (
<a
      href="/Haneen-Hamada-Imam.pdf"
      target="_blank"
      rel="noreferrer"
      type="application/pdf"
      className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg transition hover:bg-primary/90"
      aria-label="Open Resume"
    >
      <FileDown className="h-4 w-4" /> Resume
    </a>
  );
}
