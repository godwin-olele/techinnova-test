'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { useRouter } from 'next/navigation';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Link from 'next/link';
import useAppTheme from '@/hooks/theme.hook';


export default function MobileNavbar({ nav, setNav }: any) {
    const router = useRouter();

    const {isMobile} = useAppTheme();


    return (
        <div className="bg-[#101314] px-4 py-[16px] flex items-center justify-between w-full">
            <div className="flex space-x-2.5 items-center">
                <Image src={Assets.logo} alt="Logo" width={50} height={50} />
            </div>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer z-10 text-white md:hidden"
            >
                {nav ? <MdClose size={25} /> : <HiOutlineMenuAlt3 size={25} />}
            </div>
        </div>
    );
}
