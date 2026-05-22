import { Link } from "react-router"
import './Header.css'

export default function Header() {
    return (
        <div className="nav"> 
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/capstone">Capstone</Link> |{" "}
            <Link to="/bibliography">Bibliography</Link> |{" "}
            <Link to="/contact">Contact</Link>
        </div>
    )
}