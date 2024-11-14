import Image from "next/image";
import HeroImg from '../../../public/images/hero-img.png';
import Check from '../../../public/images/icons/check-yllow.svg';
import ArrowR from '../../../public/images/icons/arrow-right-white.svg';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative z-10 leaf-right">
            <div className="container ">
                <div className="bg-[#F9B800] rounded-[100px] mb-[150px] grid grid-cols-[45%_1fr] items-center justify-center gap-[128px] py-14 px-24 max-lg:gap-10 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse max-md:gap-0 max-md:p-5 max-md:rounded-[50px]">
                    {/* left section */}
                    <div className="max-md:text-center">
                        <h2 className="mb-12">Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h2>
                        <a href="#" className="underline">Vulputate et vulputate suspendisse natoque!</a>
                        <p>Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. </p>
                        <button className="btn-style img mt-11">
                            Lorem Ipsum <Image src={ArrowR} alt="icon" />
                        </button>
                    </div>
                    {/* right section */}
                    <div className="flex justify-center mt-10 md:mt-0 relative">
                        <Image src={HeroImg} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
