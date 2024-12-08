"use client"

import { ChevronDown, X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'

export default function Header() {
    const [activeLink, setActiveLink] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (link: string) => {
        setActiveLink(link);
        setIsMenuOpen(false);
    };

    return (
        <header className="flex flex-col items-center justify-center font-sans not-italic border-b-2 ">
            {/* top header */}
            <div className='w-full bg-[#000000] pr-[12px] sm:pr-[9.444vw] pt-[9px] pb-[9px] md:pb-[10px] text-white flex items-center justify-center md:justify-end'>
                <div className='flex flex-row items-center justify-between p-0 pl-[12px] gap-[15px] md:w-[59.653vw] '>
                    <div className='flex flex-row items-center p-0 gap-[8px] w-full text-[12px] sm:text-[14px]'>
                        <h1 className="font-normal text-[#FAFAFA]">
                            Sign up and get 20% off to your first order.</h1>
                        <Link href={""} className='font-semibold leading-[24px] underline'>Sign Up Now</Link>
                    </div>
                    <X className='hidden md:flex' />
                </div>
            </div>
            {/* menu header */}
            <nav className='flex flex-row items-center justify-between px-[16px] p-0 gap-[16px] w-full md:max-w-[1240px] min-h-[41px] my-[23px] md:mt-[24px] md:mb-[31px]'>
                {/* Hamburger Button (Visible on small screens) */}
                <button
                    className="block md:hidden text-[20px] dark:text-white"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    ☰
                </button>

                <h1 className="absolute left-[48px] md:static font-bold text-[25.2px] lg:text-[32px] leading-[24px] tracking-[0.03em] text-[#000000]">
                    SHOP.CO
                </h1>
                {/* nav link */}


                {/* Navigation Links */}
                <div
                    className={`${isMenuOpen ? "flex" : "hidden"
                        } absolute md:static left-0 top-[80px] w-full md:w-[321px] flex-col md:flex-row md:flex justify-center items-center gap-[24px] bg-white md:bg-transparent font-normal text-[16px] leading-[24px] text-center text-nowrap text-[#000000]`}
                >
                    <Link
                        href="/#"
                        id="l1"
                        onClick={() => handleClick("#l1")}
                        className={` flex items-center ${activeLink === "#l1"
                            ? "border-b-2 border-[solid] border-[#7D8184] "
                            : ""
                            }`}
                    >
                        Shop
                        <ChevronDown className='ml-[4px] w-4 h-4' />
                    </Link>
                    <Link
                        href="/#"
                        id="l2"
                        onClick={() => handleClick("#l2")}
                        className={` ${activeLink === "#l2"
                            ? "border-b-2 border-[solid] border-[#7D8184] "
                            : ""
                            }`}
                    >
                        On Sale
                    </Link>
                    <Link
                        href="/#"
                        id="l3"
                        onClick={() => handleClick("#l3")}
                        className={` ${activeLink === "#l3"
                            ? "border-b-2 border-[solid] border-[#7D8184] "
                            : ""
                            }`}
                    >
                        New Arrivals
                    </Link>
                    <Link
                        href="/#"
                        id="l4"
                        onClick={() => handleClick("#l4")}
                        className={` ${activeLink === "#l4"
                            ? "border-b-2 border-[solid] border-[#7D8184] "
                            : ""
                            }`}
                    >
                        Brands
                    </Link>
                </div>

                {/* search bar */}
                <div className='hidden lg:flex justify-center items-center relative max-w-[577px] h-[48px]' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-[16px] top-[12px] cursor-pointer'>
                        <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <input type="text" placeholder='Search for products...' className="flex flex-row justify-between items-center pl-[52px] gap-[10px] w-[40.069vw] h-full bg-[#F5F5F5] rounded-full" />
                </div>
                {/* icons svg */}
                <div className='flex flex-row justify-center items-center p-0 gap-[12px] md:gap-[14px] '>
                    {/* search */}
                    <Link href={"#"}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='lg:hidden'>
                            <path d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </Link>
                    {/* cart svg */}
                    <Link href={"/cart"}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.375 20.75C9.375 21.1208 9.26503 21.4834 9.059 21.7917C8.85298 22.1 8.56014 22.3404 8.21753 22.4823C7.87492 22.6242 7.49792 22.6613 7.1342 22.589C6.77049 22.5166 6.4364 22.338 6.17417 22.0758C5.91195 21.8136 5.73337 21.4795 5.66103 21.1158C5.58868 20.7521 5.62581 20.3751 5.76773 20.0325C5.90964 19.6899 6.14996 19.397 6.45831 19.191C6.76665 18.985 7.12916 18.875 7.5 18.875C7.99728 18.875 8.47419 19.0725 8.82582 19.4242C9.17745 19.7758 9.375 20.2527 9.375 20.75ZM17.25 18.875C16.8792 18.875 16.5166 18.985 16.2083 19.191C15.9 19.397 15.6596 19.6899 15.5177 20.0325C15.3758 20.3751 15.3387 20.7521 15.411 21.1158C15.4834 21.4795 15.662 21.8136 15.9242 22.0758C16.1864 22.338 16.5205 22.5166 16.8842 22.589C17.2479 22.6613 17.6249 22.6242 17.9675 22.4823C18.3101 22.3404 18.603 22.1 18.809 21.7917C19.015 21.4834 19.125 21.1208 19.125 20.75C19.125 20.2527 18.9275 19.7758 18.5758 19.4242C18.2242 19.0725 17.7473 18.875 17.25 18.875ZM22.0753 7.58094L19.5169 15.8966C19.3535 16.4343 19.0211 16.9051 18.569 17.239C18.1169 17.5729 17.5692 17.7521 17.0072 17.75H7.77469C7.2046 17.7482 6.65046 17.5616 6.1953 17.2183C5.74015 16.8751 5.40848 16.3936 5.25 15.8459L2.04469 4.625H1.125C0.826631 4.625 0.540483 4.50647 0.329505 4.2955C0.118526 4.08452 0 3.79837 0 3.5C0 3.20163 0.118526 2.91548 0.329505 2.7045C0.540483 2.49353 0.826631 2.375 1.125 2.375H2.32687C2.73407 2.37626 3.12988 2.50951 3.45493 2.75478C3.77998 3.00004 4.01674 3.34409 4.12969 3.73531L4.81312 6.125H21C21.1761 6.12499 21.3497 6.1663 21.5069 6.24561C21.664 6.32492 21.8004 6.44001 21.905 6.58164C22.0096 6.72326 22.0795 6.88746 22.1091 7.06102C22.1387 7.23458 22.1271 7.41266 22.0753 7.58094ZM19.4766 8.375H5.45531L7.41375 15.2281C7.43617 15.3065 7.48354 15.3755 7.54867 15.4245C7.6138 15.4736 7.69315 15.5001 7.77469 15.5H17.0072C17.0875 15.5002 17.1656 15.4746 17.2303 15.427C17.2949 15.3794 17.3426 15.3123 17.3662 15.2356L19.4766 8.375Z" fill="black" />
                        </svg>
                    </Link>
                    {/* Profile svg */}
                    <Link href={"#"}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.375C9.99747 2.375 8.0399 2.96882 6.37486 4.08137C4.70981 5.19392 3.41206 6.77523 2.64572 8.62533C1.87939 10.4754 1.67888 12.5112 2.06955 14.4753C2.46023 16.4393 3.42454 18.2435 4.84055 19.6595C6.25656 21.0755 8.06066 22.0398 10.0247 22.4305C11.9888 22.8211 14.0246 22.6206 15.8747 21.8543C17.7248 21.0879 19.3061 19.7902 20.4186 18.1251C21.5312 16.4601 22.125 14.5025 22.125 12.5C22.122 9.8156 21.0543 7.24199 19.1562 5.34383C17.258 3.44567 14.6844 2.37798 12 2.375ZM7.45969 18.9284C7.98195 18.2143 8.66528 17.6335 9.45418 17.2331C10.2431 16.8327 11.1153 16.624 12 16.624C12.8847 16.624 13.7569 16.8327 14.5458 17.2331C15.3347 17.6335 16.0181 18.2143 16.5403 18.9284C15.2134 19.8695 13.6268 20.375 12 20.375C10.3732 20.375 8.78665 19.8695 7.45969 18.9284ZM9.375 11.75C9.375 11.2308 9.52896 10.7233 9.8174 10.2916C10.1058 9.85995 10.5158 9.5235 10.9955 9.32482C11.4751 9.12614 12.0029 9.07415 12.5121 9.17544C13.0213 9.27672 13.489 9.52673 13.8562 9.89384C14.2233 10.261 14.4733 10.7287 14.5746 11.2379C14.6759 11.7471 14.6239 12.2749 14.4252 12.7545C14.2265 13.2342 13.8901 13.6442 13.4584 13.9326C13.0267 14.221 12.5192 14.375 12 14.375C11.3038 14.375 10.6361 14.0984 10.1438 13.6062C9.65157 13.1139 9.375 12.4462 9.375 11.75ZM18.1875 17.3694C17.4583 16.4419 16.5289 15.6914 15.4688 15.1737C16.1444 14.4896 16.6026 13.6208 16.7858 12.6769C16.9689 11.7329 16.8688 10.7558 16.498 9.86861C16.1273 8.9814 15.5024 8.22364 14.702 7.69068C13.9017 7.15771 12.9616 6.87334 12 6.87334C11.0384 6.87334 10.0983 7.15771 9.29797 7.69068C8.49762 8.22364 7.87275 8.9814 7.50198 9.86861C7.13121 10.7558 7.0311 11.7329 7.21424 12.6769C7.39739 13.6208 7.85561 14.4896 8.53125 15.1737C7.4711 15.6914 6.54168 16.4419 5.8125 17.3694C4.89661 16.2083 4.32614 14.8129 4.1664 13.3427C4.00665 11.8725 4.2641 10.3871 4.90925 9.05644C5.55441 7.72578 6.5612 6.60366 7.81439 5.81855C9.06757 5.03343 10.5165 4.61703 11.9953 4.61703C13.4741 4.61703 14.9231 5.03343 16.1762 5.81855C17.4294 6.60366 18.4362 7.72578 19.0814 9.05644C19.7265 10.3871 19.984 11.8725 19.8242 13.3427C19.6645 14.8129 19.094 16.2083 18.1781 17.3694H18.1875Z" fill="black" />
                        </svg>
                    </Link>
                </div>
            </nav>

        </header>
    )
}

