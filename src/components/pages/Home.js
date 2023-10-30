import React, { useEffect } from 'react';
import HeroSection from '../HeroSection';
import WhyUs from './WhyUs';


function Home() {
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
        <>
            <HeroSection />
            <WhyUs />
        </>
    )
}

export default Home