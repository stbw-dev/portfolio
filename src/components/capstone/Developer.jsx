import './Developer.css'
// developers perspective

export default function Developer() {
    return (
        <section id="developer-perspective" className="devMain">
            <h1>Developer's Perspective.</h1>

            <div id="dev-initial" className="devInit">
                <h2>Initial design work</h2>

                <p>When I started work on my capstone this spring, I benefited from the work I did in CSS 370 the quarter prior. I would attribute the work that I did prior to how comfortable 
                    I felt going into the preparation and considerations for my project. For very brief context, in 370, my group and I designed a hypothetical discord bot for generating 
                    "message summaries" of a user's missed messages. Throughout the process I learned how to get started with Human-centered Design at the core of design work. It was also
                    important to think in terms of "models", to abstract information as needed, which would later become fundamental in the documentation of my system architecture.
                    This is the basis for the design work I used for my capstone.
                </p>

                <p>Carrying over from 370, my first step was creating a lean canvas: a "quick and dirty" template for outlining assumptions, risks, and estimations for my project. I felt 
                    that it was imperative to get the ball rolling quickly given the limited time frame of my capstone project. Creating a lean canvas was very beneficial in this regard.
                    Figure 2.1.1 outlines the details in my lean canvas:
                </p>

                <figure>
                    <img src="leancanvas.png" alt="lean canvas artifact"/>
                    <figcaption>Figure 2.1.1: The lean canvas I created for my project, during the design process. The power of a lean canvas comes in it's speed and focus, highlighting
                        key elements in a one page template in contrast to other length design methods.
                    </figcaption>
                </figure>

                <p>More insight...</p>

                <figure>
                    <img src={`${import.meta.env.BASE_URL}componentdiag.png`} alt="component diagram"/>
                    <figcaption>Figure 2.1.2: Component diagram.</figcaption>
                </figure>

                <figure>
                    <img src={`${import.meta.env.BASE_URL}usecasediag.png`} alt="use case diagram"/>
                    <figcaption>Figure 2.1.3: Use case diagram diagram.</figcaption>
                </figure>


            </div>

            <div id="dev-backend" className="devBackend">
                <h2>Backend</h2>
                <p>Insight...</p>

                <figure>
                        <img src={`${import.meta.env.BASE_URL}schema.png`} alt="database schema"/>
                        <figcaption>Figure 2.2.1: Database schema</figcaption>
                </figure>

                <p>More insight...</p>

                <figure>
                        <img src={`${import.meta.env.BASE_URL}endpoints.png`} alt="python code showing endpoints"/>
                        <figcaption>Figure 2.2.2: FastAPI endpoints in Visual Code</figcaption>
                </figure>

                <p>More insight...</p>
            </div>

            <div id="dev-frontend" className="devFrontend">
                <h2>Frontend</h2>

                <p>Insight...</p>

                <figure>
                        <img src={`${import.meta.env.BASE_URL}reactjscode.png`} alt="snippet of javascript code"/>
                        <figcaption>Figure 2.3.1: Login component in React</figcaption>
                </figure>

                <p>More insight...</p>

                <p>More insight...</p>
            </div>

            <div id="dev-uiux" className="devUi">
                <h2>UI/UX</h2>
                <p>Insight...</p>

                <figure>
                        <img src={`${import.meta.env.BASE_URL}anchor-checkin.png`} alt="anchor check-in form"/>
                        <figcaption>Figure 2.4.1: Anchor Check-in Form</figcaption>
                </figure>
            </div>

            <div id="dev-conclusion" className="devConclusion">
                <h2>Next Steps</h2>
                <p></p>
            </div>
        </section>
    )
}