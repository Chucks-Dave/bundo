import React from "react";
import Image from "next/image";

const deals = [
  {
    id: 1,
    image: "/image (1).png",
    title: "Beauty& MakeUp",
  },
  {
    id: 2,
    image: "/image (2).png",
    title: "Valentine Special",
  },
  {
    id: 3,
    image: "/image (3).png",
    title: "Easter Hunts",
  },
  {
    id: 4,
    image: "/image (4).png",
    title: "Video Games",
  },
  {
    id: 5,
    image: "/valentine.png",
    title: "Valentine Special",
  },
];

const DealsSection = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-8 max-md:hidden">
      <h2 className="font-medium text-[2rem] leading-[100%] text-black">
        Amazing deals, updated daily
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-8 mt-5">
        {deals.map((deal) => (
          <div key={deal.id} className="flex flex-col">
            <Image
              src={deal.image}
              alt={deal.title}
              height={150}
              width={150}
              className="rounded-full"
            />
            <p className="font-medium text-center text-[14px]  text-[#1E1E1E]">
              {deal.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsSection;
