import React from 'react';
import './WhyUs.css';
import VideoBCS from '../videos/Homepageintro.mp4';


function WhyUs() {
    return (
        <div className='whyus-container'>

            <div className="question-whyus-video">
                <div className="question-whyus">
                    <h2>Why <span>Us?</span></h2>
                    <p>Language with Yoli offers lessons that help students learn Spanish in a fun & easy way. Our teachers are native speakers and certified educators.
                        <br />
                        We teach students of different ages, degrees, and cultural backgrounds with the goal of learning this language to use in everyday life. </p>
                </div>
                <div className="intro-video">
                    <video controls src={VideoBCS
                    } loop />
                </div>
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
            <h1 className='our-courses'>Our <span>Courses</span></h1>
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
            </div>
        </div>

    )
}

export default WhyUs