import Image from "next/image";
import ArrowR from '../../../public/images/icons/arrow-right.svg';




export default function Footer() {
    return (
        <main className="pb-20 pt-[500px] bg-[#FEEDBC] -mt-[12%] max-lg:pt-40 max-sm:pb-10 max-sm:pt-20">
            <div className="container">
                <div className="grid grid-cols-2 items-center pb-20 border-b border-[#E4D5AA] max-md:grid-cols-1 max-sm:pb-8">
                    <h2 className="max-sm:text-3xl">Vulputate et pulvinar ethre Suspendisse tellus consecteur</h2>
                    <a href="#" className="btn-style orange img ml-auto mr-0 max-md:m-0 max-md:mt-7">Lorem Ipsum
                        <Image src={ArrowR} alt="icon" />
                    </a>
                </div>
                <div className="flex items-center justify-between pt-10 max-sm:flex-col max-sm:items-start max-sm:pt-7">
                    <p className="max-sm:text-[16px]">Copyright © 2022 Lorem Ipsum.</p>
                    <div className="flex items-center gap-1 ">
                        <a href="#" className="font-semibold border-r border-[#262626] pr-2 mr-2 underline max-sm:text-[16px] leading-4">Privacy Policy</a>
                        <a href="#" className="font-semibold underline max-sm:text-[16px] leading-4">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </main>
    )
}