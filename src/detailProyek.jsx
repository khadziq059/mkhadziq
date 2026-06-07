import { useParams, Link } from "react-router-dom";
import { listProyek } from "./data";
import { useState, useRef } from "react";

export default function DetailProyek() {
  const { slug } = useParams();
  const [activeImg, setActiveImg] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const project = listProyek.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
          <i className="ri-folder-unknow-line ri-2x text-zinc-600" />
        </div>
        <h1 className="text-3xl font-bold text-zinc-200">Proyek tidak ditemukan</h1>
        <p className="text-zinc-500 mt-2 max-w-sm">
          Mungkin link yang kamu buka salah atau proyek sudah dihapus.
        </p>
        <Link
          to="/"
          className="mt-6 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm font-medium"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const scrollToIndex = (i) => {
    setActiveIndex(i);
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[i];
    if (child) child.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const prevImg = () => {
    const i = (activeImg.index - 1 + project.screenshots.length) % project.screenshots.length;
    setActiveImg({ src: project.screenshots[i], index: i });
  };

  const nextImg = () => {
    const i = (activeImg.index + 1) % project.screenshots.length;
    setActiveImg({ src: project.screenshots[i], index: i });
  };

  return (
    <div className="min-h-screen py-10 px-4">

      {/* Ambient background blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">

        {/* BACK */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200 group mb-6"
        >
          <span className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-violet-500/50 transition-colors">
            <i className="ri-arrow-left-s-line" />
          </span>
          Kembali ke Home
        </Link>

        {/* HERO IMAGE — full bleed dengan overlay teks */}
        {project.gambar && (
          <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-black/40">
            <img
              src={project.gambar}
              alt={project.nama}
              className="w-full h-full object-cover scale-105"
              style={{ filter: "brightness(0.6)" }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 to-transparent" />

            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="text-xs px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/10">
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/10">
                    +{project.tools.length - 3}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                {project.nama}
              </h1>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">

          {/* MAIN CONTENT — 2/3 */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {/* Deskripsi */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Tentang Proyek</h2>
              <p className="text-zinc-300 leading-relaxed text-sm">{project.desk}</p>
              {project.fullDesc && project.fullDesc !== "Isi deskripsi lengkap " + project.nama + " di sini." && (
                <p className="text-zinc-400 leading-relaxed text-sm mt-3 pt-3 border-t border-zinc-800">{project.fullDesc}</p>
              )}
            </div>

            {/* Features */}
            {project.features?.filter(f => !f.startsWith("Fitur")).length > 0 && (
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
                <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Fitur Utama</h2>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                      <span className="w-5 h-5 rounded-md bg-violet-500/15 border border-violet-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-violet-400 text-xs" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SCREENSHOTS — Carousel */}
            {project.screenshots?.length > 0 && (
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xs uppercase tracking-widest text-zinc-500">Screenshots</h2>
                  <span className="text-xs text-zinc-600">{activeIndex + 1} / {project.screenshots.length}</span>
                </div>

                {/* Carousel scroll */}
                <div
                  ref={scrollRef}
                  className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: "none" }}
                >
                  {project.screenshots.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveImg({ src, index: i });
                        scrollToIndex(i);
                      }}
                      className={`relative flex-shrink-0 snap-center rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                        activeIndex === i ? "border-violet-500 shadow-lg shadow-violet-500/20" : "border-zinc-700 hover:border-zinc-500"
                      }`}
                      style={{ width: "calc(50% - 6px)" }}
                    >
                      <img
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        loading="lazy"
                        className="w-full h-44 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-200 flex items-center justify-center">
                        <div className="opacity-0 hover:opacity-100 transition-opacity w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <i className="ri-zoom-in-line text-white" />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Dot indicators */}
                {project.screenshots.length > 1 && (
                  <div className="flex justify-center gap-1.5 mt-3">
                    {project.screenshots.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => scrollToIndex(i)}
                        className={`rounded-full transition-all duration-200 ${
                          activeIndex === i ? "w-5 h-1.5 bg-violet-500" : "w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-500"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* SIDEBAR — 1/3 */}
          <div className="flex flex-col gap-4">

            {/* Tech Stack */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5">
              <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Tech Stack</h2>
              <div className="flex flex-col gap-2">
                {project.tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2.5 text-sm text-zinc-300 py-1.5 border-b border-zinc-800/60 last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-5">
              <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">Links</h2>
              <div className="flex flex-col gap-2">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-sm transition-all duration-200 border border-zinc-700 hover:border-zinc-600 group"
                  >
                    <i className="ri-github-line text-zinc-400 group-hover:text-white transition-colors" />
                    Source Code
                    <i className="ri-arrow-right-up-line ml-auto text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </a>
                )}
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm transition-all duration-200 shadow-lg shadow-violet-900/30 group"
                  >
                    <i className="ri-global-line" />
                    Live Demo
                    <i className="ri-arrow-right-up-line ml-auto opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* LIGHTBOX cinematic */}
      {activeImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)" }}
          onClick={() => setActiveImg(null)}
        >
          {/* Close */}
          <button
            onClick={() => setActiveImg(null)}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
          >
            <i className="ri-close-line" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-zinc-500 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800">
            {activeImg.index + 1} / {project.screenshots.length}
          </div>

          {/* Prev */}
          {project.screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              className="absolute left-4 w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            >
              <i className="ri-arrow-left-s-line ri-lg" />
            </button>
          )}

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center"
          >
            <img
              src={activeImg.src}
              alt="Screenshot"
              className="max-h-[85vh] max-w-[90vw] w-auto h-auto rounded-2xl shadow-2xl border border-zinc-800 object-contain"
            />
          </div>

          {/* Next */}
          {project.screenshots.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              className="absolute right-4 w-10 h-10 rounded-full bg-zinc-800/80 border border-zinc-700 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-all"
            >
              <i className="ri-arrow-right-s-line ri-lg" />
            </button>
          )}

          {/* Dot nav */}
          {project.screenshots.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveImg({ src: project.screenshots[i], index: i }); }}
                  className={`rounded-full transition-all duration-200 ${
                    activeImg.index === i ? "w-5 h-1.5 bg-violet-500" : "w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}