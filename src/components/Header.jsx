import { Link } from "react-router"
import './Header.css'

export default function Header() {
    return (
        <header className="header"> 
            <div className="nav">
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/capstone">Capstone</Link> |{" "}
                <Link to="/bibliography">Bibliography</Link> |{" "}
                <Link to="/contact">Contact</Link>
            </div>

            <div className="socials">
                <a href="https://github.com/stbw-dev" target="_blank" rel="noopener noreferrer">
                    <img src={`${import.meta.env.BASE_URL}github-logo.png`} alt="github logo"/>
                </a>

                <a href="https://www.linkedin.com/in/staffordwinn/" target="_blank" rel="noopener noreferrer">
                    <img src={`${import.meta.env.BASE_URL}linkedin_logo.png`} alt="linkedin logo"/>
                </a>
            </div>
        </header>
    )
}