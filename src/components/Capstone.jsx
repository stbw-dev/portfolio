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
                    <div className="card-content">
                        <h2>Using Anchor</h2>
                        <p>Learn more about the purpose of Anchor and what it offers.</p>
                    </div>
                </Link>

                <Link to="/devperspect" className="link-card">
                    <div className="card-content">
                        <h2>Development Process</h2>
                        <p>A technical overview of the thought process behind building Anchor.</p>
                    </div>
                </Link>

                <Link to="/myperspective" className="link-card">
                    <div className="card-content">
                        <h2>Reflection</h2>
                        <p>My motivations for building Anchor, and what I've learned from it.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}