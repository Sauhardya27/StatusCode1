import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Guide from '../components/Guide';
import Features from '../components/Features';
import Aim from '../components/Aim';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { features1 } from '../constants';

const Home = () => {
	const aimRef = useRef(null);  // Create a ref for the Aim section
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about' && aimRef.current) {
            aimRef.current.scrollIntoView({ behavior: 'smooth' });  // Scroll to the Aim section
        }
    }, [location]);

	return (
		<>
			<Hero />
			<Guide />
			<Features
				features={features1}
				heading="Why Our Health App is a Game Changer"
				borderColor="border-[#D7D7D7]" />
			<div ref={aimRef}>
                <Aim />
            </div>
			<Testimonials />
			<FAQ />
			<Footer />
		</>
	);
};

export default Home;