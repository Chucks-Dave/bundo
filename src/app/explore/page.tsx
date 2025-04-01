"use client";

import React, { useState } from "react";
import GoogleMaps from "../components/GoogleMap";

const Explore = () => {
  const [modal, setmodal] = useState(false);
  const [address, setAddress] = useState("22b joy avenue Algo Estate");
  const [businessName, setBusinessName] = useState("Hair Ventures");
  const [imageLink, setImageLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // console.log({ address, businessName, imageLink });
  };
  return (
    <div className="px-5 py-5 space-y-2">
      <div className=" px-5 mt-7">
        <div className="flex lg:justify-between max-md:flex-col max-md:gap-2">
          {" "}
          <h1 className="font-medium lg:text-[2rem] max-md:text-[1rem] text-black leading-[100%] mt-5">
            Explore Business
          </h1>
          <div
            onClick={() => setmodal(true)}
            className="py-2 w-[188px] h-[44px] cursor-pointer rounded-[5px] bg-[#34A853] text-[1rem] text-white text-center font-medium"
          >
            + Add Business
          </div>
        </div>
      </div>
      <GoogleMaps />
      {modal && (
        <div className="fixed inset-0 flex items-center  z-50 justify-center bg-black/50 px-5">
          <div className="bg-white w-full max-w-md rounded-lg overflow-hidden shadow-xl">
            <div className="relative p-4 border-b border-gray-100">
              <button
                onClick={() => setmodal(false)}
                className="absolute right-4 top-4 text-[#34A853] cursor-pointer"
              >
                X
              </button>
              <h2 className="text-lg font-medium">Add New Business</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div className="space-y-1">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Enter Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="businessName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#34A853] hover:bg-[#34A853] text-white py-2 px-4 rounded-md flex items-center justify-center"
              >
                {" "}
                + Add Address
              </button>

              <div className="space-y-1">
                <label
                  htmlFor="imageLink"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Profile Picture
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                  <input
                    type="text"
                    id="imageLink"
                    placeholder="Image Link"
                    value={imageLink}
                    onChange={(e) => setImageLink(e.target.value)}
                    className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#34A853] hover:bg-[#34A853] text-white py-2 px-4 rounded-md"
              >
                Save Business
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Explore;
