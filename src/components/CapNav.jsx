import { HashLink } from "react-router-hash-link"

export default function CapNav() {
    return (
        <nav>
            <h2>Index</h2>
            <ul>
                {/* Add subheadings as needed */}
                <li><HashLink smooth to="#user-perspective">User Perspective</HashLink></li>
                <ul>
                    <li><HashLink smooth to ="#what">What is it?</HashLink></li>
                    <li><HashLink smooth to ="#why">Why use it?</HashLink></li>
                    <li><HashLink smooth to ="#how">How does it work?</HashLink></li>
                </ul>
                <li><HashLink smooth to="#developer-perspective">Developer Perspective</HashLink></li>
                <ul>
                    <li><HashLink smooth to ="#dev-initial">Initial design work</HashLink></li>
                    <li><HashLink smooth to ="#dev-backend">Backend</HashLink></li>
                    <li><HashLink smooth to ="#dev-frontend">Frontend</HashLink></li>
                    <li><HashLink smooth to ="#dev-uiux">UI/UX</HashLink></li>
                    <li><HashLink smooth to ="#dev-conclusion">Next Steps</HashLink></li>
                </ul>
                <li><HashLink smooth to="#reflection">My Perspective</HashLink></li>
                <ul>

                </ul>
            </ul>
        </nav>
    )
}