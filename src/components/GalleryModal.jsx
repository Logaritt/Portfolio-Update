import { useEffect, useMemo, useState } from "react";

export default function GalleryModal({ open, onClose, items = [], startIndex = 0 }) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);
  const total = safeItems.length;

  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    if (!open) return;
    setIndex(Number.isFinite(startIndex) ? startIndex : 0);
  }, [open, startIndex]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, onClose, index, total]);

  if (!open || total === 0) return null;

  const current = safeItems[index] || safeItems[0];

  const prev = () => {
    if (total <= 1) return;
    setIndex((i) => (i - 1 + total) % total);
  };

  const next = () => {
    if (total <= 1) return;
    setIndex((i) => (i + 1) % total);
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-6xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="min-w-0">
            <p className="font-semibold text-sm opacity-90 truncate">{current.title || "Preview"}</p>
            <p className="text-xs opacity-60">{index + 1} / {total}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 transition"
            aria-label="Close"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        {/* body */}
        <div className="relative p-4">
          {/* nav buttons */}
          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={prev}
                className="gallery-nav left-3"
                aria-label="Previous"
                title="Previous"
              >
                <i className="ri-arrow-left-s-line ri-lg"></i>
              </button>

              <button
                type="button"
                onClick={next}
                className="gallery-nav right-3"
                aria-label="Next"
                title="Next"
              >
                <i className="ri-arrow-right-s-line ri-lg"></i>
              </button>
            </>
          ) : null}

          <div className="flex items-center justify-center">
            <img
              src={current.image}
              alt={current.title || "Preview"}
              className="max-h-[72vh] w-auto max-w-full rounded-xl border border-white/10"
              draggable="false"
            />
          </div>

          {/* caption */}
          <div className="mt-4 px-1">
            {current.tag ? (
              <span className="inline-flex text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 opacity-90">
                {current.tag}
              </span>
            ) : null}
            {current.desc ? <p className="mt-2 opacity-70 leading-relaxed">{current.desc}</p> : null}
            <p className="mt-2 text-xs opacity-50">Tips: gunakan tombol panah keyboard kiri/kanan.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
