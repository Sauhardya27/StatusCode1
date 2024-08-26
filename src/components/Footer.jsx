import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { footerLinks } from "../constants";
import { logo } from '../assets';

const Footer = () => {
	return (
		<footer className="bg-gray-200 flex justify-center items-center sm:py-16 py-6 flex-col px-8">
			<div className="md:flex-row flex-col sm:mb-4 sm:-mt-8 w-full">
				<div className="flex flex-1 flex-col justify-start mr-6"> {/* Reduced margin-right */}
					<div className='flex mb-1 gap-6'>
						<img src={logo} alt="logo" />
						<Link to="/" className="text-2xl font-bold flex items-center text-[#2C438A]">
							Healthalign
						</Link>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-row justify-between flex-wrap md:mt-0 mt-6 mb-8">
				<div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
					<div className="flex mt-6 space-x-4"> {/* Reduced space-x from 6 to 4 */}
						<a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
							<FaFacebook size={28} />
						</a>
						<a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
							<FaInstagram size={28} />
						</a>
						<a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
							<FaTwitter size={28} />
						</a>
						<a href="#" className="text-gray-800 hover:text-blue-600 transition-colors duration-300">
							<FaLinkedin size={28} />
						</a>
					</div>
				</div>

				<div className='flex flex-row space-x-10'>
					{footerLinks.map((footerLink) => (
						<div key={footerLink.id} className="flex flex-col ss:my-0 my-4 min-w-[150px] -ml-10"> {/* Used footerLink.id as key */}
							<ul className="list-none mt-4">
								{footerLink.links.map((link, index) => (
									<li
										key={`${footerLink.id}-${link.name}`} // Combined footerLink.id and link.name for a unique key
										className={`font-poppins font-medium text-[16px] leading-[24px] text-dimWhite hover:text-purple cursor-pointer text-center ${index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
											}`}
									>
										{link.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="w-full flex flex-col sm:flex-row justify-between items-center pt-6 border-t-[1px] border-t-[#3f3e45] -mb-4">
				<p className="font-normal text-center text-[14px] sm:text-[16px] text-black mx-4 sm:mx-0">
					Copyright Ⓒ 2024 Healthalign. All Rights Reserved.
				</p>
				<div className="flex flex-col sm:flex-row gap-2 sm:space-x-4 mt-2 sm:mt-0 items-center">
					<Link to="/privacypolicy" className="hover:underline text-[14px] sm:text-[16px]">
						Privacy Policy
					</Link>
					<Link to="/terms" className="hover:underline text-[14px] sm:text-[16px]">
						Terms of Service
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;