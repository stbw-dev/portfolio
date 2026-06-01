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
import Developer from './components/capstone/Developer.jsx'
import Self from './components/capstone/Self.jsx'
import User from './components/capstone/User.jsx'

createRoot(document.getElementById('root')).render(
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capstone" element={<Capstone />} />
        <Route path="/userperspect" element={<User />}></Route>
        <Route path="/devperspect" element={<Developer />}></Route>
        <Route path="/myperspective" element={<Self />}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/bibliography" element={<Bibliography />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <small>Stafford Winn 2026</small> |{" "}
      <small>Created in <a href="https://react.dev/">React</a> and deployed with <a href="https://docs.github.com/en/pages">GitHub Pages</a>.</small>
    </HashRouter>
)
