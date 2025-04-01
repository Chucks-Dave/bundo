"use client";
import Image from "next/image";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 max-md:px-5  gap-5"
        aria-expanded={isOpen}
      >
        <h3 className="font-bold lg:text-[18px] max-md:text-[12px] lg:leading-[100%] text-[#11270B]">
          {question}
        </h3>
        <div className="flex h-6 w-6 items-center justify-center rounded-full  cursor-pointer">
          {isOpen ? (
            <Image src="/ArrowDown.svg" height={25} width={25} alt="" />
          ) : (
            <Image src="/ArrowDown.svg" height={25} width={25} alt="" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-neutral-700 max-md:text-[12px] px-5">{answer}</p>
        </div>
      )}
      <div className="border-b border-dashed border-[#889385] border" />
    </div>
  );
}
