import DataImage from "./data"
import { listTools } from "./data"
import { listProyek } from "./data"

const education = [
  {
    name: 'Universitas Jenderal Soedirman',
    detail: 'S1 Informatika · 2022 – 2026',
    badge: 'IPK 3,80',
    badgeColor: 'bg-violet-900/50 text-violet-300',
    dotColor: 'bg-violet-400',
  },
  {
    name: 'SMA Negeri 4 Pekalongan',
    detail: 'Jurusan IPA · 2019 – 2022',
    badge: 'Nilai 91,56',
    badgeColor: 'bg-emerald-900/50 text-emerald-300',
    dotColor: 'bg-emerald-400',
  },
  {
    name: 'SMP Negeri 6 Pekalongan',
    detail: '2016 – 2019',
    dotColor: 'bg-amber-400',
  },
  {
    name: 'SD Negeri Kuripan Lor 01',
    detail: '2010 – 2016',
    dotColor: 'bg-pink-400',
  },
];

export default function App() {
  return (
    <>
      {/* Hero */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-700/20 rounded-full blur-3xl pointer-events-none" /> 
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-700/20 rounded-full blur-3xl pointer-events-none" />
            <div className="animate__animated animate__fadeInUp animate__delay-2s">
      <div className="hero mt-32 grid md:grid-cols-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="col-span-6 ml-5">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-3 rounded-2xl">
            <img src={DataImage.HeroImage2} alt="Hero Image" className="w-10 rounded-md" />
            <p><i className="ri-map-pin-line">&nbsp;</i>Pekalongan - Jawa Tengah, Indonesia</p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-5xl md:text-6xl font-bold text-zinc-200">
              Halo 👋,
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold">
              Aku{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
                Muhammad Khadziq
              </span>
            </h1>
          </div>
          <p className="text-lg mt-5 mb-6 mr-5">
            Mahasiswa S1 Informatika Universitas Jenderal Soedirman. <br />
            Tertarik pada pengembangan perangkat lunak, machine learning, dan inovasi teknologi.
          </p>
          <button className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-700/30">
            <a href="#projects">Lihat Proyek</a>
          </button>
        </div>
        <div className="col-span-4 ml-10">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-full max-w-[400px] mx-auto lg:mx-0" />
        </div>
      </div>
      </div>

      <div className="mt-28 py-10" id="about">
        <p className="text-center text-violet-400 uppercase tracking-[0.3em] text-sm mb-3">
          Tentang Saya
        </p>

        <h2 className="text-center text-4xl font-bold mb-12">
          Mengenal Saya Lebih Dekat
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Bio */}
          <div className="bg-zinc-900 border border-zinc-400 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-5">
              Latar Belakang Singkat
            </h3>

            <p className="text-zinc-300 leading-relaxed text-justify">
              Saya merupakan mahasiswa S1 Informatika Universitas Jenderal
              Soedirman yang memiliki minat pada pengembangan perangkat lunak,
              machine learning, dan teknologi digital. Saya senang mempelajari
              teknologi baru serta mengembangkan solusi yang bermanfaat melalui
              pemrograman dan inovasi digital.
            </p>

            <p className="text-zinc-300 leading-relaxed text-justify mt-4">
              Terbiasa bekerja secara mandiri maupun kolaboratif, dengan semangat belajar yang tinggi dan komitmen untuk terus berkembang serta memberikan kontribusi positif.
            </p>

            {/* Highlight */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-zinc-800 rounded-xl p-4 text-center">
                <h4 className="text-2xl font-bold text-violet-400">3+</h4>
                <p className="text-xs text-zinc-400 mt-1">Tahun Belajar</p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-4 text-center">
                <h4 className="text-2xl font-bold text-violet-400">10+</h4>
                <p className="text-xs text-zinc-400 mt-1">Proyek</p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-4 text-center">
                <h4 className="text-2xl font-bold text-violet-400">3.80</h4>
                <p className="text-xs text-zinc-400 mt-1">IPK</p>
              </div>
            </div>
          </div>

          {/* Pendidikan */}
          <div className="bg-zinc-900 border border-zinc-400 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-6">
              Riwayat Pendidikan
            </h3>

            <div className="space-y-6">
              {education.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${item.dotColor}`}
                    />
                    {i < education.length - 1 && (
                      <div className="w-px h-16 bg-zinc-700 mt-2" />
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-zinc-400">
                      {item.detail}
                    </p>

                    {item.badge && (
                      <span
                        className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="tools mt-16 py-10" id="tools">
        <h1 className="text-center text-3xl/snug font-bold mb-4">Tools yang dikuasai</h1>
        <p className="text-center text-base/loose opacity-50 mb-8">
          Berikut adalah tools yang saat ini saya kuasai:
        </p>
        <div className="tool-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-900 p-1 group-hover:bg-zinc-900" />
              <div>
                <h4>{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
          </div>
          ))}
        </div>
      </div>

      {/* Proyek */}
      <div className="mt-20 py-10" id="projects">

        {/* Header */}
        <div className="mb-12">
          <p className="text-center text-violet-400 uppercase tracking-[0.3em] text-sm mb-3">Portfolio</p>
          <h2 className="text-center text-4xl font-bold text-white">Proyek Saya</h2>
          <div className="mx-auto w-40 h-1 bg-violet-600 rounded-full mt-3 mb-4" />
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="group flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-300"
              style={{ willChange: 'transform' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  loading="lazy"                
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ willChange: 'transform' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-3">
                <h3 className="text-lg font-semibold text-white">{proyek.nama}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">{proyek.desk}</p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="text-xs px-2.5 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-md font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex-1" />
                {/* CTA */}
                <a
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-700/30"
                >
                  Lihat Proyek
                  <i className="ri-arrow-right-up-line ri-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Kontak */}
      <div className="mt-28 py-10" id="contact">

        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Get in Touch</p>
          <h2 className="text-3xl font-bold text-white">Kontak</h2>
          <div className="w-12 h-1 bg-violet-600 rounded-full mt-3 mb-4 mx-auto" />
          <p className="text-zinc-400 text-base max-w-md mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Kirim pesan dan saya akan segera membalas.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">

          {/* Info Kiri */}
          <div className="md:col-span-2 flex flex-col gap-6">

            {[
              {
                icon: "ri-mail-line",
                label: "Email",
                value: "muhammadkhadziq26@gmail.com",
                href: "mailto:muhammadkhadziq26@gmail.com",
              },
              {
                icon: "ri-linkedin-box-line",
                label: "LinkedIn",
                value: "Muhammad Khadziq",
                href: "https://www.linkedin.com/in/muhammad-khadziq/",
              },
              {
                icon: "ri-github-line",
                label: "GitHub",
                value: "github.com/khadziq",
                href: "https://github.com/khadziq059",
              },
            ].map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-violet-500/50 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-violet-600/10 border border-violet-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600/20 transition-colors">
                  <i className={`${icon} ri-lg text-violet-400`} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm text-zinc-300 group-hover:text-white transition-colors break-all">{value}</p>
                </div>
              </a>
            ))}

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 bg-emerald-950/40 border border-emerald-800/40 rounded-2xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <p className="text-sm text-emerald-400">Tersedia untuk proyek baru</p>
            </div>
          </div>

          {/* Form Kanan */}
          <form
            action="https://formsubmit.co/krazyciller59@gmail.com"
            method="POST"
            autoComplete="off"
            className="md:col-span-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="nama">
                  Nama
                </label>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  placeholder="Nama kamu"
                  required
                  className="bg-zinc-800 border border-zinc-700 focus:border-violet-500 focus:outline-none text-white placeholder-zinc-500 text-sm px-4 py-3 rounded-xl transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@kamu.com"
                  required
                  className="bg-zinc-800 border border-zinc-700 focus:border-violet-500 focus:outline-none text-white placeholder-zinc-500 text-sm px-4 py-3 rounded-xl transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="subjek">
                Subjek
              </label>
              <input
                type="text"
                id="subjek"
                name="subjek"
                placeholder="Topik pesan kamu"
                className="bg-zinc-800 border border-zinc-700 focus:border-violet-500 focus:outline-none text-white placeholder-zinc-500 text-sm px-4 py-3 rounded-xl transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="pesan">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={6}
                placeholder="Tuliskan pesanmu di sini..."
                required
                className="bg-zinc-800 border border-zinc-700 focus:border-violet-500 focus:outline-none text-white placeholder-zinc-500 text-sm px-4 py-3 rounded-xl transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-1 flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-700/30"
            >
              <i className="ri-send-plane-line ri-lg" />
              Kirim Pesan
            </button>
          </form>

        </div>
      </div>
    </>
  );
}