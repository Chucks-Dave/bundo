"use client";
import Link from "next/link";

// import NavigationBar from "./components/NavigationBar";
import ProductCard, { Product } from "./components/ProductCard";
import { useEffect, useState } from "react";
import Slider from "./components/SliderContainer";
import DealsSection from "./components/DealsSection";
import { FAQSection } from "./components/faqSection";
import CustomInput from "./components/CustomInput";
// import Footer from "./components/Footer";

const faqData = [
  {
    question: "What is Bundo?",
    answer:
      "Bundo is a platform that helps you manage your projects efficiently. It provides tools for task management, collaboration, and progress tracking all in one place.",
  },
  {
    question: "What kind of businesses can use Bundo?",
    answer:
      "Getting started with Bundo is easy. Simply sign up for an account, create your first project, and invite your team members to collaborate.",
  },
  {
    question: "Must I have a CAC document to use Bundo?",
    answer:
      "Bundo offers both free and premium plans. The free plan includes basic features, while premium plans offer advanced functionality for teams and businesses.",
  },
  {
    question: "What kind of products can I buy on Bundo?",
    answer:
      "Bundo offers both free and premium plans. The free plan includes basic features, while premium plans offer advanced functionality for teams and businesses.",
  },
  {
    question: "Is Bundo free to use?",
    answer:
      "Bundo offers both free and premium plans. The free plan includes basic features, while premium plans offer advanced functionality for teams and businesses.",
  },
  {
    question: "How can I join the team?",
    answer:
      "Bundo offers both free and premium plans. The free plan includes basic features, while premium plans offer advanced functionality for teams and businesses.",
  },
];

export default function Home() {
  const [data, setdata] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  const getproducts = async () => {
    try {
      setloading(true);
      const res = await fetch(
        "https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/"
      );
      const json = await res.json();
      console.log("res", json);

      setdata(json.data);
    } catch (error) {
      console.error("error fetching products", error);
      setError("Error fetching products");
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin w-12 h-12 bg-transparent rounded-full border-4 border-t-[#34A853] border-[#e5e5e5]" />
      </div>
    );
  }
  return (
    <div className=" space-y-3">
      <div className=" px-5 mt-7">
        <div className="space-y-3 lg:hidden">
          <h2 className="text-black text-center font-semibold text-[1rem]">
            Black Friday deals{" "}
          </h2>

          <CustomInput placeholder="Search for anything...." />
        </div>
        <div className="flex justify-between items-center">
          {" "}
          <h1 className="font-medium lg:text-[2rem] text-[1rem] text-center text-black leading-[100%] mt-5">
            Featured Items
          </h1>
          <Link
            href="/explore"
            className="underline text-[#34A853] text-[1rem] text-center font-medium"
          >
            {" "}
            explore
          </Link>
        </div>

        {error ? (
          <div className="text-red-500 flex items-center justify-center h-full mt-8">
            Error loading products .....
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
            {data?.map((product, index) => (
              <ProductCard key={product?._id || index} product={product} />
            ))}
          </div>
        )}
      </div>
      {error ? (
        <div className="text-red-500 flex items-center justify-center h-full mt-8">
          {error}
        </div>
      ) : (
        <>
          <div className="max-md:hidden">
            <Slider products={data} />
          </div>
          {/* <div className="lg:hidden">
            {data?.map((product, index) => (
              <ProductCard key={product?._id || index} product={product} />
            ))}
          </div> */}
        </>
      )}
      <DealsSection />
      <section className="w-full bg-[#F1E9DB] flex  flex-col gap-3 justify-center items-center py-10">
        <h1 className="font-bold lg:text-[62px] text-[2rem] text-center leading-[123%] text-[#11270B]">
          Frequently Asked <span className="text-[#34A853]">Questions</span>
        </h1>
        <p className="text-center font-light max-md:px-2 lg:text-[1rem] text-[12px] leading-[190%] text-[#11270B]">
          Need help? Check out these answers to questions you might
          <br /> have about Bundo. Or send an email to help@bundo.app
        </p>
        <div className="px-16">
          <FAQSection faqs={faqData} />
        </div>
      </section>
    </div>
  );
}
