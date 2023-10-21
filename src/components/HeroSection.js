// import React from 'react';
import React, { useEffect } from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
// import VideoBCS from './videos/Homepageintro.mp4';


function HeroSection() {
    useEffect(() => {
        // Google Ads conversion tracking code
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11361542699';
        script.async = true;

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'AW-11361542699');
        };

        document.head.appendChild(script);
        return () => {
            // Clean up if needed
            document.head.removeChild(script);
        };
    }, []);
    return (
        <div className='hero-container'>
            {/* <video controls src={VideoBCS
            } autoPlay loop muted /> */}

            <img src="images/Landing-page-cover-2.png" alt="" />
            <div className="hero-gradient"></div>
            <div className="hero-text">
                <h1><span1>Online</span1> Spanish  Lessons for <br />
                    <span> All Age Groups</span><br />
                    <Typed
                        strings={[
                            'Explore',
                            'Discover',
                            'Grow']}
                        typeSpeed={150}
                        backSpeed={100}
                        loop >
                    </Typed>
                </h1>
                <p><span2>Get a 1 Hour Free Trial Lesson now </span2></p>
                <Link to="/register" className='hero-free-trial-button'><button>Free Trial</button></Link>
            </div>



        </div>

    );
}

export default HeroSection;