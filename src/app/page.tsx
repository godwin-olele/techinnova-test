"use client"

import Assets from '@/constants/assets.constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Marquee from "react-fast-marquee";
import Footer from './components/Footer/Footer'
import useAppTheme from '@/hooks/theme.hook'
import MobileNavbar from './components/Navbar/MovileNavbar'

export default function Home() {
  const { isMobile } = useAppTheme();

  return (
    <div className="overflow-x-hidden">
      {!isMobile ? (
        <Navbar />
      ) : (
        <MobileNavbar />
      )}
      <Hero />
      <div className="w-full bg-[#EFEFEF] h-auto md:px-[60px] px-5 py-[100px] flex justify-between md:space-x-40 space-x-0 space-y-16 md:space-y-0 flex-col md:flex-row">
      <div className="relative">
          <div className="bg-primaryColor md:w-[537px] md:h-[604px] w-full h-[300px] relative rotate-2" />
          <div className="bg-cover overflow-hidden absolute right-0 left-0 top-0 bottom-0">
            <Image
              src={Assets.career}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="md:py-14 py-0">
          <h1 className='poppins md:text-[38px] text-[6vw] font-[700] text-secondaryColor leading-tight md:w-[30vw] w-full'>
            YOUR CAREER IS IN YOUR HANDS
          </h1>
          <div className="space-y-8 text-secondaryColor md:text-[19px] text-[4vw] font-[400] poppins mt-5 md:pr-10">
            <p>
              Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.
            </p>
            <p>
              Figma files can also be downloaded from our store. These files include the latest Figma features and are synced
            </p>
            <p>
              Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.
            </p>
          </div>
          <Link className="text-secondaryColor mx-auto justify-center md:justify-start py-[10px] mt-5 border-none inline-flex md:text-[17px] text-[3.7vw] font-[400] items-center space-x-3" href="">
            <span>Try it now</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
              <path d="M15.75 7.27435L0.75 7.27435" stroke="#1A1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.7002 13.2988L15.7502 7.27476L9.7002 1.24976" stroke="#1A1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full bg-[#EFEFEF] h-auto flex justify-between md:flex-row flex-col-reverse">
        <div className="bg-[#e1f06a] w-full md:px-[60px] py-[100px] relative px-5">
          <div className="w-full bg-cover overflow-hidden absolute right-0 left-0 top-0 bottom-0 md:block hidden">
            <Image
              src={Assets.statLine}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="md:absolute md:pr-10">
            <h1 className='poppins md:text-[38px] text-[6vw] font-[700] text-secondaryColor leading-tight md:w-[30vw] w-full'>
              USE YOUR STATS TO MAKE MOVES
            </h1>
            <div className="space-y-8 text-secondaryColor md:text-[19px] text-[4vw] font-[400] poppins mt-5 md:pr-10">
              <p>
                Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.
              </p>
              <p>
                Figma files can also be downloaded from our store. These files include the latest Figma features and are synced
              </p>
              <p>
                Figma files can also be downloaded from our store. These files include the latest Figma features and are synced with the Webflow template.
              </p>
            </div>

            <Link className="text-secondaryColor py-[10px] mt-5 border-none inline-flex md:text-[17px] text-[3.7vw] font-[400] items-center space-x-3" href="">
              <span>Try it now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path d="M15.75 7.27435L0.75 7.27435" stroke="#1A1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.7002 13.2988L15.7502 7.27476L9.7002 1.24976" stroke="#1A1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative bg-[#101314] flex justify-center items-center py-[100px] md:pr-[60px] md:pl-[80px] px-5">
          <div className="bg-cover overflow-hidden ">
            <Image
              src={Assets.statSvg}
              alt=""
              width={1300}
              height={1300}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* Help Artist */}
      <div className="md:px-[60px] px-5 w-full relative h-[600px] bg-center bg-[url('https://res.cloudinary.com/dtuims4ku/image/upload/v1705995001/hero-bg_assozn.svg')] bg-cover bg-no-repeat">
        <div className="w-full bg-cover overflow-hidden absolute right-0 left-0 top-0 bottom-0 z-10">
          <Image
            src={Assets.gradient}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center space-x-20 absolute bottom-[60px] md:right-0 right-5 md:left-[60px] left-5">
          <div className="w-full h-auto z-20">
            <h1 className="text-white md:text-[32px] text-[6vw] font-[700] leading-tight poppins md:w-[30vw] w-full mb-10">‘‘WE HELP ARTISTS FIND THEIR FANS’’</h1>
            <p className="text-[#6F767E] poppins md:text-[19px] text-[4vw] font-[500] md:w-[35vw] w-full">Figma files can also be downloaded from our store. These files include the latest Figma features and are synced </p>
          </div>
          <div className="md:w-[32vw] w-full h-auto space-x-5 flex md:justify-end mt-10 md:mt-0">
            <Marquee>
              <div className="w-[160px] h-[160px] bg-cover overflow-hidden mr-5">
                <Image
                  src={Assets.image1}
                  alt=""
                  width={1000}
                  height={1000}
                  objectFit="cover"
                />
              </div>
              <div className="w-[160px] h-[160px] bg-cover overflow-hidden mr-5">
                <Image
                  src={Assets.image2}
                  alt=""
                  width={1000}
                  height={1000}
                  objectFit="cover"
                />
              </div>
              <div className="w-[160px] h-[160px] bg-cover overflow-hidden mr-5">
                <Image
                  src={Assets.image3}
                  alt=""
                  width={1000}
                  height={1000}
                  objectFit="cover"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>

      {/* Join Artist */}
      <div className="bg-[#101314] w-full h-auto md:px-[60px] px-5 md:pt-[150px] md:pb-[150px] py-[100px] relative">
        <div className="w-[200px] overflow-hidden absolute left-0 top-0 bottom-0 z-10 md:block hidden">
          <Image
            src={Assets.gradientLeft}
            alt=""
            layout="fill"
          />
        </div>
        <div className="w-[200px] overflow-hidden absolute right-0 top-0 bottom-0 z-10  md:block hidden">
          <Image
            src={Assets.gradientRight}
            alt=""
            layout="fill"
          />
        </div>

        <div className="mx-auto w-full flex flex-col justify-center items-center space-y-2">
          <h1 className="md:text-[38px] text-[6vw] font-[700] leading-tight text-white text-center poppins">JOIN TOP ARTISTS, <br /> BUILD YOUR <span className="text-primaryColor">FANBASE</span></h1>
          <p className="text-[#6F767E] poppins md:text-[16px] text-[3.5vw] font-[500] md:w-[500px] w-full text-center">Figma files can also be downloaded from our store. These files include the latest Figma features and are synced</p>
        </div>

        <div className="mt-20 h-auto">
          <div className="w-full h-auto space-x-5 flex justify-between">
            <div className="w-[220px] h-[220px] bg-cover overflow-hidden rounded-full">
              <Image
                src={Assets.artist1}
                alt=""
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>
            <div className="w-[220px] h-[220px] bg-cover overflow-hidden rounded-full">
              <Image
                src={Assets.artist2}
                alt=""
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>
            <div className="w-[220px] h-[220px] bg-cover overflow-hidden rounded-full">
              <Image
                src={Assets.artist3}
                alt=""
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>
          </div>

          <div className="w-full h-auto space-x-5 flex justify-around">
            <div className="w-[220px] h-[220px] bg-cover overflow-hidden rounded-full">
              <Image
                src={Assets.artist4}
                alt=""
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>
            <div className="w-[220px] h-[220px] bg-cover overflow-hidden rounded-full">
              <Image
                src={Assets.artist5}
                alt=""
                width={1000}
                height={1000}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
