import Assets from '@/constants/assets.constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <div className="w-full bg-[#101314] h-[100vh] pl-[60px] pt-20 relative">
            <div className="w-full h-[100vh] bg-cover overflow-hidden absolute right-0 left-0 top-0">
                <Image
                    src={Assets.heroLine}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex">
                <div className='w-full h-auto'>
                    <h1 className='poppins text-[54px] font-[700] text-white leading-tight'>
                        AN INNOVATIVE PLATFORM THAT <span className='text-primaryColor'>SUPPORTS <br /> ARTISTS.</span>
                    </h1>
                    <p className="text-white text-[19px] font-[400] poppins w-[500px] mt-2">Figma files can also be downloaded from our store. These files include the latest Figma features and are </p>
                    <Link className="text-primaryColor py-[10px] mt-5 border-none inline-flex text-[17px] font-[400] items-center space-x-3" href="">
                        <span>Try it now</span>
                        <Image src={Assets.arrowLeft} alt='' width={17} height={17} />
                    </Link>
                </div>
                <div className='w-full h-auto flex space-x-16 relative'>
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
