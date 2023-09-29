import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
// import VideoBCS from './videos/Homepageintro.mp4';


function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video controls src={VideoBCS
            } autoPlay loop muted /> */}

            <img src="images/about-us-cover-1.jpg" alt="" />
            <div className="hero-gradient"></div>
            <div className="hero-text">
                <h1>
                    <span>Unlock Your </span>Potential<br />
                    Learn Spanish the Right Way with <span1>Yoli</span1></h1>
                <p><span2>Get a 1 to 1 Free Trial Lesson now </span2></p>
                <Link to="/free-trial" className='hero-free-trial-button'><button>Free Trial</button></Link>
            </div>



        </div>

    );
}

export default HeroSection;