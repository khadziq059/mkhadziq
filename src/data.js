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

import Proyek1 from "/assets/proyek/queasy.png";
import Proyek2 from "/assets/proyek/proyek6.webp";
import Proyek3 from "/assets/proyek/mbatic.png";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/qumon.png";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Queasy",
    desk: "Aplikasi web kuis interaktif yang dirancang untuk memudahkan proses pembelajaran dan evaluasi. Dilengkapi fitur autentikasi pengguna, leaderboard, manajemen soal, serta panel administrasi untuk pengelolaan sistem.",
    tools: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Company Profile",
    desk: "Website company profile modern dengan desain responsif dan optimalisasi pengalaman pengguna.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "MBatiC: Mobile Batik Classifier",
    desk: "Aplikasi mobile berbasis Flutter untuk identifikasi motif Batik Pekalongan menggunakan model CNN MobileNetV2. Aplikasi mampu mengenali berbagai motif batik serta menyajikan informasi edukatif mengenai motif yang terdeteksi.",
    tools: ["Flutter", "Python", "TensorFlow", "MobileNetV2", "SQLite"],
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Sistem Klasifikasi Motif Batik",
    desk: "Penelitian klasifikasi motif Batik Pekalongan menggunakan Convolutional Neural Network dengan transfer learning MobileNetV2.",
    tools: ["Python", "CNN", "TensorFlow", "Machine Learning"],
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "QuMon",
    desk: "Aplikasi microlearning berbasis mobile yang menghadirkan pengalaman belajar melalui feed kuis vertikal seperti TikTok. Pengguna dapat menemukan, menjawab, dan menyimpan soal dari berbagai kategori secara cepat dan interaktif, menjadikan proses belajar lebih menarik dan mudah diakses.",
    tools: ["Flutter", "Dart", "Firebase", "PHP", "Laravel"],
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "SIMBA BPS Kota Pekalongan",
    desk: "Sistem informasi inventaris berbasis web yang dikembangkan untuk mendukung pengelolaan barang masuk dan keluar di BPS Kota Pekalongan. Dilengkapi fitur pencatatan transaksi, monitoring stok, pencarian data, dan pembuatan laporan guna meningkatkan efisiensi administrasi inventaris.",
    tools: ["PHP", "Laravel", "Blade", "Bootstrap"],
  },
];
