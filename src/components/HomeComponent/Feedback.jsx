import Image from 'next/image';
import Profile from '../../../public/images/feedback-img.png';
import ArrowL from '../../../public/images/icons/trending_flat.svg';
import ArrowR from '../../../public/images/icons/trending_flat-orange.svg';
import JoinIcon from '../../../public/images/join-icon.png';


const Feedback = () => {
    return (
        <main className='container'>
            <div className=' max-lg:-mt-40 max-md:-mt-[60%] max-sm:-mt-[450px] max-lg:relative max-lg:z-[2]'>
                <div className="py-24 px-32 bg-white rounded-[100px] max-lg:p-10 max-sm:p-7">
                    <div className="grid grid-cols-[auto_1fr] items-center gap-16 max-lg:gap-10 max-lg:grid-cols-[40%_1fr] max-md:grid-cols-1 max-md:text-center">
                        <Image src={Profile} alt='img' className='max-md:mx-auto' />
                        <div className="">
                            <h2 className='mb-10 max-sm:mb-5 max-sm:text-3xl'>What our customers thought?</h2>
                            <p className='mb-5 max-sm:text-[16px]'>Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. </p>
                            <p className="text-2xl font-bold">Holly Davidson</p>
                            <div className="flex items-center gap-10 mt-10 max-md:justify-center">
                                <Image src={ArrowL} alt='img' />
                                <Image src={ArrowR} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Feedback;
