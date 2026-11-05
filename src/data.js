import HeroImage from "/assets/hero-img2.png";
import HeroImage2 from "/assets/hero-img1.png";

const Image = {
  HeroImage, HeroImage2
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/php.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/flutter.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/python.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/canva.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Frontend Library",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "PHP",
    ket: "Backend Language",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "CSS Framework",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Programming Language",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Flutter",
    ket: "Mobile Framework",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Version Control",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Python",
    ket: "Programming Language",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Canva",
    ket: "Design Tool",
  },
];

export const listSertifikat = [
  {
    id: 1,
    gambar: "/assets/proyek/sertif/sertif.png",
    nama: "Legacy Responsive Web Design V8",
    platform: "FreeCodeCamp",
    tahun: "2024",
    platformColor: "bg-blue-900/40 text-blue-300",
  },
  {
    id: 2,
    gambar:"/assets/proyek/sertif/sertif1.jpg",
    nama: "TSA-Cyber Champion Digital Talent Scouting Scholarship 2024",
    platform: "Digitalent Kominfo",
    tahun: "2024",
    platformColor: "bg-blue-900/40 text-blue-300",
  },
  {
    id: 3,
    gambar: "/assets/proyek/sertif/sertif2.jpg",
    nama: "Memulai Pemrograman dengan Python",
    platform: "Dicoding",
    tahun: "2024",
    platformColor: "bg-blue-900/40 text-blue-300",
  },
  {
    id: 4,
    gambar: "/assets/proyek/sertif/sertif3.jpg",
    nama: "Belajar Dasar Visualisasi Data dengan Python",
    platform: "Dicoding",
    tahun: "2024",
    platformColor: "bg-blue-900/40 text-blue-300",
  },
  {
    id: 5,
    gambar: "/assets/proyek/sertif/sertif2.png",
    nama: "Hak Kekayaan Intelektual Website 'Queasy'",
    platform: "DJKI Kemenkumham",
    tahun: "2025",
    platformColor: "bg-blue-900/40 text-blue-300",
  },
  {
    id: 6,
    gambar: "/assets/proyek/sertif/sertif3.png",
    nama: "Data Science Esentials with Python",
    platform: "Cisco Networking Academy",
    tahun: "2026",
    platformColor: "bg-blue-900/40 text-blue-300",
  },
  {
    id: 7,
    gambar: "/assets/proyek/sertif/sertif4.png",
    nama: "Belajar Data Science End to End",
    platform: "Sinau Jogja",
    tahun: "2025",
    platformColor: "bg-blue-900/40 text-blue-300",
  },
  {
    id: 8,
    gambar: "/assets/proyek/sertif/sertif5.png",
    nama: "Python Essentials 2",
    platform: "Cisco Networking Academy",
    tahun: "2026",
    platformColor: "bg-blue-900/40 text-blue-300",
  },
];

import Proyek1 from "/assets/proyek/queasy.png";
import Proyek2 from "/assets/proyek/dokumind/dokumind (2).png";
import Proyek3 from "/assets/proyek/mbatic.png";
import Proyek4 from "/assets/proyek/SPPG.png";
import Proyek5 from "/assets/proyek/qumon.png";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    slug: "queasy",
    gambar: Proyek1,
    nama: "Queasy",
    desk: `Queasy adalah platform kuis berbasis web yang dirancang untuk memberikan pengalaman belajar yang terstruktur dan progresif. Platform ini menerapkan sistem pembelajaran bertahap, di mana pengguna harus menyelesaikan minimal 50% kuis pada kategori sebelumnya untuk membuka akses ke kategori berikutnya.
    Keunikan Queasy terletak pada penerapan alur cerita (story-driven quiz) yang dipadukan dengan sistem nyawa pada setiap kuis. Pengguna harus menyelesaikan kuis dengan jumlah nyawa yang terbatas. Apabila seluruh nyawa habis, pengguna harus mengulang kuis dari awal.`,
    screenshots: [
      "/assets/proyek/queasy/queasy1.png",
      "/assets/proyek/queasy/queasy2.png",
      "/assets/proyek/queasy/queasy3.png",
      "/assets/proyek/queasy/queasy4.png",
      "/assets/proyek/queasy/queasy5.png",
      "/assets/proyek/queasy/queasy6.png",
      "/assets/proyek/queasy/queasy7.png",
      "/assets/proyek/queasy/queasy8.png",
      "/assets/proyek/queasy/queasy9.png",
      "/assets/proyek/queasy/queasy10.png",
      "/assets/proyek/queasy/queasy11.png",
    ],
    tools: ["PHP Native", "HTML5", "CSS3","MySQL", "Bootstrap", "JavaScript"],
    features: [
      "Sistem Pembelajaran Progresif: Membuka kategori pembelajaran berikutnya setelah menyelesaikan minimal 50% kuis pada kategori sebelumnya.",
      "Kategori Kuis Beragam: Menyediakan berbagai topik pembelajaran yang dikelompokkan berdasarkan kategori.",
      "Alur Cerita Interaktif: Menghadirkan pengalaman mengerjakan kuis melalui alur cerita yang terintegrasi.",
      "Sistem Nyawa: Memberikan jumlah nyawa terbatas pada setiap kuis. Pengguna harus mengulang kuis apabila seluruh nyawa habis.",
      "Pelacakan Progres: Memantau perkembangan dan pencapaian pengguna dalam menyelesaikan kuis.",
    ],
    github: "https://github.com/ellfataa/Queasy",
    link: "http://queasy.site.je/",
  },
  {
    id: 2,
    slug: "dokumind",
    gambar: Proyek2,
    nama: "Dokumind: Sistem Manajemen Dokumen Berbasis AI",
    desk: "Aplikasi berbasis web yang memungkinkan pengguna untuk mengunggah dokumen dan berinteraksi dengan kontennya melalui sistem tanya jawab berbasis AI yang menggunakan Large Language Models (LLM) dan Retrieval-Augmented Generation (RAG).",
    screenshots: [
      "/assets/proyek/dokumind/dokumind (2).png",
      "/assets/proyek/dokumind/dokumind (3).png",
      "/assets/proyek/dokumind/dokumind (4).png",
      "/assets/proyek/dokumind/dokumind (5).png",
      "/assets/proyek/dokumind/dokumind (6).png",
      "/assets/proyek/dokumind/dokumind (1).png",
    ],
    tools: ["React", "FastAPI", "ChromaDB", "PostgreSQL", "Gemini", "LangChain", "FastEmbed", "Docker", "Tailwind CSS", "JWT"],
    features: [
      "Upload and manage knowledge documents.",
      "Process and extract text from uploaded documents.",
      "Automatically split documents into meaningful text chunks.",
      "Semantic document retrieval using vector embeddings.",
      "Rerank retrieved document chunks based on query relevance.",
      "Ask questions about uploaded documents through an interactive chat interface.",
      "Generate context-aware answers using Google Gemini.",
      "Manage chat sessions and conversation history.",
      "JWT-based user authentication.",
      "Persistent document and conversation data storage."
    ],
    github: "https://github.com/DanielAArif/ai-knowledge-base",
    link: "#",
  },
  {
    id: 3,
    slug: "mbatic",
    gambar: Proyek3,
    nama: "MBatiC: Mobile Batik Classifier",
    desk: "MBatiC merupakan aplikasi mobile yang dikembangkan untuk membantu identifikasi motif Batik Pekalongan secara otomatis menggunakan teknologi Convolutional Neural Network (CNN) berbasis MobileNetV2. Pengguna dapat mengambil gambar atau mengunggah foto batik, kemudian sistem akan memberikan hasil klasifikasi beserta informasi edukatif mengenai motif yang terdeteksi.",
    screenshots: [
      "/assets/proyek/mbatic/mbatic1.jpeg",
      "/assets/proyek/mbatic/mbatic2.jpeg",
      "/assets/proyek/mbatic/mbatic6.jpeg",
      "/assets/proyek/mbatic/mbatic3.jpeg",
      "/assets/proyek/mbatic/mbatic4.jpeg",
      "/assets/proyek/mbatic/mbatic5.jpeg",
    ],
    tools: [
      "Flutter",
      "Dart",
      "Python",
      "TensorFlow",
      "TensorFlow Lite",
      "MobileNetV2",
      "SQLite",
    ],
    features: [
      "Melakukan prediksi motif batik langsung di perangkat menggunakan TensorFlow Lite tanpa memerlukan koneksi internet.",
      "Memilih gambar batik dari galeri perangkat untuk diidentifikasi.",
      "Mengambil gambar batik secara langsung menggunakan kamera perangkat untuk proses klasifikasi.",
      "Menyimpan data informasi batik dan gambar pendukung menggunakan SQLite",
      "Galeri Motif Batik Pekalongan",
    ],
    github: "https://github.com/khadziq059/Ambatik",
    link: "https://github.com/khadziq059/MBatiC",
  },
  {
    id: 4,
    slug: "sistem-pakar-penyakit-gigi",
    nama: "Sistem Pakar Diagnosa Penyakit Gigi",
    gambar: Proyek4,
    desk: "Aplikasi sistem pakar berbasis web untuk membantu identifikasi awal penyakit gigi berdasarkan gejala yang dialami pengguna.",
    screenshots: [
      "/assets/proyek/sppg/sppg1.png",
      "/assets/proyek/sppg/sppg2.png",
      "/assets/proyek/sppg/sppg3.png",
      "/assets/proyek/sppg/sppg4.png",
      "/assets/proyek/sppg/sppg5.png",
      "/assets/proyek/sppg/sppg6.png",
      "/assets/proyek/sppg/sppg7.png",
      "/assets/proyek/sppg/sppg8.png",
    ],
    tools: ["PHP", "MySQL", "Tailwind"],
    features: [
      "Konsultasi berdasarkan gejala yang dipilih pengguna",
      "Basis pengetahuan penyakit dan gejala gigi",
      "Proses inferensi menggunakan metode sistem pakar",
      "Hasil diagnosis beserta tingkat keyakinan",
      "Informasi dan rekomendasi penanganan awal",
      "Manajemen data penyakit dan gejala"
    ],
    github: "https://github.com/Kamilafp/SISPAK_B",
    link: "http://sipakargigi.gt.tc/",
  },
  {
    id: 5,
    slug: "qumon",
    gambar: Proyek5,
    nama: "QuMon",
    desk: "Aplikasi microlearning berbasis mobile yang menghadirkan pengalaman belajar melalui feed kuis vertikal seperti TikTok. Pengguna dapat menemukan, menjawab, dan menyimpan soal dari berbagai kategori secara cepat dan interaktif, menjadikan proses belajar lebih menarik dan mudah diakses.",
    screenshots: [
      "/assets/proyek/qumon/qumon1.png",
      "/assets/proyek/qumon/qumon2.png",
      "/assets/proyek/qumon/qumon3.png",
      "/assets/proyek/qumon/qumon4.png",
      "/assets/proyek/qumon/qumon5.png",
      "/assets/proyek/qumon/qumon6.png",
      "/assets/proyek/qumon/qumon7.png",
      "/assets/proyek/qumon/qumon9.png",
      "/assets/proyek/qumon/qumon10.png",
      "/assets/proyek/qumon/qumon11.png",
      "/assets/proyek/qumon/qumon12.png",
      "/assets/proyek/qumon/qumon13.png",
      "/assets/proyek/qumon/qumon14.png",
    ],
    tools: ["Flutter", "Dart", "Firebase", "PHP", "Laravel"],
    features: [
      "Feed kuis vertikal dengan pengalaman belajar seperti TikTok",
      "Berbagai kategori soal yang dapat dijelajahi pengguna",
      "Sistem penyimpanan kuis favorit",
      "Riwayat dan pemantauan progres belajar",
      "Autentikasi pengguna menggunakan Firebase",
      "Tampilan responsif dan ramah pengguna",
    ],
    github: "https://github.com/ZiaKfa/qumon-ui",
    link: "#",
  },
  {
    id: 6,
    slug: "simba-bps",
    gambar: Proyek6,
    nama: "SIMBA BPS Kota Pekalongan",
    desk: "Sistem informasi inventaris berbasis web yang dikembangkan untuk mendukung pengelolaan barang masuk dan keluar di BPS Kota Pekalongan. Dilengkapi fitur pencatatan transaksi, monitoring stok, pencarian data, dan pembuatan laporan guna meningkatkan efisiensi administrasi inventaris.",
    screenshots: [
      "/assets/proyek/simba/simbabps1.png",
      "/assets/proyek/simba/simbabps2.png",
      "/assets/proyek/simba/simbabps3.png",
      "/assets/proyek/simba/simbabps4.png",
      "/assets/proyek/simba/simbabps5.png",
      "/assets/proyek/simba/simbabps6.png",
      "/assets/proyek/simba/simbabps7.png",
      "/assets/proyek/simba/simbabps8.png",
      "/assets/proyek/simba/simbabps9.png",
      "/assets/proyek/simba/simbabps10.png",
    ],
    tools: ["PHP", "Laravel", "Blade", "Bootstrap"],
    features: [
      "Dashboard ringkasan inventaris dan aktivitas barang",
      "Pengelolaan data barang inventaris BPS Kota Pekalongan",
      "Pencatatan barang masuk dan barang keluar",
      "Monitoring jumlah stok yang tersedia",
      "Pencarian data barang berdasarkan nama dan kategori",
      "Manajemen data pengguna",
      "Pembuatan dan pencetakan laporan inventaris",
    ],
    github: "https://github.com/khadziq059/Inventori-BPS",
    link: "https://simbabps.page.gd/",
  },
  {
    id: 7,
    slug: "roblox-egg-hunt",
    gambar: Proyek6,
    nama: "Egg Hunt Adventure",
    desk: "Game multiplayer berbasis Roblox yang mengusung konsep pet collection dan egg hunting. Pemain dapat menjelajahi berbagai map untuk menemukan telur, menghindari monster penjaga, serta mengumpulkan telur dengan tingkat kelangkaan berbeda. Telur dapat ditetaskan menjadi berbagai hewan peliharaan yang bisa ditempatkan di pet farm untuk menghasilkan koin secara otomatis.",
    screenshots: [
      "/assets/proyek/roblox/roblox1.png",
      "/assets/proyek/roblox/roblox2.png",
      "/assets/proyek/roblox/roblox3.png",
      "/assets/proyek/roblox/roblox4.png",
      "/assets/proyek/roblox/roblox5.png",
    ],
    tools: [
      "Roblox Studio",
      "Luau",
      "Roblox API",
    ],
    features: [
      "Eksplorasi berbagai map untuk menemukan telur dengan tingkat kelangkaan berbeda",
      "Sistem egg hunting dengan jumlah telur terbatas di setiap map",
      "Monster penjaga yang memberikan tantangan saat berburu telur",
      "Sistem membawa, menjatuhkan, dan mencuri telur milik pemain lain",
      "Sistem penetasan telur menjadi berbagai koleksi hewan peliharaan",
      "Pet farm untuk menghasilkan koin secara otomatis",
      "Sistem upgrade kapasitas pet farm",
      "Sistem peningkatan kecepatan karakter melalui fitur latihan",
      "Sistem slingshot untuk menyerang dan menjatuhkan telur yang dibawa pemain lain",
      "Sistem rebirth dengan progres dan koleksi pet yang tetap dipertahankan",
      "Sistem pendapatan pet saat pemain sedang offline",
    ],
    github: "#",
    link: "#",
},
];