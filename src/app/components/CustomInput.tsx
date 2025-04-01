import React from "react";
import Image from "next/image";

type props = {
  placeholder?: string;
};

const CustomInput = ({ placeholder }: props) => {
  return (
    <div className="relative">
      <input
        className="lg:w-[484px] max-md:w-full py-3 px-3 h-[48px] border-[#C8C8C8] rounded-[5px] text-[12px] leading-[22px] border focus:outline-none bg-[#DEF2FB4D]"
        placeholder={placeholder}
      />
      <Image
        src="/Layer.svg"
        height={16}
        width={16}
        alt="bundo"
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
      />
    </div>
  );
};

export default CustomInput;
