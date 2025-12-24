import { useEffect } from "react";

export default function ImageModal({ open, onClose, src, title }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <p className="font-semibold text-sm opacity-90">{title || "Preview"}</p>
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 transition"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="p-4 flex items-center justify-center">
          <img
            src={src}
            alt={title || "Preview"}
            className="max-h-[78vh] w-auto max-w-full rounded-xl border border-white/10"
          />
        </div>
      </div>
    </div>
  );
}
