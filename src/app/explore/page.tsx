"use client";
import Link from "next/link";
import React from "react";
import GoogleMaps from "../components/GoogleMap";

const Explore = () => {
  return (
    <div className="px-5 py-5 space-y-2">
      <div className=" px-5 mt-7">
        <div className="flex lg:justify-between max-md:flex-col max-md:gap-2">
          {" "}
          <h1 className="font-medium lg:text-[2rem] max-md:text-[1rem] text-black leading-[100%] mt-5">
            Explore Business
          </h1>
          <Link
            href="#"
            className="py-2 w-[188px] h-[44px] rounded-[5px] bg-[#34A853] text-[1rem] text-white text-center font-medium"
          >
            + Add Business
          </Link>
        </div>
      </div>
      <GoogleMaps />
    </div>
  );
};

export default Explore;
