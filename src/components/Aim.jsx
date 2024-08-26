import React from 'react';
import Slider from 'react-slick';
import { aimBanners } from '../constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Aim = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,            // Enable autoplay
        autoplaySpeed: 4000,      // Set the rotation interval to 5 seconds
    };

    return (
        <Slider {...settings}>
            {aimBanners.map(item => (
                <div key={item.id} className='bg-aimBg h-96 flex items-center justify-center mt-20'>
                    <div className='flex w-full'>
                        <div className='w-1/2 flex justify-center items-center'>
                            <img src={item.imgSrc} alt="doctor-img" className='w-[36rem] relative bottom-20 max-w-full' />
                        </div>
                        <div className='w-1/2 flex flex-col justify-center items-center pr-10 h-full relative top-16'>
                            <h2 className='text-white font-bold text-3xl text-right'>{item.title}</h2>
                            <p className='text-white font-medium text-medium w-2/3 mt-5 text-right ml-auto'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Aim;