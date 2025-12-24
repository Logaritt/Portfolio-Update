import { useEffect } from "react";

export default function ResumeModal({ open, onClose, src }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl h-[85vh] rounded-2xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center"
          aria-label="Close"
        >
          ✕
        </button>

        <iframe
          title="Resume"
          src={src}
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
