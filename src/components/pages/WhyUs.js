import React from 'react';
import './WhyUs.css';
// import VideoBCS from '../videos/Homepageintro.mp4';


function WhyUs() {
    return (
        <div className='whyus-container'>
            <div className="our-tutors">
                <ul>
                    <li><span>20+</span> Years of Teaching Experience</li>
                    <li><span>400+</span> Students Taught Over Years</li>
                    <li><span>6+</span>Teaching Awards</li>
                </ul>
            </div>
            <div className="course-cards">
                <div className="course-card">
                    {/* <img src="images/teacher.png" alt="" /> */}
                    <h2>KIDS</h2>
                    <ul>
                        <li>Flexible Schedule</li>
                        <li>Personalized Lesson Plans</li>
                        <li>Fun & Easy Way to Learn</li>
                    </ul>
                    <button>Learn more</button></div>

                <div className="course-card">
                    {/* <img src="images/exam.png" alt="" /> */}
                    <h2>Teens</h2><ul>
                        <li>100% Guaranteed Improved Test Scores</li>
                        <li>SAT/FLACS Test Prep</li>
                        <li>Conversational Spanish Skills</li>
                    </ul>
                    <button>Learn more</button></div>

                <div className="course-card">
                    {/* <img src="images/efficiency.png" alt="" /> */}
                    <h2>Adults</h2>
                    <ul>
                        <li>Learn At Your Own Pace</li>
                        <li>Tailored to your Needs & Schedule</li>
                        <li>Spanish for Travel or Live Abroad</li>
                    </ul>
                    <button>Learn more</button></div>
            </div>
            <div className="question-whyus-video">
                <div className="question-whyus">
                    <h2>Why <span>Us?</span></h2>
                    <p>Language with Yoli offers lessons that help students learn Spanish in a fun & easy way. Our teachers are native speakers and certified educators.
                        <br />
                        We teach students of different ages, degrees, and cultural backgrounds with the goal of learning this language to use in everyday life. </p>
                </div>
                {/* <div className="intro-video">
                    <video controls src={VideoBCS
                    } loop />
                </div> */}
            </div>

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
            <div className="why-us-cards">
                <div className="why-us-card">
                    <img src="images/teacher.png" alt="" />
                    <h2>Skilled Teachers</h2><p>Our tutors are native speakers, fully-certified and have many years of experience in teaching.</p></div>
                <div className="why-us-card">
                    <img src="images/exam.png" alt="" />
                    <h2>Improved Test Scores</h2><p>Language with Yoli guarantees better test scores or extra lessons will be provided!</p></div>
                <div className="why-us-card">
                    <img src="images/efficiency.png" alt="" />
                    <h2>Efficient and Flexible</h2><p>Online learning benefits students as it gives them the ability to learn remotely without the hassle of commuting.</p></div>
            </div>
            {/* <h1 className='our-courses'>Our <span>Courses</span></h1>
            <div className="cource_all">

                <div className="course_all-card">
                    <h2>Kids</h2>
                    <img src="images/kids-card.jpg" alt="" />
                    <button className="course_all-button">Enroll Now</button>
                </div>
                <div className="course_all-card">
                    <h2>Teens</h2>
                    <img src="images/teen-card.jpg" alt="" />
                    <button className="course_all-button">Enroll Now</button>
                </div>
                <div className="course_all-card">
                    <h2>Adults</h2>
                    <img src="images/adult-card.jpg" alt="" />
                    <button className="course_all-button">Enroll Now</button>
                </div>
            </div> */}

        </div>

    )
}

export default WhyUs