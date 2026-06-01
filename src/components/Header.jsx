import { Link } from "react-router"
import { useState } from "react"
import './Header.css'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header"> 
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <div className="dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                    <Link to="/capstone">Capstone</Link>
                    {isOpen && (<ul className="dropdown-menu">
                        <li><Link to="/userperspect">User Perspective</Link></li>
                        <li><Link to="/devperspect">Developer Perspective</Link></li>
                        <li><Link to="/myperspective">My Perspective</Link></li>
                    </ul>)}
                </div>
                <Link to="/bibliography">Bibliography</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <div className="socials">
                <a href="https://github.com/stbw-dev" target="_blank" rel="noopener noreferrer">
                    <img src={`${import.meta.env.BASE_URL}github-logo.png`} alt="github logo"/>
                </a>

                <a href="https://www.linkedin.com/in/staffordwinn/" target="_blank" rel="noopener noreferrer">
                    <img src={`${import.meta.env.BASE_URL}linkedin_logo.png`} alt="linkedin logo"/>
                </a>
                <a href="mailto:stbwinn@gmail.com">
                    <img src={`${import.meta.env.BASE_URL}email.png`} alt="email symbol"/>
                </a>
            </div>
        </header>
    )
}