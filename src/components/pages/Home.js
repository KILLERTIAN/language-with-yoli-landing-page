import React, { useEffect } from 'react';
import HeroSection from '../HeroSection';
import WhyUs from './WhyUs';


function Home() {
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
        <>
            <HeroSection />
            <WhyUs />
        </>
    )
}

export default Home