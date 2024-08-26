import React from 'react';

const Features = ({ features, heading, borderColor }) => {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen'>
			<h2 className='text-faqTitle font-bold text-center text-5xl w-1/2 mb-10'>
				{heading}
			</h2>
			<div className='flex justify-center w-full px-10'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mx-20'>
					{features
						.filter(feature => feature.id >= 1 && feature.id <= 3) // Filter only features with id 1 to 3
						.map(feature => (
							<div
								key={feature.id}
								className={`bg-white border-2 border-dashed rounded-3xl flex flex-col items-center text-center w-80 h-80 pt-10 mt-20 ${borderColor}`}
							>
								<img src={feature.logo} alt={`${feature.title} logo`} className='w-40 h-40 mb-4' />
								<h3 className='text-xl font-bold text-gray-800 w-5/6'>{feature.title}</h3>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Features;