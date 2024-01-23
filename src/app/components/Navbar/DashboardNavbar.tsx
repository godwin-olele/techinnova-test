'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Assets from '@/constants/assets.constant';
import { getSubPathName } from '@/utils';
import useGlobalState from '@/hooks/globalstate.hook';
import useAppTheme from '@/hooks/theme.hook';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { profileLogoutAction } from '@/store/profile.slice';
import { useRouter } from 'next/navigation';
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";

export default function DashboardNavbar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const subpath = getSubPathName();
  const { profile } = useGlobalState();
  const { isMobile } = useAppTheme();
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Dashboard",
      href: '/dashboard'
    },
    {
      id: 2,
      link: "Transactions",
      href: '/dashboard/transactions'
    },
    {
      id: 3,
      link: "Raffle",
      href: '/dashboard/raffle'
    },
    {
      id: 4,
      link: "Referrals",
      href: '/dashboard/referrals'
    },
    {
      id: 5,
      link: "Leaderboard",
      href: '/dashboard/leaderboard'
    },
  ];


  const fullName = `${profile.firstName || 'Godwin'} ${profile.lastName || 'Daniel'}`;

  const logout = () => {
    dispatch(profileLogoutAction());
    router.push('/login');
  };

  return (
    <>
      <div className="min-h-[76px] max-h-[76px] bg-white md:pl-7 md:pr-10 px-5 flex items-center justify-between relative">
        <div className="flex justify-between items-center w-full">
        <div>
      <div className="relative">
        <input
          type='text'
          id=''
          value={''}
          onChange={undefined}
          className="text-gray-900 text-[16px] rounded-[12px] outline-none w-[300px] px-4 py-3"
          style={{background: 'rgba(204, 204, 204, 0.20)'}}
          placeholder='Search by categories'
        />
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'>
          <IconContext.Provider value={{ color: "#495057", size: "20px" }}>
            <div>
              <AiOutlineSearch />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
          <div className="flex items-center space-x-3 cursor-pointer">
            <div
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/7225778/pexels-photo-7225778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "50px",
                height: "50px",
                borderRadius: '100%'
              }}
            />
            <div className="">
              <p className="text-[18px] font-[500] leading-tight roboto" style={{ color: 'rgba(19, 19, 19, 0.70)' }}>{fullName}</p>
            </div>
          </div>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 md:hidden"
        >
          {nav ? <MdClose size={25} /> : <HiOutlineMenuAlt3 size={25} />}
        </div>
      </div>

      {nav && isMobile && (
        <div className="w-[50vw] h-[60vh] bg-[#050b13] absolute right-5 top-14 bottom-5 rounded-[20px] z-50 shadow-md p-4">
          <div className="mt-5 flex flex-col">
            {links.map(({ id, link, href }) => (
              <div
                key={id}
                className="px-4 cursor-pointer text-white py-5 text-[3.7vw]" onClick={() => router.push(href)} >
                {link}
              </div>
            ))}
            <div onClick={logout} className="px-4 cursor-pointer text-white py-4 text-[3.7vw] bg-[#ff353521] rounded-[14px]">
              <p className="leading-tight">Logout</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
