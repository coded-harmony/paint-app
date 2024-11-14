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
        <div className="relative py-10 feature-bg text-white max-lg:overflow-hidden max-lg:bg-[#262626] max-lg:pb-[280px] max-md:pb-[580px]">
            <div className="container grid grid-cols-[40%_1fr] items-center gap-[150px] max-lg:grid-cols-1 max-lg:gap-20">
                {/* left section */}
                <div>
                    <p className="text-[#F9B800] mb-6 ">
                        Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo.
                    </p>
                    <h2 className="text-4xl font-bold text-white mb-14 ">
                        Cursus Integer Conseq Aliquam Tristique.
                    </h2>
                    <button className="btn-style img white">
                        Lorem Ipsum <Image src={ArrowR} alt="icon" className="ml-2" />
                    </button>
                </div>

                {/* right section */}
                <div className="flex gap-16 max-lg:justify-center max-md:gap-6 max-sm:flex-col">
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
            </div>
        </div>
    );
};

export default FeatureCards;
