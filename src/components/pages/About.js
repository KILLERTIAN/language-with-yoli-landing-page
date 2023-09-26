import React from 'react';

import './About.css'

function About() {
    return (
        // <div>About</div>
        <>
            <div className="about-us-container">
                <div className="about-us-cover">
                    <img src="images/about-us-cover-1.jpg" alt="" />
                </div>
                <div className="about-us-heading">
                    <h1>About <span>Us</span></h1>
                    <p className="about-description">
                        Language with Yoli offers lessons that help students learn Spanish in a fun & easy way. Our teachers are native speakers and certified educators.
                        <br /><br />
                        We teach students of different ages, degrees, and cultural backgrounds with the goal of learning this language to use in everyday life.
                        {/* Language With Yoli is your gateway to mastering Spanish with confidence. Founded by Yoli, a passionate linguist and educator, our brand is dedicated to making language learning enjoyable and effective. We offer dynamic Spanish classes that cater to all levels, from beginners to advanced learners. */}
                        {/* <br /><br />Our personalized approach ensures that you'll not only learn the language but also embrace the culture. Join us on a linguistic adventure and unlock the beauty of the Spanish language with Language With Yoli. */}
                        <br />


                    </p>
                    <div className="button-border"><button className="hero-trial-button">Free Trial</button></div>
                </div>
                <div className="breaker-line">

                </div>
                <div className="about-us-cards">
                    <div className="about-us-card">
                        <img src="images/teacher.png" alt="" />
                        <h2>Skilled Teachers</h2><p>Our tutors are native speakers, fully-certified and have many years of experience in teaching.</p></div>
                    <div className="about-us-card">
                        <img src="images/exam.png" alt="" />
                        <h2>Improved Test Scores</h2><p>Language with Yoli guarantees better test scores or extra lessons will be provided!</p></div>
                    <div className="about-us-card">
                        <img src="images/efficiency.png" alt="" />
                        <h2>Efficient and Flexible</h2><p>Online learning benefits students as it gives them the ability to learn remotely without the hassle of commuting. This allows the student to focus more on learning and the language.</p></div>
                </div>
                <div className="breaker-line">

                </div>
                <h1 className='value-heading'>Online <span>1 to 1 Spanish</span> Lessons</h1>
                <div className="value-points">

                    <div className="points">
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Virtual Online 24/7</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Personalized Lesson Plans</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>For All School Grades</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Children or Adults</div>
                    </div>
                    <div className="points">
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Private or Group Lessons</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Organized & Dedicated Teachers</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Fun, Easy & Creative</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Continuous Improvement</div>
                    </div>
                </div>
                <div className="breaker-line">

                </div>
                <div className="our-tutors">

                </div>
            </div>
        </>
    )
}

export default About