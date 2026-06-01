import { HashLink } from "react-router-hash-link"
import { Link } from 'react-router-dom'
import './Capstone.css'
import Developer from "./capstone/Developer"
import Self from "./capstone/Self"
import User from "./capstone/User"

export default function Capstone() {
    return (
        <div className="capstoneMain">
            <h1>Capstone Case Study</h1>

            <div className="capstone-links">
                <Link to="/userperspect" className="link-card">
                    <div>
                        <h2>User perspective</h2>
                        <p>User perspective</p>
                    </div>
                </Link>

                <Link to="/devperspect" className="link-card">
                    <div>
                        <h2>Developer Perspective</h2>
                        <p>Developer Perspective</p>
                    </div>
                </Link>

                <Link to="/myperspective" className="link-card">
                    <div>
                        <h2>My Perspective</h2>
                        <p>My Perspective</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}