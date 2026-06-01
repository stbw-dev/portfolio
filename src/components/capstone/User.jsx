import { HashLink } from "react-router-hash-link"
import "./User.css"
// user's perspective

export default function User() {
    return (
        <section className="userMain">
            <HashLink smooth to="#root" className="back-top">Back to top</HashLink>

            <h1>User's Perspective.</h1>

            <div id="what">
                <h2>What is it?</h2>
                <p>
                    This capstone project, which has been titled "Anchor", is an emotional wellness application with an emphasis on privacy and personalization. Rather than feeling like
                    a statistic, Anchor puts you at the forefront, and tailors itself to your needs so that you can feel more like you. Anchor is not meant to diagnose diseases, replace
                    therapy, or solve any problem. Rather Anchor is a tool to help you gain insight on your wellness habits by giving you a deeper understanding through charts and other
                    models.
                </p>
            </div>

            <div id="why">
                <h2>Why use it?</h2>
                <p>
                    Anchor was created to provide a simple and approachable way to reflect on your emotional well-being without requiring length journaling or complicated tracking systems.
                    Simplicity is a core priniciple of the application. It's also designed for those who may or may not journal in some way, providing a quick and easy way to get started.
                    Anchor gives you that extra little nudge when you need it so that you can do the things that you enjoy most.
                </p>
            </div>

            <div id="how">
                <h2>How does it work?</h2>
                <p>
                    The core of Anchor consists of daily logs, with direct feedback via personalized recommendations based on how you feel. It is also designed for praticality, and ease of
                    use because your time is important. In order to ensure that the application isn't cumbersome, check-ins are designed to be completed quickly.
                </p>
                <p>
                    Anchor will also support goal tracking, with customaizable settings, whether you want to track in the long-term or the short-term. Anchor helps you to be accountable, based on
                    your terms. You set the milestone dates and Anchor will peridiocally check in with you to see how you're goals are going. Falling behind? Ahead of schedule? Anchor 
                    will help you by adjusting your timeline accordingly. It's not about how fast you get there, but how you finish.
                </p>
            </div>
        </section>
    )
}