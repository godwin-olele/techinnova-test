import Assets from "@/constants/assets.constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-primaryColor mt-20 h-[360px] p-16 flex items-center space-x-[200px] w-full">
        <div className="space-y-8">
          <Image
            src={Assets.footerlogo}
            alt=""
            width={250}
            height={250}
          />
          <div className="flex space-x-7">
            <Image src={Assets.facebooklogo} alt="facebook" />
            <Image src={Assets.twitter} alt="twitter" />
            <Image src={Assets.insta} alt="instagram" />
            <Image src={Assets.message} alt="message" />
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="flex space-x-10 text-[#ffffff] font-[500] text-xl poppins">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">What we offer </Link>
            </li>
            <li>
              <Link href="">Reviews</Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
