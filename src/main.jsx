import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Capstone from './components/Capstone.jsx'
import About from './components/About.jsx'
import Bibliography from './components/Bibliography.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capstone" element={<Capstone />} />
        <Route path="/about" element={<About />} />
        <Route path="/bibliography" element={<Bibliography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
)
