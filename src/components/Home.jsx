import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    // placeholder

    return (
        <div className="home">
            <section className="hero">
                <p className="eyebrow">Portfolio & Capstone Case Study</p>

                <h1>Hey there, I'm Stafford.</h1>

                <p className="subtitle">CS Senior at UW Bothell and aspiring Fullstack Developer / Software Engineer</p>

                <p className="description">
                    This portfolio documents the design, development, and lessons learned while building Anchor, an emotional wellness application developed as my capstone project.
                </p>
            </section>


            <div className="home-links">
                <Link to="/about" className="link-card">
                    <div className="card-content">
                        <h2>About</h2>
                        <p>Learn more about my background, experience, and current work.</p>
                    </div>
                </Link>

                <Link to="/capstone" className="link-card">
                    <div className="card-content">
                        <h2>Capstone</h2>
                        <p>Explore the design and development process behind Anchor.</p>
                    </div>
                </Link>

                <Link to="/bibliography" className="link-card">
                    <div className="card-content">
                        <h2>Bibliography</h2>
                        <p>Research, references, and resources that informed my project.</p>
                    </div>
                </Link>

                <Link to="/contact" className="link-card">
                    <div className="card-content">
                        <h2>Contact</h2>
                        <p>Questions, feedback, or opportunities to connect.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}