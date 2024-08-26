import React from 'react';
import { useNavigate } from 'react-router-dom';
import { applyDoctor } from '../assets';
import { arrow } from '../assets';

const ApplyHero = () => {
	const navigate = useNavigate();

	const handleJoinNowClick = () => {
		navigate('/join-team');
	};
	return (
		<section className="relative overflow-hidden min-h-[600px] mx-10 sm:mx-6 lg:mx-8 py-10 px-6 bg-gradient-to-b from-[#3D6FB4] to-[#92BDF6] shadow-md rounded-3xl mb-10">
			{/* Heading Section */}
			<div className="absolute top-8 right-1/2 pl-14">
				<h1 className="text-9xl md:text-9xl font-bold text-left text-white w-[110%]">Are you an Expert ?</h1>
			</div>

			<div className="flex space-x-6">

				<div className="absolute bottom-0 left-[40%] flex flex-col items-center space-y-4 ">
					{/* Doctor Image */}
					<img src={applyDoctor} alt="Doctor" className="w-full max-w-[200px] md:max-w-[250px] lg:max-w-[550px]" />
				</div>
			</div>

			{/* Text Section (Bottom Left) */}
			<div className="absolute bottom-24 left-8 md:left-16 space-y-4">
				<h6 className="text-lg md:text-xl text-white w-[30%]">
					Discover Your Health Condition
					with Our AI powered Quiz and take advantage to diagnose your health condition and receive personalized recommendations.
				</h6>
			</div>

			{/*take quiz*/}

			<div className="absolute bottom-8 right-8 md:right-16 space-y-4">
				<div className="flex items-center mb-4">
					<button onClick={handleJoinNowClick} className="bg-white text-[#444444] px-5 py-2 rounded-full transform hover:scale-110 h-12 transition flex flex-row gap-4 items-center">Join Now
						<img src={arrow} alt="Book A Consultancy" className="h-6 w-6" />
					</button>
				</div>
			</div>
		</section>
	);
};

export default ApplyHero;
