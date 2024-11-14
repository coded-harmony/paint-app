import Image from "next/image";
import BannerImg from '../../../public/images/hero-banner-img.png';
import Check from '../../../public/images/icons/check-yllow.svg';
import ArrowR from '../../../public/images/icons/arrow-right-white.svg';
import React from 'react';

export default function HeroBanner() {
    return (
        <div className="hero-banner-bg relative content-center mb-52 -mt-32 max-lg:overflow-hidden max-lg:py-20 max-lg:mb-0 max-lg:-mt-[30%] max-md:-mt-[60%] max-sm:-mt-[450px] max-lg:pt-60 max-lg:bg-[#F9B800]">
            <div className="container grid grid-cols-[40%_1fr] items-center max-lg:grid-cols-2 max-md:flex max-md:flex-col-reverse !mt-40">
                {/* left section */}
                <div className="">
                    <h2 className="">Cursus Integer Consequat Tristique.</h2>
                    <div className="flex items-center flex-wrap gap-3 mt-14">
                        {[
                            'Ac viverra sed risus praesent vulputate. ',
                            'Natoqu consectetur pulvinar.',
                            'Sollicitudin ornare tempus nulla varius pulvinar.',
                            'Varius pulvinar',
                            'Natoque id tellus consectetur',
                            'Vulputate et vulputate suspendisse',
                        ].map((text, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-white px-5 py-3 rounded-full shadow-md">
                                <Image src={Check} alt="icon" />
                                <span className="text-xl font-semibold max-sm:text-[17px]">{text}</span>
                            </div>
                        ))}
                    </div>
                    <button className="btn-style img mt-14">
                        Lorem Ipsum <Image src={ArrowR} alt="icon" />
                    </button>
                </div>
                {/* right section */}
                <div className="flex justify-center mt-10 md:mt-0 relative">
                    <Image src={BannerImg} alt="img" />
                </div>
            </div>
        </div>
    );
};


