import Image from 'next/image';
import HeroImg from '../../../public/images/hero-img.png';
import Check from '../../../public/images/icons/check-yllow.svg';
import ArrowR from '../../../public/images/icons/arrow-right.svg';
import JoinIcon from '../../../public/images/join-icon.png';
import HandsIcon from '../../../public/images/icons/hands.svg';
import Unity from '../../../public/images/icons/unity.svg';
import Meditating from '../../../public/images/icons/boy-meditating.svg';

const FeatureCards = () => {
    return (
        <div className="container relative z-10">
            <div className=" bg-[#262626] rounded-[100px] mb-[300px] grid grid-cols-[1fr_40%] py-20 px-28 items-center gap-20 max-lg:flex max-lg:flex-col-reverse max-lg:gap-20 max-lg:text-center max-md:p-5 max-md:rounded-[50px]">
                <div className="flex gap-14 justify-center max-md:gap-6 max-sm:flex-col lg:mb-[-35%]">
                    <div className="flex items-center flex-col gap-14 max-md:gap-6">
                        <div className="bg-white text-black p-12 max-sm:w-full rounded-[60px] flex flex-col items-start text-center shadow-lg max-md:h-auto">
                            <Image src={JoinIcon} alt="Join Icon" className='mb-6' />
                            <h1 className="text-[70px] max-sm:mb-5">1<span className='text-[#F9B800]'>.</span></h1>
                            <p className="font-bold text-2xl mt-2">Phasellus Vitae</p>
                            <p className="font-semibold text-xl mt-2">Quisque</p>
                            <p className="text-lg">Porttitor vitae vel amet </p>
                        </div>
                        <div className="bg-[#F6B524] text-black p-12 max-sm:w-full rounded-[60px] flex flex-col items-start text-center shadow-lg max-md:h-auto">
                            <Image src={Unity} alt="Join Icon" className='mb-6' />
                            <h1 className="text-[70px] max-sm:mb-5">3<span className='text-white'>.</span></h1>
                            <p className="font-bold text-2xl mt-2">Iaculis Magna</p>
                            <p className="font-semibold text-xl mt-2">Quisque</p>
                            <p className="text-lg">neque scelerisque mattis.  </p>
                        </div>
                    </div>
                    <div className="flex items-center flex-col gap-14 max-md:gap-6 mt-[120px] max-sm:m-0">
                        <div className="bg-[#F6B524] text-black p-12 max-sm:w-full rounded-[60px] flex flex-col items-start text-center shadow-lg max-md:h-auto">
                            <Image src={HandsIcon} alt="Join Icon" className='mb-6' />
                            <h1 className="text-[70px] max-sm:mb-5">2<span className='text-white'>.</span></h1>
                            <p className="font-bold text-2xl mt-2">Eleifend Pulvinar</p>
                            <p className="font-semibold text-xl mt-2">Quisque</p>
                            <p className="text-lg">Consectetur nibh velit  </p>
                        </div>
                        <div className="bg-white text-black p-12 max-sm:w-full rounded-[60px] flex flex-col items-start text-center shadow-lg max-md:h-auto">
                            <Image src={Meditating} alt="Join Icon" className='mb-6' />
                            <h1 className="text-[70px] max-sm:mb-5">4<span className='text-[#F9B800]'>.</span></h1>
                            <p className="font-bold text-2xl mt-2">Velit Odio Phir</p>
                            <p className="font-semibold text-xl mt-2">Quisque</p>
                            <p className="text-lg">magna consectetur leo. </p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[#F9B800] mb-5">
                        Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo.
                    </p>
                    <h2 className="text-4xl font-bold text-white mb-14 ">
                        Cursus Integer Conseq Aliquam Tristique.
                    </h2>
                    <button className="btn-style img white">
                        Lorem Ipsum <Image src={ArrowR} alt="icon" className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCards;
