import "./About.css"

export default function About() {
    // placeholder

    return (
        <div>
            <h1>About.</h1>

            <h2>Who I am.</h2>
            <p>
                Born and raised in the Pacific Northwest, I've spent the last 4 years working in IT support. With 2 years of Computer Science study under my belt, in late 2024, I made
                the decision to switch careers. I was accepted into the University of Washington - Bothell's CSSE (Computer Science & Software Engineering) in December 2024 and have spent
                the last 2 years completing my degree. I will be graduating in August 2026 with a Bachelor of Science in Computer Science.
            </p>

            <h2>What I've worked on.</h2>
            <p>
                I've worked on various projects throughout the years, both individually and as apart of a team. Some of my most significant work I have contributed to includes:
                <ul>
                    <li>Custom Library Cataloging System</li>
                    <li>Machine Learning Application for Early Diabetes Detection</li>
                    <li>Autonomous Maze Solver using Embedded Systems</li>
                    <li>Fully Networked/Online Tic-tac-toe game</li>
                    <li>Mobile trip planner/coordinator for groups</li>
                </ul>
            </p>

            <h2>Future</h2>
            <p>
                I plan to continue development of Anchor beyond my capstone as a passion project, with hopes of possibly expanding it beyond its current scope so that others can openly
                contribute. I am also currently looking for opportunities where I can help and contribute to existing projects/research opportunities with eventual aspirations to pursue
                a Master's Degree in grad school.
            </p>

            <a href="swresume.pdf" className="resume">Download my Resume</a>

            {/* <object data="swresume.pdf" type="application/pdf" width="50%" height="600px">
                <p>Your browser does not support PDFs. <a href="swresume.pdf">Download the PDF</a>.</p>
            </object> */}
        </div>
    )
}