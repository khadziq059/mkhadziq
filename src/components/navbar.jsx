import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Beranda", link: "#home" },
    { name: "Tentang", link: "#about" },
    { name: "Proyek", link: "#projects" },
    { name: "Kontak", link: "#contact" },
  ];

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300
      ${
        active
          ? "top-4 w-[95%] max-w-6xl"
          : "top-6 w-[95%] max-w-7xl"
      }`}
    >
      <nav
        className={`
          relative
          flex items-center justify-between
          px-4 sm:px-6 py-3 sm:py-4
          rounded-2xl
          border border-white/10
          backdrop-blur-xl
          bg-zinc-900/60
          transition-all duration-300
          ${
            active
              ? "shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
              : ""
          }
        `}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="../assets/favicon.png"
            alt="Logo"
            className="w-10 h-10 rounded-xl shadow-lg shadow-500/30 object-cover"
          />

          <div className="hidden sm:block">
            <h3 className="font-bold text-lg">
              Muhammad Khadziq
            </h3>
            <p className="text-xs text-zinc-400">
              Software Developer
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="
                  relative
                  text-zinc-300
                  hover:text-white
                  transition-colors
                  duration-300
                  font-medium
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-violet-500
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* CTA Desktop */}
          <a
            href="#contact"
            className="
              hidden lg:flex
              px-5 py-2.5
              rounded-xl
              bg-violet-600
              hover:bg-violet-700
              transition-all
              duration-300
              font-medium
            "
          >
            Hire Me
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden
              w-10 h-10
              flex items-center justify-center
              rounded-xl
              bg-zinc-800
              text-lg
            "
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`
            lg:hidden
            absolute
            top-[calc(100%+12px)]
            left-0
            right-0
            transition-all
            duration-300
            overflow-hidden
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <div
            className="
              bg-zinc-900/95
              backdrop-blur-xl
              border border-white/10
              rounded-2xl
              p-5
              shadow-2xl
            "
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block
                      py-2
                      text-zinc-300
                      hover:text-violet-400
                      transition
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                mt-5
                block
                text-center
                bg-violet-600
                hover:bg-violet-700
                rounded-xl
                py-3
                font-medium
                transition
              "
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;