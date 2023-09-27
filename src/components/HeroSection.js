import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
// import VideoBCS from './videos/Homepageintro.mp4';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video controls src={VideoBCS
            } autoPlay loop muted /> */}

            <img src="images/about-us-cover-1.jpg" alt="" />
            <div className="hero-gradient"></div>
            <div className="hero-text">
                <h1><span>Unlock Your Potential</span>
                    <br /> Learn Spanish the Right Way with <span1>Yoli</span1></h1>
                <p><span>Try a one hour 1 to 1 class for free now </span></p>
            </div>

            <a href="#" className='hero-free-trial-button'><button>Free Trial</button></a>

        </div>

    );
}

export default HeroSection;