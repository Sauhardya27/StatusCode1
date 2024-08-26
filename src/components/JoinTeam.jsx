import React from 'react'
import { featureImg_4 } from '../assets'
import Footer from './Footer'

const JoinTeam = () => {
	return (
		<div>
			<div className="flex flex-row">
				<div className="w-3/4 flex flex-col items-start pr-40">
					<div className='items-center w-[60%] mx-auto'>
						<h2 className="text-faqTitle font-bold text-left text-5xl w-full mb-10">
							Join Our Team of Certified Health Experts
						</h2>
						<div className="w-full mt-2">
							<div className="mt-4">
								<h3 className="font-semibold text-base text-gray-500">Full Name<span className="text-red-500">*</span></h3>
								<input
									type="name"
									placeholder="Enter your full name"
									className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#846DA2] bg-white"
								/>
							</div>

							<div className="mt-4">
								<h3 className="font-semibold text-base text-gray-500">Email<span className="text-red-500">*</span></h3>
								<input
									type="email"
									className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#846DA2] bg-white"
								/>
							</div>

							<div className="mt-4">
								<h3 className="font-semibold text-base text-gray-500">Gender<span className="text-red-500">*</span></h3>
								<input
									type="gender"
									className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#846DA2] bg-white"
								/>
							</div>

							<div className="mt-4">
								<h3 className="font-semibold text-base text-gray-500">Years Of Experience</h3>
								<input
									type="experience"
									className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#846DA2] bg-white"
								/>
							</div>

							<div className="mt-4">
								<h3 className="font-semibold text-base text-gray-500">Upload Certificate<span className="text-red-500">*</span></h3>
								<div className="flex items-center border border-dashed border-gray-300 rounded-lg p-2">
									<div className="flex items-center justify-center bg-blue-100 p-2 rounded-md">
										<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="50" height="50" rx="7" fill="#C5D8F1" />
											<path d="M32.25 31.9167H17.75V17.4167H32.25M32.25 15.9167H17.75C17.0133 15.9167 16.3061 16.2172 15.8261 16.6972C15.3461 17.1772 15.0458 17.8844 15.0458 18.6211V31.9167C15.0458 32.6533 15.3461 33.3606 15.8261 33.8406C16.3061 34.3206 17.0133 34.6208 17.75 34.6208H32.25C32.9867 34.6208 33.6939 34.3206 34.1739 33.8406C34.6539 33.3606 34.9542 32.6533 34.9542 31.9167V18.6211C34.9542 17.8844 34.6539 17.1772 34.1739 16.6972C33.6939 16.2172 32.9867 15.9167 32.25 15.9167ZM27.79 24.6475L24.8108 28.4825L22.6875 25.9259L19.7083 29.75H31.2917L27.79 24.6475Z" fill="#2C438A" />
										</svg>
									</div>

									<label className="flex-grow flex items-center justify-between ml-4">
										<input
											type="file"
											accept="image/*"
											className="hidden"
										/>
										<span className="flex-grow"></span>
										<button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md">Browse</button>
									</label>
								</div>
							</div>

							<div className="mt-4">
								<h3 className="font-semibold text-base text-gray-500">Upload Image</h3>
								<div className="flex items-center border border-dashed border-gray-300 rounded-lg p-2">
									<div className="flex items-center justify-center bg-blue-100 p-2 rounded-md">
										<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect width="50" height="50" rx="7" fill="#C5D8F1" />
											<path d="M32.25 31.9167H17.75V17.4167H32.25M32.25 15.9167H17.75C17.0133 15.9167 16.3061 16.2172 15.8261 16.6972C15.3461 17.1772 15.0458 17.8844 15.0458 18.6211V31.9167C15.0458 32.6533 15.3461 33.3606 15.8261 33.8406C16.3061 34.3206 17.0133 34.6208 17.75 34.6208H32.25C32.9867 34.6208 33.6939 34.3206 34.1739 33.8406C34.6539 33.3606 34.9542 32.6533 34.9542 31.9167V18.6211C34.9542 17.8844 34.6539 17.1772 34.1739 16.6972C33.6939 16.2172 32.9867 15.9167 32.25 15.9167ZM27.79 24.6475L24.8108 28.4825L22.6875 25.9259L19.7083 29.75H31.2917L27.79 24.6475Z" fill="#2C438A" />
										</svg>
									</div>

									<label className="flex-grow flex items-center justify-between ml-4">
										<input
											type="file"
											accept="image/*"
											className="hidden"
										/>
										<span className="flex-grow"></span>
										<button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md">Browse</button>
									</label>
								</div>
							</div>

							<div className="mt-4">
								<h3 className="font-semibold text-base text-gray-500">Bio</h3>
								<textarea
									className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#846DA2] bg-white"
									rows="10" // Adjust the number of rows as needed
								></textarea>
							</div>

							<button className='bg-[#2C438A] px-20 py-4 rounded-full my-10 text-white font-medium' type="submit">Submit</button>
						</div>
					</div>
				</div>
				<div className="w-1/4 flex justify-center relative right-20 bottom-60">
					<img src={featureImg_4} alt="signup-img" className="w-[30rem]" />
				</div>
			</div>

			<Footer />
		</div>
	)
}

export default JoinTeam