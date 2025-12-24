export const Footer = () => {
  const year = new Date().getFullYear();

  const spotifyEmbedUrl =
    "https://open.spotify.com/embed/artist/1dABGukgZ8XKKOdd2rVSHM?utm_source=generator";

  return (
    <footer className="mt-32">
      {/* Top footer */}
      <div className="border-t border-white/10 pt-10 pb-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8">
          {/* Left: Social icons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/Logaritt"
              target="_blank"
              rel="noreferrer noopener"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-400/40 transition grid place-items-center opacity-80 hover:opacity-100"
              aria-label="GitHub"
              title="GitHub"
            >
              <i className="ri-github-fill ri-lg"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/naufalgeo"
              target="_blank"
              rel="noreferrer noopener"
              className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber-400/40 transition grid place-items-center opacity-80 hover:opacity-100"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <i className="ri-linkedin-fill ri-lg"></i>
            </a>
          </div>

          {/* Middle: Stack */}
          <div className="space-y-2 opacity-70 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-sm">Built with</span>
              <div className="flex items-center gap-2">
                <i className="ri-reactjs-line"></i>
                <span className="text-sm">React</span>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="text-sm">Styled with</span>
              <div className="flex items-center gap-2">
                <i className="ri-layout-masonry-line"></i>
                <span className="text-sm">TailwindCSS</span>
              </div>
            </div>
          </div>

          {/* Right: Spotify embed */}
          <div className="w-full max-w-[360px] mx-auto lg:mx-0 lg:w-[280px] lg:shrink-0">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 h-[168px]">
              <iframe
                title="Spotify"
                src={spotifyEmbedUrl}
                className="w-full h-full block"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-7 text-center text-sm opacity-60">
        Copyright © {year} Naufal Geo Pastrana. All rights reserved.
      </div>
    </footer>
  );
};
