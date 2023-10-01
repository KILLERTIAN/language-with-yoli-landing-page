import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';
// import VideoBCS from './videos/Homepageintro.mp4';


function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video controls src={VideoBCS
            } autoPlay loop muted /> */}

            <img src="images/Landing-page-cover-2.png" alt="" />
            <div className="hero-gradient"></div>
            <div className="hero-text">
                <h1>Spanish Lessons for
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