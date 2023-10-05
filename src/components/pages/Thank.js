import React from 'react';
import { Link } from 'react-router-dom';
import './Thank.css';

function Thank() {
    return (
        <div className="thank-container">
            <Link to='/' className="back-home-thank">
                <ion-icon name="arrow-back-outline"></ion-icon><h4>Back to home</h4>
            </Link>
            <div className="img-thank">

                <img src="images/free.png" alt="" />
                <div className="thank-text">
                    <h1>Thank You for Enrolling !</h1>
                    <p>Your enrollment has been successfully processed, and we can't wait to get started. Our team will be in touch with you shortly to provide you with all the necessary details, including your course schedule and any additional information you may need.</p>
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
    )
}

export default Thank