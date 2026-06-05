const Footer = () => {
  const socials = [
    { icon: "ri-linkedin-fill", href: "https://www.linkedin.com/in/muhammad-khadziq/", label: "LinkedIn" },
    { icon: "ri-instagram-fill", href: "https://www.instagram.com/mkhadziqq/", label: "Instagram" },
    { icon: "ri-github-fill", href: "https://github.com/khadziq059", label: "GitHub" },
  ];

  const navLinks = ["#about", "#projects"];
  const navLabels = ["Tentang Saya", "Proyek"];

  return (
    <footer className="mt-32 border-t border-zinc-700">
      {/* Top */}
      <div className="py-12 flex flex-col md:flex-row justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3 max-w-xs">
          <h2 className="text-xl font-bold tracking-tight">Muhammad Khadziq</h2>
          
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Navigasi</p>
            {navLinks.map((href, i) => (
            <a
                key={i}
                href={href}
                className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
            >
                {navLabels[i]}
            </a>
            ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2">
            <a
            href="mailto:muhammadkhadziq26@gmail.com"
            className="text-sm text-zinc-400 hover:text-white transition-colors w-fit"
            >
            muhammadkhadziq26@gmail.com
            </a>
          <div className="flex items-center gap-4 mt-2">
            {socials.map(({ icon, href, label }) => (
            <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-zinc-500 hover:text-white transition-colors"
            >
                <i className={`${icon} ri-lg`}></i>
            </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-4 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} Muhammad Khadziq. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400">
          Built with <span className="text-violet-400">React</span> & <span className="text-violet-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;