import Assets from '@/constants/assets.constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className="w-full bg-[#101314] md:h-[100vh] h-auto pl-5 pr-5 md:pr-0 md:pl-[60px] md:pt-20 relative md:pb-[150px] py-[100px]">
            <div className="w-full h-full bg-cover overflow-hidden absolute right-0 left-0 top-0 bottom-0 md:block hidden">
                <Image
                    src={Assets.heroLine}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="md:flex">
                <div className='w-full h-auto z-50'>
                    <h1 className='poppins md:text-[54px] text-[7vw] font-[700] text-white leading-tight'>
                        AN INNOVATIVE PLATFORM THAT <span className='text-primaryColor'>SUPPORTS <br /> ARTISTS.</span>
                    </h1>
                    <p className="text-white md:text-[19px] text-[4vw] font-[400] poppins md:w-[35vw] w-full mt-2">Figma files can also be downloaded from our store. These files include the latest Figma features and are </p>
                    <Link className="text-primaryColor py-[10px] mt-5 border-none inline-flex md:text-[17px] text-[3.7vw] font-[400] items-center space-x-3" href="">
                        <span>Try it now</span>
                        <Image src={Assets.arrowLeft} alt='' width={17} height={17} />
                    </Link>
                </div>
                <div className='w-full h-auto md:flex space-x-16 relative hidden'>
                    <div className="w-[370px] h-[476px] bg-cover overflow-hidden absolute top-[200px] -left-32">
                        <Image
                            src={Assets.heroImage2}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="w-[350px] h-[476px] bg-cover overflow-hidden absolute right-0">
                        <Image
                            src={Assets.heroImage}
                            alt=""
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
