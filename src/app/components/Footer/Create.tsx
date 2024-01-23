import React from "react";

export default function Create() {
  return (
    <>
      <div className="bg-[#fff0ef] mt-28 h-auto space-y-10 flex flex-col justify-center items-center py-14">
        <div className="text-center">
          <h1 className="text-[#131313] text-[48px] font-bold roboto leading-tight">
            Create Your Store, it`s easy.
          </h1>
          <p className="text-[#6E6E6E] text-[18px] font-[500] poppins">
            No credit card required
          </p>
        </div>
        <button className="text-white font-bold items-center px-20 py-4  rounded-md bg-primaryColor mb-14">
          Create your own merch
        </button>
      </div>
    </>
  );
}
