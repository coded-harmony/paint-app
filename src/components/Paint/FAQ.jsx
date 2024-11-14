import { useState } from 'react';
import Image from 'next/image';
import Plus from '../../../public/images/icons/plus.svg';
import Minus from '../../../public/images/icons/minus.svg';

const faqData = [
    {
        question: " Quam vehicula faucibus amet lorem. ",
        answer: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
        question: " Quam vehicula faucibus amet lorem. ",
        answer: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
        question: "Pellentesque tempus sed phasellus vel. ",
        answer: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
        question: "Mauris fermentum praesent tellus euismod pellentesque urna ac massa in.  ",
        answer: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
        question: "Vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. ",
        answer: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
        question: " Sollicitudin ornare tempus felis nulla varius pulvinar nibh viverra ornare. ",
        answer: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
        question: " Consectetur nibh velit magna consectetur leo. ",
        answer: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
    {
        question: " Quisque porttitor vitae vel amet neque scelerisque mattis. ",
        answer: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. Mauris fermentum praesent tellus euismod.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container !mb-[180px]">
            <h2 className="text-center max-sm:mb-5">Phasellus a vitae iaculis magna.</h2>
            <h3 className='text-center mb-14 max-sm:text-[16px] max-sm:mb-10'>Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h3>
            <div className="w-full">
                {faqData.map((item, index) => (
                    <div key={index} className="bg-white rounded-[40px] text-black py-10 px-16 mb-6 max-sm:p-7 max-sm:mb-4">
                        <div
                            onClick={() => toggleAccordion(index)}
                            className="flex justify-between gap-10 items-center cursor-pointer max-sm:items-start max-sm:gap-3"
                        >
                            <h3 className="font-bold lato">{item.question}</h3>
                            <div
                                className={`min-w-[50px] min-h-[50px] rounded-full flex items-center justify-center max-sm:min-w-8 max-sm:min-h-8 transition-transform duration-300`}
                            >
                                <Image
                                    src={openIndex === index ? Minus : Plus}
                                    alt={openIndex === index ? "Minus Icon" : "Plus Icon"}
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${openIndex === index ? 'max-h-[400px] mt-5' : ''}`}
                        >
                            <h3 className="max-sm:text-lg">{item.answer}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
