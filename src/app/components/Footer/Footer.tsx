import Assets from "@/constants/assets.constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-secondaryColor h-[360px] px-[60px] py-[100px] w-full">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-3">
            <h1 className="text-[21px] font-[700] text-white leading-tight">SHORT LINE ABOUT US <br /> THREE WORDS HERE</h1>
            <p className="text-white text-[13px] font-[500]">Short sentence here</p>
          </div>
        </div>
    </div>
  );
}
