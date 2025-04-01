"use client";

import React from "react";
import Image from "next/image";

interface DropdownTriggerProps {
  label: string;
  isOpen?: boolean;
  onClick: () => void;
  className?: string;
}

export default function Dropdown({
  label,
  isOpen = false,
  onClick,
  className = "",
}: DropdownTriggerProps) {
  return (
    <div className="space-y-2">
      <div className={`flex items-center gap-1 ${className}`}>
        <p className="text-[#333333] font-normal text-[14px] leading-[100%]">
          {label}
        </p>
        <button
          type="button"
          onClick={onClick}
          className="cursor-pointer focus:outline-none"
        >
          <Image
            src="/chevrondown.svg"
            height={24}
            width={24}
            alt="Dropdown Icon"
            className={isOpen ? "transform rotate-180" : ""}
          />
        </button>
      </div>
    </div>
  );
}
