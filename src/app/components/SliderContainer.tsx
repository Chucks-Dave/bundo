"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ProductCard, { Product } from "./ProductCard";

interface SliderProps {
  products: Product[];
}

export default function Slider({ products }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isAtLeft, setIsAtLeft] = useState(true);
  const [isAtRight, setIsAtRight] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScrollPosition = () => {
      setIsAtLeft(container.scrollLeft === 0);

      setIsAtRight(
        container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
      );
    };

    container.addEventListener("scroll", updateScrollPosition);

    updateScrollPosition();

    return () => container.removeEventListener("scroll", updateScrollPosition);
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="px-5 mt-7 overflow-y-hidden overflow-x-hidden">
      <div className="flex justify-between items-center">
        <h1 className="font-medium text-[2rem] text-black leading-[100%] mt-5">
          Biggest sales
        </h1>
        <div className="flex flex-row gap-3 items-center">
          <button
            onClick={scrollLeft}
            disabled={isAtLeft}
            className={`p-1 ${
              isAtLeft ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          >
            <Image
              src="/chevron-down-circle.svg"
              height={45}
              width={45}
              alt="Scroll Left"
            />
          </button>
          <button
            onClick={scrollRight}
            disabled={isAtRight}
            className={`p-1 ${
              isAtRight ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
          >
            <Image
              src="/chevron-down.svg"
              height={45}
              width={45}
              alt="Scroll Right"
            />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="mt-8 flex gap-2 overflow-x-auto overflow-x-hidden scroll-smooth"
      >
        {products.map((product, index) => (
          <div
            key={product._id || index}
            className="flex-shrink-0 overflow-x-hidden "
            style={{ width: "20%" }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
