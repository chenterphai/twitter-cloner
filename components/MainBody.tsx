'use client'
import React from 'react'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs'
import { IoShapesOutline, IoShareOutline, IoStatsChart } from 'react-icons/io5'
import Image from 'next/image'

const MainBody = () => {
    return (
        <main className='ml-[290px] flex w-full max-w-2xl h-full min-h-screen flex-col border-l border-r border-'>
            <h1 className='text-xl z-10 font-bold p-6 backdrop:blur bg-white sticky top-0'>Home</h1>

            {/* Tweet Section */}
            <div className='border-t-[0.5px] px-4 flex items-stretch py-4 space-x-2 relative'>
                {/* Profile Image */}
                <div className='w-10 h-10 bg-slate-200 rounded-full flex-none'>

                </div>

                <div className='flex flex-col w-full h-full'>

                    <textarea
                        className='w-full h-full p-2 bg-transparent border-none outline-none text-gray-700'
                        placeholder="What's happening?"
                        maxLength={280}
                        minLength={3}
                    />

                    <div className='w-full justify-between flex items-center'>
                        <div>
                        </div>
                        <div className='w-full max-w-[100px]'>
                            <button
                                className='rounded-full bg-primary py-1 text-base text-white px-4 text-center hover:bg-opacity-80'>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className='border-t-[0.5px] py-4 px-6 flex space-x-4'>

                        {/* Account Image */}
                        <div>
                            <div className='w-10 h-10 bg-slate-200 rounded-full overflow-hidden'>
                                <Image src={'/49B441CE-A7AC-4DDB-BC61-FC23FC09F1AE.jpeg'} alt='Image' width={400} height={400} className='' />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            {/* Account Information */}
                            <div className='flex items-center w-full justify-between'>
                                <div className='flex items-center space-x-2 w-full'>
                                    <div className='font-bold'>Ter Faa</div>
                                    <div className='text-gray-500 text-sm'>@chenterFaaFaa</div>
                                    <div><BsDot /></div>
                                    <div className='text-gray-500 text-sm'>39 minutes</div>
                                </div>
                                <div>
                                    <BsThreeDots />
                                </div>
                            </div>

                            {/* Content, text */}
                            <div className='text-slate-700 text-base mb-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium optio eaque earum, inventore aliquid suscipit voluptatum vel perspiciatis voluptatibus aut!
                            </div>


                            <div className='bg-slate-400 aspect-square w-full h-96 rounded-xl'>

                            </div>
                            <div className='flex items-center justify-start space-x-24 mt-4 w-full'>
                                <div className='p-2 rounded-full hover:bg-gray-200 transition duration-200'>
                                    <BsChat /></div>
                                <div>
                                    <AiOutlineRetweet /></div>
                                <div>
                                    <AiOutlineHeart /></div>
                                <div>
                                    <IoStatsChart /></div>
                                <div>
                                    <IoShareOutline /></div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </main>
    )
}

export default MainBody