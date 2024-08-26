import React from 'react';
import { signupImg } from '../assets';
import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/react";

const Signup = ({ isOpen, onClose }) => {
	return (
		<Modal isOpen={isOpen} onOpenChange={onClose}>
			<ModalContent className="max-w-4xl mx-auto py-8">
				<>
					<ModalBody>
						<div className="flex flex-row items-center w-full mx-auto">
							<div className="w-1/2">
								<img src={signupImg} alt="signup-img" className="w-full" />
							</div>
							<div className="w-1/2 pl-6"> {/* Reduced padding */}
								<h2 className="text-faqTitle font-bold text-2xl mb-3">Sign Up</h2> {/* Reduced font size and margin */}
								<p className="font-medium -mt-1 mb-4">Please enter your email and set a password</p> {/* Reduced margin */}

								<div className="mt-4"> {/* Reduced margin */}
									<h3 className="font-semibold text-base">Email</h3> {/* Reduced font size */}
									<input
										type="email"
										placeholder="Enter your email"
										className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#846DA2] bg-gray-100"
									/>
								</div>

								<div className="mt-3"> {/* Reduced margin */}
									<h3 className="font-semibold text-base">Password</h3> {/* Reduced font size */}
									<input
										type="password"
										className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#846DA2] bg-gray-100"
									/>
								</div>

								<div className="mt-3"> {/* Reduced margin */}
									<h3 className="font-semibold text-base">Confirm Password</h3> {/* Reduced font size */}
									<input
										type="password"
										className="mt-1 p-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-[#846DA2] bg-gray-100"
									/>
								</div>

								<div className='flex flex-col items-center mt-6 gap-2'> {/* Reduced margin */}
									<p className='text-gray-500 text-center text-sm w-3/4 font-medium'>By signing up, you agree to our
										Terms and Conditions & Privacy Policy</p>
									<button className='bg-[#876EA2] rounded-lg text-white font-bold px-36 py-2'>Sign Up</button> {/* Reduced padding */}
								</div>
							</div>
						</div>
					</ModalBody>

					<ModalFooter className='flex justify-center w-1/2 ml-auto'>
						<div className='flex flex-col items-center w-full gap-1'>
							<button>Have an account?<span className='text-red-500'> Login </span></button>
							<button>Are you an Expert?<span className='text-red-500'> Sign In </span></button>
						</div>
					</ModalFooter>
				</>
			</ModalContent>
		</Modal>
	);
};

export default Signup;