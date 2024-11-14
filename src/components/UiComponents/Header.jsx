import Image from "next/image";
import Logo from '../../../public/images/logo.svg';
import Flag from '../../../public/images/flag.png';
import AngleDown from '../../../public/images/icons/arrow_drop_down.svg';
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <main className="absolute w-full left-0 top-[60px] z-10">
            {/* Main Header */}
            <div className="container relative p-4 flex items-center justify-between rounded-full bg-white h-24">
                <Image src={Logo} alt="Logo" className="w-auto mx-auto max-sm:m-0" />
                <div onClick={toggleMenu} className="flex items-center gap-4 cursor-pointer absolute right-9 top-1/2 -translate-y-1/2">
                    <button><Image src={Flag} alt="Flag" /></button>
                    <Image src={AngleDown} alt="Dropdown Icon" />
                </div>
                {menuOpen && (
                    <div className="absolute right-12 top-full mt-2 bg-white shadow-lg rounded-md p-3">
                        <button><Image src={Flag} alt="Flag" /></button>
                    </div>
                )}
            </div>
        </main>
    );
}
