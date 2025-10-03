export default function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>
      <iframe
        src="/Haneen-Hamada-Imam.pdf"
        title="Haneen Hamada Imam Resume"
        className="w-full h-[90vh] border rounded-lg shadow"
      />
    </div>
  );
}