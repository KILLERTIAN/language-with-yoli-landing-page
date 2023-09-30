import React from 'react';

import './About.css';
// import VideoBCS from '../videos/Homepageintro.mp4';

function About() {
    return (
        // <div>About</div>
        <>
            <div className="about-us-container">
                <div className="video-form">
                    {/* <div className="intro-video">
                        <video controls src={VideoBCS
                        } loop />
                    </div> */}
                    <div className="input-form">
                        <label htmlFor="">Enter your Name</label>
                        <input type="text" placeholder='Enter your Name' />
                        <label htmlFor="">Enter your E-mail</label>
                        <input type="email" placeholder='Enter your E-mail' />
                        <label htmlFor="">Enter you Number</label>
                        <input type="number" placeholder='Enter your Number' />
                        <label htmlFor="">Enter your Age</label>
                        <input type="number" placeholder='Enter your age' />

                        <button className="form-submit-button">Enroll</button>
                    </div>

                </div>


                {/* <div className="breaker-line">

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

                </div> */}
            </div>
        </>
    )
}

export default About