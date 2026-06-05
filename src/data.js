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

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Aplikasi Identifikasi Motif Batik Pekalongan",
    desk: "Aplikasi mobile berbasis Flutter yang mampu mengidentifikasi motif Batik Pekalongan menggunakan model CNN MobileNetV2.",
    tools: ["Flutter", "Python", "TensorFlow", "MobileNetV2"],
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Sistem Informasi Inventaris",
    desk: "Aplikasi web untuk pengelolaan inventaris barang dengan fitur CRUD dan laporan data.",
    tools: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Website Portofolio Pribadi",
    desk: "Website portofolio responsif untuk menampilkan profil, skill, dan proyek yang pernah dikerjakan.",
    tools: ["React", "Vite", "Tailwind CSS"],
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
    nama: "UI/UX Mobile Learning App",
    desk: "Perancangan antarmuka aplikasi pembelajaran menggunakan Figma dengan pendekatan user-centered design.",
    tools: ["Figma", "UI/UX"],
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Website Company Profile",
    desk: "Website company profile modern dengan desain responsif dan optimalisasi pengalaman pengguna.",
    tools: ["HTML", "CSS", "JavaScript"],
  },
];
