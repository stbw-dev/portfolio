import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    // placeholder

    return (
        <div className="home">
            <div className="info">
                <h1>Hey there, welcome to my portfolio.</h1>
                <img src={`${import.meta.env.BASE_URL}headshot.png`} />
            </div>

            <div className="links">

                <Link to="/about" className="link-card">
                    <div>
                        <h2>About</h2>
                        <p>Learn more about my background, experience, and current work.</p>
                    </div>
                </Link>

                <Link to="/capstone" className="link-card">
                    <div>
                        <h2>Capstone</h2>
                        <p>Explore the design and development process behind Anchor.</p>
                    </div>
                </Link>

                <Link to="/bibliography" className="link-card">
                    <div>
                        <h2>Bibliography</h2>
                        <p>Research, references, and resources that informed my project.</p>
                    </div>
                </Link>

                <Link to="/contact" className="link-card">
                    <div>
                        <h2>Contact</h2>
                        <p>Questions, feedback, or opportunities to connect.</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}