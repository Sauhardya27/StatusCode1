import React from 'react';
import doctor from '../assets/doctor.svg';
import { doctorOutline, bookLogo, arrow } from '../assets';

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[600px] mx-10 sm:mx-6 lg:mx-8 py-10 px-6 bg-gradient-to-b from-[#C488A5] to-[#846DA2] shadow-md rounded-3xl">
      {/* Heading Section */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <h1 className="text-9xl md:text-9xl font-bold text-center text-white">Healthalign</h1>
      </div>

      <div className="flex space-x-6">

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
          {/* Doctor Image */}
          <img src={doctor} alt="Doctor" className="w-full max-w-[200px] md:max-w-[250px] lg:max-w-[350px]" />
        </div>
        </div>

      {/* Text Section (Bottom Left) */}
      <div className="absolute bottom-8 left-8 md:left-16 space-y-4">
        {/* Book A Consultancy Button */}
        <div className="flex items-center mb-4">
          <button className="flex items-center justify-center bg-[#83D7C0] hover:bg-[#70BFA7] text-white font-medium rounded-full h-12 w-12 transition duration-200 mr-3">
            <img src={doctorOutline} alt="Book A Consultancy" className="h-6 w-6 text-[#70A58E]" />
            <span className="sr-only">Book A Consultancy</span>
          </button>
          <span className="text-white font-medium">Book A Consultancy</span>
        </div>

        {/* Learn More Button */}
        <div className="flex items-center mb-4">
          <button className="flex items-center justify-center bg-[#F7A8A8] hover:bg-[#F98B8B] text-white font-medium rounded-full h-12 w-12 transition duration-200 mr-3">
            <img src={bookLogo} alt="Learn More" className="h-6 w-6" />
            <span className="sr-only">Learn More</span>
          </button>
          <span className="text-white font-medium">Learn More</span>
        </div>

        <h6 className="text-lg md:text-xl text-white w-[30%]">
          Discover your health condition with our AI-powered quiz and take advantage to diagnose your health condition and receive personalized recommendations.
        </h6>
      </div>

      {/*take quiz*/}

      <div className="absolute bottom-8 right-8 md:right-16 space-y-4">
        <div className="flex items-center mb-4">
        <button className="bg-[#FFCFDB] text-[#444444] px-5 py-2 rounded-full hover:bg-[#C488A5] h-12 transition flex flex-row gap-4 items-center">Take the Quiz
            <img src={arrow} alt="Book A Consultancy" className="h-6 w-6" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
