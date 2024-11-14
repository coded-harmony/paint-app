import Image from "next/image";
import BannerImg from '../../../public/images/banner-img.png';
import Check from '../../../public/images/icons/check-yllow.svg';
import ArrowR from '../../../public/images/icons/arrow-right.svg';
import React from 'react';

const Banner = () => {
    return (
        <div className="leaf-left relative max-w-6xl mx-auto text-center pt-[270px] pb-[165px] max-sm:pt-[172px]">
            <h3 className="text-[#F9B800] font-bold max-sm:text-[16px]">RISUS PRAESENT VULPUTATE.</h3>
            <h1 className="mb-[60px]">Cursus Consequat Tristique.</h1>
            <div className="flex items-center flex-wrap justify-center gap-3 mb-[60px]">
                {[
                    'Cursus Integer',
                    'Integer Consequat',
                    'Tellus Euismod Pellentesque',
                    'Aliquet Tristique',
                    'Pellentesque Tempus',
                    'Mauris Fermentum Pretium',
                ].map((text, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white px-5 py-3 rounded-full shadow-sm">
                        <Image src={Check} alt="icon" />
                        <span className="text-xl font-semibold max-sm:text-[17px]">{text}</span>
                    </div>
                ))}
            </div>
            <button className="btn-style img orange">
                Lorem Ipsum <Image src={ArrowR} alt="icon" />
            </button>
        </div>
    );
};

export default Banner;

