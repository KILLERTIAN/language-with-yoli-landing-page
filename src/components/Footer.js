import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-organiser">
                <section className='footer-subscription'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src="images/Language-with-yoli-logo.png" />
                        </Link>
                    </div>
                    {/* <p className='footer-subscription-heading'>
                        Join the
                        <span>  Newsletter</span>
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input
                                className='footer-input'
                                name='email'
                                type='email'
                                placeholder='Your Email'
                            />
                            <button className='footer-submit-button'>Submit</button>
                        </form>
                    </div> */}
                </section>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>FAQ's</Link>
                            <Link to='/'>Our Tutors</Link>
                            {/* <Link to='/about'>Terms of Service</Link> */}

                        </div>
                        <div class='footer-link-items'>
                            <h2>Courses</h2>
                            <Link to='/'>Kids</Link>
                            <Link to='/'>Teens</Link>
                            <Link to='/'>Adults</Link>
                            <Link to='/'>Free Trials</Link>
                        </div>

                    </div>
                    <div className='footer-link-wrapper-2'>

                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Whatsapp</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/sign-up'>+ 1 (516) 732-6794</Link>
                            <Link to='/sign-up'>info@languagewithyoli.com</Link>

                        </div>
                    </div>
                </div>
            </div>

            <section class='social-media'>
                <div class='social-media-wrap'>

                    <small clasn='website-rights'>© 2023 Language With Yoli</small>
                    <div class='social-icons'>
                        <Link
                            className='social-icon-link-facebook'
                            to='https://www.facebook.com/languagewithyoli/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <img src="images/facebook.png" alt="" />
                            {/* <ion-icon name="logo-facebook"></ion-icon> */}
                        </Link>
                        <Link
                            className='social-icon-link-instagram'
                            to='https://www.instagram.com/languagewithyoli/?hl=en'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <img src="images/instagram.png" alt="" />
                            {/* <ion-icon name="logo-instagram"></ion-icon> */}
                        </Link>
                        <Link
                            className='social-icon-link-youtube'
                            to='https://www.youtube.com/@languagewithyoli'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <ion-icon name="logo-youtube"></ion-icon>
                        </Link>
                        <Link
                            className='social-icon-link-whatsapp'
                            to='https://api.whatsapp.com/send/?phone=15167326794&text&type=phone_number&app_absent=0'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <img src="images/whatsapp.png" alt="" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;