import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './About.css';
// import VideoBCS from '../videos/Homepageintro.mp4';

function About() {
    const navigate = useNavigate();

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

    };
    //Connect with firebase
    const submitData = async (e) => {
        e.preventDefault();

        if (!user.Name || !user.Email || !user.Number || !user.Course || !user.Timing) {
            alert("Please fill out all fields.");
            return; // Prevent form submission
        }

        const {
            Name, Email, Number, Course, Timing
        } = user;
        const res = await
            fetch("https://language-with-yoli-lp-default-rtdb.firebaseio.com/userDataRecords.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Name, Email, Number, Course, Timing
                })
            });
        if (res) {
            setUser({
                Name: '', Email: '', Number: '', Course: '', Timing: ''
            })
            navigate('/thank-you');
        } else {
            alert("FILL all fields")
        };
    }

    return (
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
                            <input className='course-checkbox' type="radio" name='Course' value="Kids" checked={user.Course === "Kids"} onChange={data} />
                            <label htmlFor="">Kids <span>(3-10)</span></label>
                            <input className='course-checkbox' type="radio" name='Course' value="Teens" checked={user.Course === "Teens"} onChange={data} />
                            <label htmlFor="">Teens <span>(11-18)</span></label>
                            <input className='course-checkbox' type="radio" name='Course' value="Adults" checked={user.Course === "Adults"} onChange={data} />
                            <label htmlFor="">Adults <span>(19+)</span></label>
                        </div>
                        <label htmlFor="">Select your Timing</label>
                        <div className="select-timing">
                            <input className='course-checkbox' type="radio" name='Timing' value="Morning" checked={user.Timing === "Morning"} onChange={data} />
                            <label htmlFor="">Morning</label>
                            <input className='course-checkbox' type="radio" name='Timing' value="Afternoon" checked={user.Timing === "Afternoon"} onChange={data} />
                            <label htmlFor="">Afternoon</label>
                            <input className='course-checkbox' type="radio" name='Timing' value="Evening" checked={user.Timing === "Evening"} onChange={data} />
                            <label htmlFor="">Evening</label>
                        </div>

                        <button className="form-submit-button" onClick={submitData}>Enroll</button>
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
            </div>
        </>
    )
}

export default About;