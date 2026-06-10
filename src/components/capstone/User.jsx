import { HashLink } from "react-router-hash-link"
import "./User.css"
// user's perspective

export default function User() {
    return (
        <section className="userMain">
            <HashLink smooth to="#root" className="back-top">Back to top</HashLink>

            <h1>Using Anchor</h1>

            <div className="content-card">
                <div id="what">
                    <h2>What is it?</h2>
                    <p>
                        Anchor is an emotional wellness app, built to be more than just a goal tracker, sleep aid, or an electronic journal. Rather than focusing on a specific niche, Anchor
                        was made to fill in the gap left by current apps on the market. In a sense, you could call it a jack of all trades. But more isn't always better, and it's for that 
                        reason that the goal isn't to incorporate every feature of existing wellness apps, but to polish the tools that can help you to manage your emotional awareness so that
                        you can build good habits.
                    </p>
                    <figure>
                        <img src="anchor3.png" alt="anchir logo"/>
                        <figcaption>Anchor Logo</figcaption>
                    </figure>
                </div>

                <div id="why">
                    <h2>Why use it?</h2>
                    <p>
                        It's quick, no-nonsense, and straight to the point. Your time is valuable and should be spent doing the things you enjoy doing, and it's for that reason that Anchor
                        was designed so that features, such as check-ins, are completeable within a minute. It's also simple to use, providing you with a clear dashboard with quick access to the
                        features Anchor offers. Lastly, your privacy is important. The information you provide to Anchor is confidential and will never be used outside of the application or shared
                        with any external parties.
                    </p>
                </div>

                <div id="how">
                    <h2>How does it work?</h2>

                    <h3>Check-ins</h3>
                    <p>
                        The core of Anchor consists of daily logs, with direct feedback via personalized recommendations based on how you feel. It is also designed for praticality, and ease of
                        use because your time is important. In order to ensure that the application isn't cumbersome, check-ins are designed to be completed quickly.</p>
                    <figure>
                        <img src="anchor-checkin.png" alt="anchor checkin"/>
                        <figcaption>Anchor Check-in Form (Work in progress)</figcaption>
                    </figure>
                    {/* <p>
                        Anchor will also support goal tracking, with customaizable settings, whether you want to track in the long-term or the short-term. Anchor helps you to be accountable, based on
                        your terms. You set the milestone dates and Anchor will peridiocally check in with you to see how you're goals are going. Falling behind? Ahead of schedule? Anchor 
                        will help you by adjusting your timeline accordingly. It's not about how fast you get there, but how you finish.
                    </p> */}

                    <h3>Goal tracking</h3>
                    <p>Anchor will support goal tracking, with customizable settings, so that you can tailor it to your specific needs.</p>
                    
                    <h3>Support Contacts</h3>
                    <p>
                        It can be hard to open up about how you're feeling, regardless if you're talking with a close friend or family. Anchor offers an optional, alternative solution: registering
                        a support contact. Your support contact will on your emotional wellness, based on your check-in data. You decide how much you want to share
                        and how often, so that you can have peace of mind that boundaries are not crossed.
                    </p>

                    <h3>Daily Digests</h3>
                    <p>
                        Anchor will also offer daily digests, providing you with an overview of your activties within the application over the week. They are insightful way to see how your
                        emotional habits have changed without having to directly acccess Anchor. Digests are optional and can be disabled based on your preferences.
                    </p>
                </div>
            </div>
        </section>
    )
}