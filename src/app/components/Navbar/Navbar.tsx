'use client';
import React from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="py-[24px] px-[60px] z-50 bg-[#101314]">
      <div className="w-full flex justify-between items-center">
        <Link href={"/"}>
          <div>
            <Image
              src={Assets.logo}
              alt="logo"
              width={60}
              height={60}
            />
          </div>
        </Link>

        <div className="hidden md:block">
          <ul className="flex space-x-24 text-white font-[400] text-[16px] leading-tight">
            <li>
              <Link href="">Features</Link>
            </li>
            <li>
              <Link href="">News</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <div className="flex justify-center space-x-4 font-[500] poppins">
            <Link className="text-primaryColor px-10 py-3 border border-primaryColor text-[16px] font-[500]" href="">
              Sign up
            </Link>
            <Link className="text-secondaryColor px-10 py-3 bg-primaryColor text-[16px] font-[500]" href="">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
