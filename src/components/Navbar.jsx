import { useState, useEffect } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40">
      <div className="flex justify-center py-4">
        <ul
          className={`menu flex flex-wrap justify-center items-center gap-x-6 gap-y-2 px-5 py-3 rounded-2xl backdrop-blur-md transition-all duration-300
          ${active ? "bg-white/10 border border-white/25 shadow-lg" : "bg-transparent border border-transparent"}
        `}
        >
          <li>
            <a
              href="#beranda"
              className="text-sm sm:text-base font-medium hover:text-amber-300 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="text-sm sm:text-base font-medium hover:text-amber-300 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Project"
              className="text-sm sm:text-base font-medium hover:text-amber-300 transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Awards"
              className="text-sm sm:text-base font-medium hover:text-amber-300 transition"
            >
              Awards
            </a>
          </li>
          <li>
            <a
              href="#Kontak"
              className="text-sm sm:text-base font-medium hover:text-amber-300 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
