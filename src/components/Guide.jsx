import React from 'react';
import { guide } from '../constants';
import { guideArrow } from '../assets';

const Guide = () => {
	return (
		<div>
			<div className='flex flex-col items-center'>
				<h2 className='text-faqTitle font-bold text-center text-5xl mt-10 mb-20 w-1/2'>Your Health Journey Starts Here</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 mx-6  justify-items-center mb-10">
				{guide.map(item => (
					<div
						key={item.id}
						className={`${item.cardColor} rounded-3xl p-6 relative flex flex-col justify-between h-72 w-72`}
					>
						<div>
							<h2 className="text-white font-bold text-xl mb-4">{item.title}</h2>
							<p className="text-white">{item.description}</p>
						</div>
						<div>
							<a href="">
								<img src={guideArrow} alt="arrow" className="w-12 h-12" />
							</a>
						</div>
						<div className="absolute bottom-4 right-4">
							<img src={item.cardLogo} alt={`${item.title} logo`} className="w-28 h-28" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Guide;