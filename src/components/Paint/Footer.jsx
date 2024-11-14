import Image from "next/image";
import ArrowR from '../../../public/images/icons/arrow-right.svg';




export default function Footer() {
    return (
        <main className="container">
            <div className="bg-[#262626] rounded-[100px] px-12 py-20 mb-24 max-md:rounded-[50px] max-sm:px-4 max-sm:pt-14 max-sm:pb-9 max-sm:mb-10">
                <div className="grid grid-cols-[60%_1fr] items-center pb-20 border-b border-[#404040] max-md:grid-cols-1 max-sm:pb-8 max-sm:text-center">
                    <h2 className="max-sm:text-3xl text-white">Vulputate et pulvinar ethre Suspendisse tellus consecteur</h2>
                    <a href="#" className="btn-style white img ml-auto mr-0 max-md:m-0 max-md:mt-7">Lorem Ipsum
                        <Image src={ArrowR} alt="icon" />
                    </a>
                </div>
                <div className="flex items-center justify-between pt-10 max-sm:flex-col max-sm:items-start max-sm:pt-7 max-sm:items-center">
                    <p className="max-sm:text-[16px] text-white">Copyright © 2022 Lorem Ipsum.</p>
                    <div className="flex items-center gap-1 ">
                        <a href="#" className="font-semibold border-r border-[#262626] pr-2 mr-2 underline max-sm:text-[16px] leading-4 text-white">Privacy Policy</a>
                        <a href="#" className="font-semibold underline max-sm:text-[16px] leading-4 text-white">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </main>

    )
}