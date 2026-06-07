import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Preloader from "./components/preLoader.jsx";

import App from "./App.jsx";
import DetailProyek from "./DetailProyek.jsx";

import "remixicon/fonts/remixicon.css";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Preloader />
      <div className="container mx-auto px-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/proyek/:slug" element={<DetailProyek />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);