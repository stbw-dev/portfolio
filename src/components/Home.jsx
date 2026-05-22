import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    // placeholder

    return (
        <div className="home">
            <div className="info">
                <h1>Hey there, welcome to my portfolio.</h1>
                <img src="headshot.png" />
            </div>

            <div className="links">

                <Link to="/about">
                    <div>
                        <h2>About</h2>
                        <p>Learn more about me, my experience, and what's currently in the works.</p>
                    </div>
                </Link>

                <Link to="/capstone">
                    <div>
                        <h2>Capstone</h2>
                        <p>An in-depth overview of my capstone project.</p>
                    </div>
                </Link>

                <Link to="/bibliography">
                    <div>
                        <h2>Bibliography</h2>
                    </div>
                </Link>

                <Link to="/contact">
                    <div>
                        <h2>Contact</h2>
                        <p>Got a question for me?</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}