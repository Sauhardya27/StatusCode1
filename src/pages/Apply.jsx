import React from 'react';
import ApplyHero from '../components/ApplyHero';
import Features from '../components/Features';
import { features2 } from '../constants';
import Footer from '../components/Footer';

const Apply = () => {
	return (
		<>
			<ApplyHero />
			<Features
				features={features2}
				heading="Steps To Get Hired As an Expert"
				borderColor="border-[#5B88C5]" />
			<Footer />
		</>
	)
}

export default Apply