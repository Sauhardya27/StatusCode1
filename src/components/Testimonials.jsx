import React from 'react';
import { cardDetails } from '../constants';

const Testimonials = () => {
	return (
		<div className='my-10'>
			<div className='flex flex-col justify-center items-center w-full gap-4'>
				<h2 className='text-faqTitle font-bold text-center text-5xl w-1/2'>Why Our Customers Love Healthalign</h2>
				<p className='text-md font-medium text-center'>Read what our customers have to say</p>
			</div>
			<div className="flex justify-center items-center w-full mt-10">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
					{cardDetails.map((card) => (
						<div key={card.id} className={`w-[400px] relative p-5 ${card.backBorderColor} border-4 rounded-lg`}>
							<div className={`absolute top-5 left-5 w-full h-full transform ${card.frontBorderColor} border-4 rounded-lg`}></div>
							<div className="relative flex flex-col w-full items-start top-5 left-5 rounded-lg text-center p-4">
								<div className="text-yellow-500 mb-4 flex justify-center w-full">
									<span>{'★'.repeat(card.rating)}</span>
								</div>
								<p className="text-gray-700 mb-4 text-left">{card.review}</p>
								<img src={card.avatar} className="w-12 h-12 rounded-full" alt="avatar" />
							</div>

						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Testimonials;