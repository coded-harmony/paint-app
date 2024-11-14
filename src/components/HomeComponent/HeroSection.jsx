import Image from "next/image";
import HeroImg from '../../../public/images/hero-img.png';
import Check from '../../../public/images/icons/check-yllow.svg';
import ArrowR from '../../../public/images/icons/arrow-right-white.svg';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative py-10 hero-bg content-center -mt-[10%] mb-32 max-lg:overflow-hidden max-lg:mb-0 max-md:pt-0 max-md:pb-10  max-lg:bg-[#F9B800] ">
            <div className="container grid grid-cols-[40%_1fr] items-center gap-[150px] relative z-10 max-lg:gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse max-md:gap-0">
                {/* left section */}
                <div className="">
                    <h2 className="mb-14">Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h2>
                    <a href="#" className="underline">Vulputate et vulputate suspendisse natoque!</a>
                    <p>Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. </p>
                    <button className="btn-style img mt-14">
                        Lorem Ipsum <Image src={ArrowR} alt="icon" />
                    </button>
                </div>
                {/* right section */}
                <div className="flex justify-center mt-10 md:mt-0 relative">
                    <Image src={HeroImg} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
