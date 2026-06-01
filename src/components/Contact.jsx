import './Shared.css'

export default function Contact() {
    return (
        <main className="page-main">
        <h1>Contact</h1>

        <div className="page-card">
            <p>
                Questions, feedback, or opportunities to connect? Feel free to reach out.
            </p>

            <div className="page-actions">
                <a className="page-button" href="mailto:stbwinn@gmai.com">
                    Email me
                </a>

                <a className="page-button" href="https://github.com/stbw-dev" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>

                <a className="page-button secondary" href="https://www.linkedin.com/in/staffordwinn/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </div>

        </main>
    )
}