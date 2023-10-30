import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Thank.css';

function Thank() {
    useEffect(() => {
        // Google Ads conversion tracking code
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-27M0V6EVDC';
        script.async = true;

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-27M0V6EVDC');
        };

        document.head.appendChild(script);


    }, []);
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
                    <h1>Queries? <span>Contact Us </span>here</h1>
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