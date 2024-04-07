import React from 'react'
import Link from 'next/link';
import { FaTwitter } from "react-icons/fa";
import { NAVIGATION_ITEMS } from "@/constants";
import { IoIosMore } from "react-icons/io";
const LeftSidebarForNavbar = () => {
    return (
        <section className='fixed w-[285px] flex items-stretch flex-col h-screen pl-3 pr-5'>
            <div className='flex items-stretch flex-col h-full mt-4 space-y-2'>
                <Link href={'/'} className='p-4 text-3xl text-primary'><FaTwitter /></Link>
                {NAVIGATION_ITEMS.map((item, idx) => (
                    <Link href={`/${item.title?.toLowerCase()}`} key={idx}
                        className='hover:bg-gray-100 transition-all duration-200 flex items-center justify-start text-lg w-fit text-gray-700 space-x-6 rounded-3xl py-2 px-4'
                    >
                        <div>
                            <item.icon />
                        </div>
                        <div>{item.title}</div>
                    </Link>
                ))}
                <button className='rounded-full m-3 bg-primary text-white p-2 text-lg text-center hover:bg-opacity-70 transition duration-200'>
                    Tweet
                </button>
            </div>
            <button className='rounded-full flex justify-between items-center space-x-2 m-4 bg-transparent text-gray-700 p-4 text-center hover:bg-slate-100 transition duration-200'>
                <div className='flex items-center space-x-2'>
                    <div className='rounded-full bg-slate-200 w-9 h-9'></div>
                    <div className='text-left text-xs'>
                        <div className='font-semibold'>Nickfaa Coder</div>
                        <div className=''>@nickfaacoder</div>
                    </div>
                </div>
                <div>
                    <IoIosMore />
                </div>
            </button>
        </section>
    )
}

export default LeftSidebarForNavbar