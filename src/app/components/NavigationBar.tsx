"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CustomButton } from "./CustomButton";
import CustomInput from "./CustomInput";
import Dropdown from "./dropdown";
import Link from "next/link";

const categories = [
  "Appliances & Electronic",
  "Jewelry & Accessories",
  "Bags & Luggage",
  "Home & Kitchen",
  "Fashion and Clothing",
  "Sports & Outdoors",
  "Beauty & Health",
  "Automotive",
  "Business, Industry & Science",
  "Tools & Home Improvement",
  "Toys & Games",
  "Office & School Supplies",
  "Arts, Crafts & Sewing",
  "Health & Household",
];

const NavigationBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [help, sethelp] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  const togglehelp = () => {
    sethelp((prev) => !prev);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="pt-5 bg-white drop-shadow-[#091E424F] w-full border px-5 py-8 border-[#091E424F]">
      <main className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="md:hidden flex ">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                ""
              ) : (
                <Image src="/Menu.png" height={24} width={24} alt="bundo" />
              )}
            </button>
          </div>
          <Link href="/" className="cursor-pointer">
            <Image src="/FullLogo.svg" height={23.7} width={94} alt="bundo" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3 flex-1">
          <div className="relative flex gap-2 ">
            <Dropdown
              label="Categories"
              isOpen={dropdownOpen}
              onClick={toggleDropdown}
            />
            {dropdownOpen && (
              <div className="mt-8 p-4 border rounded bg-white absolute">
                <p>Dropdown content here</p>
              </div>
            )}
            <Dropdown label="Help" isOpen={help} onClick={togglehelp} />
            {help && (
              <div className="mt-8 p-4 border rounded bg-white absolute left-5 right-5">
                <p>Dropdown content here</p>
              </div>
            )}
          </div>
          <CustomInput placeholder="Search for anything...." />
          <CustomButton size="lg">Sell on Bundo</CustomButton>
          <CustomButton variant="outline">Vendor’s Store</CustomButton>
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/Avatar.png"
              height={24}
              width={24}
              alt="bundo"
              className="rounded-full"
            />
            <p className="text-[12px] font-normal leading-[100%] text-[#808080]">
              Account & Orders
            </p>
            <Image
              src="/Avatar.svg"
              height={16}
              width={16}
              alt="bundo"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="flex gap-3 items-center lg:hidden">
          <Image
            src="/framer.png"
            height={30}
            width={30}
            alt="bundo"
            className={`${
              isMobileMenuOpen === true ? (
                "hidden"
              ) : (
                <Image
                  src="/framer.png"
                  height={30}
                  width={30}
                  alt="bundo"
                  // className={`${isMobileMenuOpen === true ? "" : "hidden"} `}
                />
              )
            } `}
          />
          <Image
            src="/cart.svg"
            height={30}
            width={30}
            alt="bundo"
            className="rounded-full"
          />
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <Image src="/close.png" height={24} width={24} alt="bundo" />
            ) : (
              ""
            )}
          </button>
        </div>
      </main>

      {isMobileMenuOpen && (
        <div className="mt-4 md:hidden w-full px-5 py-5 bg-white space-y-3 drop-shadow-[#091E424F] shadow-lg ">
          <div className="flex flex-col gap-3 items-center ">
            <CustomButton variant="outline">Sign-In</CustomButton>
            <CustomButton size="lg">Sell on Bundo</CustomButton>
            <CustomButton variant="outline">Vendor’s Store</CustomButton>
          </div>
          <h1 className="font-medium text-[18px] text-[#34A853] leading-[20px] mt-3">
            Categories
          </h1>

          <ul className="space-y-1">
            {categories.map((category, index) => (
              <li key={index}>
                <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-gray-50 rounded-md">
                  <span className="font-light text-[12px]">{category}</span>
                  <p className="text-black w-[8.52px] h-[5.8px]">{">"}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavigationBar;
