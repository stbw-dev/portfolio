import { HashLink } from "react-router-hash-link"
import '../AccordionItem'
import './Developer.css'
import AccordionItem from "../AccordionItem"

export default function Developer() {
    return (
        <section id="developer-perspective" className="devMain">
            <HashLink smooth to="#root" className="back-top">Back to top</HashLink>

            <h1>Developer's Perspective.</h1>

            <AccordionItem title="Design">
                <div className="devDesign">
                    <div className="dev-background">
                        <h2>Background</h2>

                        <p>
                            Prior to beginning my capstone, I completed CSS 370 - Analysis and Design, where I was introduced to Human-Centered Design principles and system modeling techniques. 
                            These experiences significantly influenced how I approached the design phase of Anchor, particularly in the areas of requirements analysis, architecture planning, 
                            and documentation. This is the basis for the design work I used for my capstone.
                        </p>

                        <h3>Design Goals</h3>
                        <ul>
                            <li>Support future scalability</li>
                            <li>Maintain seperation of concerns</li>
                            <li>Prioritize learning modern web development practices</li>
                            <li>Keep the system maintainable as a solo developer</li>
                        </ul>

                        <h3>Key Constraints</h3>
                        <ul>
                            <li>20 weeks, 300 hour timeline</li>
                            <li>Individual project, one developer</li>
                            <li>Limited prior web dev experience</li>
                            <li>Desire to gain fullstack experience, learn backend API development</li>
                            <li>Self-goal to have a functional MVP by end of 1st quarter</li>
                        </ul>
                    </div>

                    <div className="dev-leancanvas">
                        <h2>Lean Canvas</h2>

                        <p>
                            Carrying over from CSS 370, my first step was creating a lean canvas: a "quick and dirty" template for outlining assumptions, risks, and estimations for my project. I felt 
                            that it was imperative to get the ball rolling quickly given the limited time frame of my capstone project. Creating a lean canvas was very beneficial in this regard.
                            Figure 2.1.1 outlines the details in my lean canvas:
                        </p>

                        <figure>
                            <img src="leancanvas.png" alt="lean canvas artifact"/>
                            <figcaption>Figure 2.1.1: The lean canvas I created for my project, during initial design work. The power of a lean canvas comes in it's speed and focus, highlighting
                                key elements in a one page template in contrast to other length design methods.
                            </figcaption>
                        </figure>

                        <p>
                            Creating this Lean Canvas helped me to understand the need to maintain a narrow project scope, as this would be critical for successfully completing my capstone within
                            the available timeframe. It also provided clarity on the foundation of the project, as well as an explicit outline of what my project is trying to solve, who my target
                            customers are, and the viability of maintaining the project.
                        </p>
                    </div>

                    <div className="dev-archdesign">
                        <h2>Architectural Design</h2>

                        <p>
                            After I had the general purpose of my project on paper, I made a bit of an unconventional decision to move onto creating the system architecture next. Conventionally, I would have
                            opted to instead work on creating customer profiles and scenarios in anticipation for conducting requirement elication. While very imporant, I felt that this step can be a lengthy
                            time investment, and as a result, I opted to move directly into designing the system architecture, and instead leaving requirements gathering as a simultaneous/concurrent process
                            in parrallel with the development of the system. My design choices here have massive implications for the implementation of my project, meaning, that if I realized that
                            I needed to change something, architecturally, would not be a trivial task. With this in mind, I considered all options available to me.
                        </p>

                        <table>
                            <thead>
                                <tr>
                                    <th>Architecture</th>
                                    <th>Decision</th>
                                    <th>Rationale</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Monolithic</td>
                                    <td>Rejected</td>
                                    <td>Reduced scalability, seperation of concerns</td>
                                </tr>
                                <tr>
                                    <td>Serverless</td>
                                    <td>Rejected</td>
                                    <td>Did not align with backend learning goals</td>
                                </tr>
                                <tr>
                                    <td>Backend-for-Frontend</td>
                                    <td>Rejected</td>
                                    <td>Time constraints, increased complexity beyond project scope</td>
                                </tr>
                                <tr>
                                    <td>3-Tier Client-Server</td>
                                    <td>Selected</td>
                                    <td>Balanced scalability, maintainability, and fits into learning objectives</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            I decided to go with a client-server/3-tier architecture. It made the most sense for the context of my project and the existing constraints/limitations at the time. Conisdering
                            that I was going into my project with limited web development knowledge, outside of HTML/CSS. I didn't want to invest additional time in an architecture pattern that would
                            add significant overhead from required learning. I had considered taking a "monolithic" approach, where I would consolidate my frontend, backend, and database into one single
                            deployment. I believe this is more than reasonable and would have also been feasable for my project given that this is an individual project, however, this would have limited
                            the scalability of my application if I later decide to continue working on it after my capstone is completed. Also, the system would act as a giant single point of failure, so
                            if one component failed the whole application would be dead in the water.
                        </p>

                        <p>
                            I had also going with a "serverless" pattern, more specifically, with my entire backend being cloud based. I felt that this was also a viable option, however, going this route
                            would have been detrimental to my learning goals. I had specifically set out to learn the ins and outs of developing a RESTful API and in my mind, creating the entire backend
                            on, what will eventually be a hosted server, was the best platform for doing so.
                        </p>

                        <p>
                            Lastly, I had considered taking a Backend-for-Frontend approach, however given the total time I have this was quickly scrapped. Ideally, I would have preferred to
                            implement a mobile frontend, using React Native, so that each interface would be served separetely on the backend. 
                        </p>
                    </div>

                    <div className="dev-artifacts">
                        <h2>Design Artifacts</h2>

                        <h3>Component Diagram</h3>

                        <p>
                            Once I had the architectural direction established, I started off by creating
                            a component diagram so that I had a clear blueprint of the underlying components/modules of my system, helping to define their responsbilities and describing
                            the relationship of each part and how they interact with each other. It was imperative to understand what I needed in my project to ensure that I had a working system that
                            fits my project goals.
                        </p>

                        <figure>
                            <img src={`${import.meta.env.BASE_URL}componentdiag.png`} alt="component diagram"/>
                            <figcaption>Figure 2.1.2: Component Diagram outlining a 3-Tiered Server Architecture. Each major component: frontend, backend, and database are seperated
                                into various tiers (Presentation, Logic, and Database respectively).
                            </figcaption>
                        </figure>

                        <p>
                            Having the component diagram created, I was able to validate that my architectural decisions were feasible before development began which was imporant when meeting
                            with my expert who I consulted with early on. Sequentially, when development did begin, it incredibly useful to reference early on, especially considering that 
                            this is my first large scale solo project where I am developing in a 3-tiered system. Also, since there were so many moving parts during the project it was easy for me to
                            sidetrack on to various other parts of the project so having an overview of each component, but more specifically the backend, allowed me to re-orient myself so that I could
                            understand what each module was doing.
                        </p>

                        <p>
                            While the component diagram focused on the technical structure of the system, I also needed a way to model the user's interactions with the application. To 
                            accomplish this, I created a use case diagram.
                        </p>

                        <h3>Use Case Diagram</h3>

                        <p>
                            In contrast to my component diagram, my use case diagram provided validation and justification for the key user interactions in the system. I needed a way to reference
                            and outline how my users were going to use the system at a very high level. An abstraction was all I needed here, key requirements were to be detailed and refined later
                            in a separate document/artifact.
                        </p>

                        <figure>
                            <img src={`${import.meta.env.BASE_URL}usecasediag.png`} alt="use case diagram"/>
                            <figcaption>Figure 2.1.3: Use case diagram diagram.</figcaption>
                        </figure>

                        <p>
                            Designing the use case diagram proved helpful, implicitly, as it required me to think from the users perspective. Although it was not quite as useful as working 
                            with my target users directly, it did give me a rough idea of how I was going to implement the "core" requirements of my system that users would be using. Hence,
                            it was also helpful in the initial development work.
                        </p>
                    </div>
                </div>
            </AccordionItem>

            <AccordionItem title="Backend">
                <div className="devBackend">
                    <div className="backend-background">
                        <h2>Background</h2>
                        <p>
                            As far as the project's tech stack goes, I had many options to choose from. As a result, getting started on backend work was not as simple or straightforward as it
                            might seem at first. For the backend specifically I had narrowed my choices down to two options: Python and JavaScript. From my research and learnings, there was no
                            right or wrong choice as far as which to choose to support the server side of operations. JavaScript makes the most sense: one language to support both the frontend
                            and backend, however I decided to use Python instead. My justification? The frontend was already going to be JavaScript heavy and would provide me with a good amount 
                            of hands-on experience working with it, so I figured I'd switch it up. I was also confident that utilizing the FastAPI framework for supporting the system's API calls
                            would be more than sufficient for getting the results I wanted.
                        </p>
                    </div>

                    <div className="backend-getstarted">
                        <h2>Getting started</h2>
                        <p>
                            While my existing knowledge of Python syntax, libaries, and functions were not extensive, I felt that what I did know was enough to get started without any extensive
                            learning (also Python in general is very forgiving in comparison to other languages). I did however look into FastAPI documentation to learn about it's functionality
                             and it's underlying tools. Figure 2.2.1 provides a brief snippet of some of the endpoints used in my backend logic.
                        </p>

                        <figure>
                            <img src={`${import.meta.env.BASE_URL}endpoints.png`} alt="python code showing endpoints"/>
                            <figcaption>Figure 2.2.1: FastAPI endpoints in Visual Code</figcaption>
                        </figure>

                        <p>
                            Learning to use FastAPI was not overtly difficult, and mostly consisted of initial sandbox testing and slowly integrating my learnings into my eventual backend
                            codebase. I was very pleased with the native support for Swagger UI that FastAPI supports which provided a nice clean platform for testing the various endpoints
                            I created throughout initial development. As a result I did not use Postman or any other related platforms for my testing, and all testing was done locally on my
                            computer.
                        </p>

                        <figure>
                            <img src={`${import.meta.env.BASE_URL}swagger.png`} alt="swagger ui snippet"/>
                            <figcaption>Figure 2.2.2: One of the Anchor endpoints in Swagger UI which I heavily utilized in early development and testing of the backend</figcaption>
                        </figure>
                    </div>

                    <div className="backend-database">
                        <h2>Database</h2>

                        {/* Talk about rationale for using PostgreSQL, using Supabase as a provider, schema, etc. */}

                        <p>
                            I mentioned in the overview of my Design that I had benefitted from taking CSS370 the quarter prior. Similarly I also reaped the benfits of taking a databases 
                            class, CSS 475, last quarter. While I did learn a lot as far as database theory goes and creating relational databases from scratch, I unfortunately did not get
                            the experience of actually working in a development. Regardless, the knowledge I learned proved useful, especially in the actual conception of my database. As
                            such creating the schema was relatively straightforward. I listed all data points from a "theoretical form" I had created which consisted of all the entities
                            that would make up the data in my system. From there I used Logical Data Modeling, utilizing Normalization, to build the ERD.
                        </p>

                        <figure>
                            <img src={`${import.meta.env.BASE_URL}ldm.png`} alt="logical data model in text form"/>
                            <figcaption>Figure 2.2.3: Initial LDM during database design</figcaption>
                        </figure>

                        <p>
                            It should also be noted however, that in the 1st quarter of my project, my database was not extensive. It could be argued on whether I actually needed a database
                            to support my application in its current state, however, like most of the justification I have already used: I wanted the experience that I did not get from my
                            databases class. I also plan to add onto my existing schema in the 2nd quarter as more features are later implemented.
                        </p>

                        <p>
                            Figure 2.2.4 provides a graphic of my database schema in its most recent state.
                        </p>

                        <figure>
                            <img src={`${import.meta.env.BASE_URL}schema.png`} alt="database schema"/>
                            <figcaption>Figure 2.2.4: Database schema</figcaption>
                        </figure>

                        <p>
                            As far as my options in choosing a database management, I didn't really have any specific requirements or preferences. I decided to build my database using
                            Postgres because of it's popularity and extensive documentation. Also, since I was using the SQLAlchemy python library for my backend, it made sense to Use
                            Postgres since it's fully supported with pretty minimal setup/configuration. My database is hosted using Supabase's free tier as it is sufficient for my needs.
                            Since my database is not overtly complex and does not need extensive tools outside of what is provided in Supabase's free tier.
                        </p>
                    </div>

                    <div className="backend-auth">
                        <h2>Authentication</h2>

                        <p>JWT, using HttmlOnly cookies, pros/cons of choices</p>
                    </div>

                    <div className="backend-libaries">
                        <h2>Additional Libaries & Tools</h2>

                        <p>SQLAlchemy, Pydantic, Auth tools</p>

                    </div>
                </div>
            </AccordionItem>

            <AccordionItem title="Frontend">
                <div className="devFrontend">
                    <div className="frontend-background">
                        <h2>Background</h2>

                        <p>
                            Figuring out my frontend tech stack was less dramatic compared to decisions I had to make earlier in development. I had known from the very beginning that I wanted
                            the frontend to be supported using React. During the 1st Quarter of my capstone, I was concurrently taking a web dev class, CSS 481, which showed me the true power
                            of React: hooks and states. With this knowledge tucked away, I knew that learning React would take a little bit of adjusting to in contrast to the more traditional
                            logic/habits of standard web development (using HTML/CSS/Vanilla JS).
                        </p>

                    </div>

                    <div className="frontend-react">
                        <h2>Learning React</h2>

                        <p>
                            The biggest hurdle for me when I first started learning and working with React was adjusting my mentality to the idea of using "states". This was a completely
                            foreign idea/approach to programming that I hadn't encountered (more specifically, in the context of frontend development). It certaintly took some adjusting to
                            React's powerful rendering logic. However, with enough time and practice, things usually start to become natural and make more sense. 
                        </p>

                        <figure>
                            <img src={`${import.meta.env.BASE_URL}reactjscode.png`} alt="snippet of javascript code"/>
                            <figcaption>Figure 2.3.1: Login component in React</figcaption>
                        </figure>

                        <p>
                            Frontend development soon expanded beyond the usage of useState() function calls, with useContext becoming a very convenient web hook I extensively used for among
                            the majority of my components for sharing authenticated user data to simplify authentication logic.
                        </p>
                    </div>

                    <div className="frontend-styling">
                        <h2>Figuring out styling</h2>

                        <p>
                            Trying to come to a decision on how/what I would use to make my application presentable and aesthetically pleasing to user was probably the biggest dilema I faced
                            during my 1st Quarter of my project. I would be lying if I said that website styling is one of my stengths, however, I have always made it a point to get better at
                            improving my weaker areas. As a result, I strongly considered styling the entire website from scratch using vanilla CSS. I quickly came to the realization, that while
                            my ambitions were honest, pure, and well-intentioned, that this was not a feasible option. Just because myself, or anyone, can create a CSS file, does not necessarily 
                            mean that it will look good or appeal to a potentional user. Perhaps if I had the UI/UX skills in my toolbet this could have been a realistic option, however I threw
                            that idea out the window. Instead of trying to re-invent the wheel, I chose to implement Tailwind to help style my website. This in itself also had its own set of challenges
                            but no where near the scale that the other option would have overwhelmed me with.
                        </p>

                        <figure>
                            <img src={`${import.meta.env.BASE_URL}anchor-checkin.png`} alt="anchor check-in form"/>
                            <figcaption>Figure 2.4.1: Anchor Check-in Form</figcaption>
                        </figure>

                    </div>
                </div>
            </AccordionItem>

            <AccordionItem title="Next Steps">
                <div className="devConclusion">
                    <h2>What's in the works & Future plans</h2>

                    <h3>Current Priorities</h3>
                    <p>
                        My main focus as I wrap up the 1st quarter of my capstone project is to polish the current state of Anchor. This entails: logging-in, signing-up, creating a check-in,
                        and retrieving check-in history. For the most part my backend is in a state I am happy with and most of the remaining work I have is entirely on the frontend. I'd like
                        to tidy up the dashboard and start working on how the eventual structure will look like (as I later implement more features/quality of life things).
                    </p>

                    <h3>Future features</h3>
                    <ul>
                        <li>Recommendation system that will work parrallel to user check-ins</li>
                        <li>Creating/setting/tracking goals with full user customization.</li>
                        <li>Setting up email validation for new users</li>
                        <li>Email digests with weekly metric overviews</li>
                        <li>Implementing optional support contacts for users</li>
                        <li>Frontend support for multiple languages (English & Spanish)</li>
                    </ul>
                </div>
            </AccordionItem>
        </section>
    )
}