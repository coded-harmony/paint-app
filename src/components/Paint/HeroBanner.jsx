import Image from "next/image";
import BannerImg from '../../../public/images/hero-banner-img.png';
import Check from '../../../public/images/icons/check-yllow.svg';
import ArrowR from '../../../public/images/icons/arrow-right.svg';
import React from 'react';

export default function HeroBanner() {
    return (
        <div className="leaf-right relative z-10 ">
            <div className="container">
                <div className="grid grid-cols-[48%_1fr] bg-white rounded-[100px] mb-[180px] items-center py-24 px-28 max-lg:grid-cols-2 max-md:flex max-md:flex-col-reverse max-md:p-5 max-md:rounded-[50px]">
                    {/* left section */}
                    <div className="">
                        <h2 className="max-sm:text-center">Cursus Integer Consequat Tristique.</h2>
                        <div className="flex items-center flex-wrap gap-3 mt-14 max-sm:justify-center">
                            {[
                                'Ac viverra sed risus praesent vulputate. ',
                                'Natoqu consectetur pulvinar.',
                                'Sollicitudin ornare tempus nulla varius pulvinar.',
                                'Varius pulvinar',
                                'Natoque id tellus consectetur',
                                'Vulputate et vulputate suspendisse',
                            ].map((text, index) => (
                                <div key={index} className="flex items-center space-x-2 bg-[#FFFAEB] px-5 py-3 rounded-full ">
                                    <Image src={Check} alt="icon" />
                                    <span className="text-xl font-semibold max-sm:text-[17px]">{text}</span>
                                </div>
                            ))}
                        </div>
                        <button className="btn-style orange img mt-14">
                            Lorem Ipsum <Image src={ArrowR} alt="icon" />
                        </button>
                    </div>
                    {/* right section */}
                    <div className="flex justify-center mt-10 md:mt-0 relative">
                        <Image src={BannerImg} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};


