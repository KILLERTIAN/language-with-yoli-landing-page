import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
// import VideoBCS from '../videos/Homepageintro.mp4';

function About() {

    const [user, setUser] = useState(
        {
            Name: '', Email: '', Number: '', Course: '', Timing: ''
        }
    )
    let name, value
    console.log(user)
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value });

    }

    return (
        // <div>About</div>
        <>
            <div className="about-us-container">
                <Link to='/' className="back-home">
                    <ion-icon name="arrow-back-outline"></ion-icon><h4>Back to home</h4>
                </Link>
                <div className="video-form">
                    <div className="vector">
                        <h1>Take the <span>First</span> Step <br /> Register for <span>Spanish</span>  Classes</h1>
                        <img src="images/free.png" alt="" />
                    </div>
                    <div className="input-form">
                        <label htmlFor="">Enter your Name</label>

                        <input type="text" placeholder='Enter your Name' name='Name' value={user.Name} required onChange={data} />

                        <label htmlFor="">Enter your E-mail</label>

                        <input type="email" placeholder='Enter your E-mail' name='Email' value={user.Email} required onChange={data} />

                        <label htmlFor="">Enter your Phone Number</label>

                        {/* <input type="text" placeholder='Enter your Phone Number' name='Phone Number' value={user.Number} required onChange={data} /> */}
                        <input type="number" placeholder='Enter your Phone Number' name='Number' value={user.Number} required onChange={data} />


                        <label htmlFor="">Select your Course</label>

                        <div className="select-course">
                            <input className='course-checkbox' type="checkbox" name='Course' value={user.Course} />
                            <label htmlFor="">Kids(3-10)</label>
                            <input className='course-checkbox' type="checkbox" name='Course' />
                            <label htmlFor="">Teens(11-18)</label>
                            <input className='course-checkbox' type="checkbox" name='Course' />
                            <label htmlFor="">Adults(19+)</label>
                        </div>
                        <label htmlFor="">Select your Timing</label>
                        <div className="select-timing">
                            <input className='course-checkbox' type="checkbox" name='Timing' />
                            <label htmlFor="">Morning</label>
                            <input className='course-checkbox' type="checkbox" name='Timing' />
                            <label htmlFor="">Afternoon</label>
                            <input className='course-checkbox' type="checkbox" name='Timing' />
                            <label htmlFor="">Evening</label>
                        </div>

                        <button className="form-submit-button">Enroll</button>
                    </div>


                </div>
                <div className="free-contact">

                    <div className="contact-wrapper">
                        <h1>Any Questions? <span>Contact Us </span>here</h1>
                        <div className="free-contact-block">
                            <img src="images/whatsapp.png" alt="" />
                            + 1 (516) 732-6794
                        </div>
                        <div className="free-contact-block">
                            <img src="images/gmail.png" alt="" />
                            info@languagewithyoli.com
                        </div>
                    </div>
                    <img className='contact-free-img' src="images/free-contact.png" alt="" />


                </div>


                {/* <div className="breaker-line">

                </div>
                <h1 className='value-heading'>Online <span>1 to 1 Spanish</span> Lessons</h1>
                <div className="value-points">

                    <div className="points">
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Virtual Online 24/7</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Personalized onChange={data}Lesson Plans</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>For All School Grades</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Children or Adults</div>
                    </div>
                    <div className="points">
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Private or Group Lessons</div>
                        <div className="img-point"><ion-icon name="checkmark-sharp"></ion-icon>Organized onChange={data}& Dedicated onChange={data}Teachers</div>
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