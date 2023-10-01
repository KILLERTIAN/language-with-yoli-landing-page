import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isActive, setIsActive] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const handleClick = () => setClick(!click);
    const handleClicks = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    //NAV show or hide 
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);


    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">

                    <Link to='/' className='Navbar-logo' ><img src="images/Language-with-yoli-logo.png" /></Link>
                    {/* <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? '<ion-icon name="close"></ion-icon>' : '<ion-icon name="menu"></ion-icon>'} />
                    </div> */}

                    {/* <a href="#" className='nav-free-trial-button'><button>Free Trial</button></a> */}
                </div>
            </nav >
        </>
    );




}

export default Navbar;