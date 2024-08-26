import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { faqImage } from '../assets';
import { faqItems } from '../constants';

export default function FAQ() {
	const defaultContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

	return (
		<div className='my-20'>
			<h2 className='text-faqTitle font-bold text-center text-5xl'>Got Questions?</h2>
			<div className='flex flex-row items-center justify-center mt-20'>
				<Accordion variant="splitted" className='w-3/4'>
					{faqItems.map(item => (
						<AccordionItem
							key={item.id}
							aria-label={item.title}
							title={item.title}
							className='bg-faqColor'
						>
							{item.description}
						</AccordionItem>
					))}
				</Accordion>
				<img src={faqImage} className='w-60' alt="faq-image" />
			</div>
		</div>
	);
}