import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import 'remixicon/fonts/remixicon.css'
import Footer from './components/footer.jsx'
import Preloader from './components/preLoader.jsx'
import 'animate.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <div className="container mx-auto px-5">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
