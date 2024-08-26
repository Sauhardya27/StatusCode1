import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { logo } from '../assets';
import Signup from './Signup';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <nav className="bg-[#ECEAEA] top-0 z-50 rounded-2xl m-10 sm:m-6 lg:m-8 font-poppins">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-4">
                            <Link to="/" className="flex items-center text-gray-700 font-bold text-xl">
                                <img src={logo} alt='logo' className="h-10 w-10 mr-2" />
                            </Link>
                            <p className=' text-gray-700 font-bold text-xl'>HEALTHALIGN</p>
                        </div>
                        <div className="hidden md:flex space-x-8">
                            <Link to="/" className="text-gray-700 text-lg font-medium hover:text-gray-900">
                                Home
                            </Link>
                            <Link to="/about" className="text-gray-700 text-lg font-medium hover:text-gray-900">
                                About Us
                            </Link>
                            <Link to="/start-quiz" className="text-gray-700 text-lg font-medium hover:text-gray-900">
                                Start Quiz
                            </Link>
                            <Link to="/apply" className="text-gray-700 text-lg font-medium hover:text-gray-900">
                                Apply as an Expert
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={handleModalOpen}
                                className="bg-[#846DA2] text-white px-4 py-2 rounded-full hover:bg-black transition"
                            >
                                Sign Up / Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <Signup isOpen={isModalOpen} onClose={handleModalClose} />
        </>
    );
};

export default Navbar;
