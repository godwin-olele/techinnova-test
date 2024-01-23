import Assets from "@/constants/assets.constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-secondaryColor md:h-[360px] h-auto md:px-[60px] px-5 pt-20 pb-10 md:py-[100px] w-full">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col space-y-3">
          <h1 className="md:text-[21px] text-[4.5vw] font-[700] text-white leading-tight poppins">SHORT LINE ABOUT US <br /> THREE WORDS HERE</h1>
          <p className="text-white md:text-[13px] text-[3.2vw] font-[500]">Short sentence here</p>
        </div>

        <div className="flex md:space-x-20 justify-between mt-10 md:mt-0">
          <h1 className="uppercase text-white md:text-[21px] text-[4.2vw] leading-tight font-[700] poppins">Connect <br /> With <br /> Us</h1>
          <div className="space-y-7">
            <div className="flex space-x-2 items-center cursor-pointer">
              <p className="text-white md:text-[13px] text-[3vw] font-[500] poppins">Twitter</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.91666 7.08329L7.08332 2.91663M7.08332 2.91663H2.91666M7.08332 2.91663V7.08329" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer">
              <p className="text-white text-[13px] font-[500] poppins">Discord</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.91666 7.08329L7.08332 2.91663M7.08332 2.91663H2.91666M7.08332 2.91663V7.08329" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer">
              <p className="text-white text-[13px] font-[500] poppins">Instagram</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.91666 7.08329L7.08332 2.91663M7.08332 2.91663H2.91666M7.08332 2.91663V7.08329" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>

          <div className="space-y-7">
            <div className="flex space-x-2 items-center cursor-pointer">
              <p className="text-white text-[13px] font-[500] poppins">Cookies</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.91666 7.08329L7.08332 2.91663M7.08332 2.91663H2.91666M7.08332 2.91663V7.08329" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-white text-[13px] font-[500] poppins cursor-pointer">Licenses</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.91666 7.08329L7.08332 2.91663M7.08332 2.91663H2.91666M7.08332 2.91663V7.08329" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="flex space-x-2 items-center">
              <p className="text-white text-[13px] font-[500] poppins cursor-pointer">Contact</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2.91666 7.08329L7.08332 2.91663M7.08332 2.91663H2.91666M7.08332 2.91663V7.08329" stroke="white" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="my-7 w-full bg-[#33383F] h-px"></div>

      <div className="flex md:justify-between justify-center items-center flex-col md:flex-row space-y-5">
        <div className="flex md:space-x-20 space-y-7 items-center">
          <div className="flex space-x-5 items-center">
            <p className="text-[#6F767E] text-[9px] poppins font-[400]">2022</p>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                <circle cx="2" cy="2.5" r="2" fill="#6F767E" />
              </svg>
            </div>
            <p className="text-[#6F767E] text-[9px] poppins font-[400]">PLATFORM</p>
          </div>
          {/* <p className="text-[#6F767E] text-[9px] poppins font-[400] hidden md:block">2022</p> */}
        </div>

        <div className="flex md:space-x-32 space-x-10 items-center">
          <p className="text-[#6F767E] text-[9px] poppins font-[400]">TERMS & CONDITIONS</p>
          <p className="text-[#6F767E] text-[9px] poppins font-[400]">PRIVACY POLICY</p>
        </div>
      </div>
    </div>
  );
}
