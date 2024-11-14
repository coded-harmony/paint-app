import Image from "next/image";
import BannerImg from '../../../public/images/banner-img.png';
import Check from '../../../public/images/icons/check-yllow.svg';
import ArrowR from '../../../public/images/icons/arrow-right.svg';
import React from 'react';

const Banner = () => {
    return (
        <section className="bg-[#FEEDBC] pt-[270px] pb-[400px] relative max-lg:pb-40 max-md:pt-20">
            <div className="container grid grid-cols-[53%_1fr] items-center max-md:flex max-md:flex-col-reverse">
                {/* left section */}
                <div className="">
                    <h3 className="text-[#F9B800] font-bold max-sm:text-[16px]">RISUS PRAESENT VULPUTATE.</h3>
                    <h1 className="">Cursus Integer Consequat Tristique.</h1>
                    <div className="flex items-center flex-wrap gap-3 mt-14">
                        {[
                            'Cursus Integer',
                            'Integer Consequat',
                            'Tellus Euismod Pellentesque',
                            'Aliquet Tristique',
                            'Pellentesque Tempus',
                            'Mauris Fermentum Pretium',
                        ].map((text, index) => (
                            <div key={index} className="flex items-center space-x-2 bg-white px-5 py-3 rounded-full shadow-md">
                                <Image src={Check} alt="icon" />
                                <span className="text-xl font-semibold max-sm:text-[17px]">{text}</span>
                            </div>
                        ))}
                    </div>
                    <button className="btn-style img orange mt-14">
                        Lorem Ipsum <Image src={ArrowR} alt="icon" />
                    </button>
                </div>
                {/* right section */}
                <div className="flex justify-center mt-10 md:mt-0 relative">
                    <Image src={BannerImg} alt="img" />
                </div>
            </div>
        </section>
    );
};

export default Banner;

