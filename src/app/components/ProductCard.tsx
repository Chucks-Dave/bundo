import React from "react";
import Image from "next/image";

export type Product = {
  _id: number;
  vendorId?: string;
  name?: string;
  image: string;

  address?: string;
  categories?: [];
  description: string;
  total_ratings?: number;
  total_reviews?: string;

  business_profile_picture?: string;
  products_services?: {
    _id: string;
    name: string;
    description: string;
    cost: string;
    pictures: string[];
  }[];
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const cost =
    product.products_services && product.products_services.length > 0
      ? product.products_services[0].cost
      : null;

  return (
    <div className="w-full bg-white border border-[#D9D9D9] px-3 py-5 rounded-[8px] space-y-3">
      <div className="bg-[#E3E3E3] w-full rounded-[8px] relative">
        {product.business_profile_picture ? (
          <Image
            src={product.business_profile_picture}
            height={189}
            width={180}
            alt={product.name ?? ``}
            className="flex items-center justify-self-center "
          />
        ) : (
          <Image
            src="/image 1.png"
            height={183.05}
            width={121.94}
            alt="Business Profile"
            className="flex items-center justify-self-center"
          />
        )}
        <div className="relative lg:bottom-5 max-md:bottom-1">
          <Image
            src="/heart.svg"
            height={16}
            width={16}
            alt="bundo"
            className=" right-3 bottom-32  bg-white absolute size-[18px] rounded-full px-1 py-1"
          />
        </div>
      </div>
      <p className="font-medium lg:text-sm max-md:text-[10px] text-[#1E1E1E]">
        {product.name}
      </p>
      <p className="lg:text-[12px] max-md:text-[10px] font-normal text-[#1E1E1E]">
        {product.description}
      </p>
      <div className="flex gap-2 items-center">
        {product.total_ratings && product.total_ratings > 0 && (
          <div className="flex gap-1 items-center">
            {Array.from({ length: product.total_ratings }, (_, i) => (
              <Image
                key={i}
                src="/star_filled.svg"
                height={16}
                width={16}
                alt="rating"
              />
            ))}
          </div>
        )}
        <p className="font-normal text-[12px] text-black">
          ({product.total_reviews})
        </p>
      </div>
      <p className="font-normal lg:text-[15px] max-md:text-[12px] text-black">
        {cost ? `₦${cost}` : "Price not available"}
      </p>
    </div>
  );
};

export default ProductCard;
