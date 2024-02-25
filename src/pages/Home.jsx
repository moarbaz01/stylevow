import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { Link } from "react-router-dom";
import CategoriesBoxes from "../components/CategoriesBoxes";
import { PiKeyReturn } from "react-icons/pi";
import { CiDiscount1, CiDeliveryTruck, CiHeadphones } from "react-icons/ci";
import Products from "../components/Products";
import DealOfTheDay from "../components/DealOfTheDay";
import Footer from "../components/Footer";
import BottomNavbar from "../components/BottomNavbar";
import Sidebar from "../components/Sidebar";
// import CarouselComponent from "../components/CarouselComponent";

function Home() {
  const [hide, setHide] = useState(false);
  return (
    <div>
      <div className="">
        <Announcement />
        <Navbar />
        <BottomNavbar />
        <Sidebar hide={hide} />

        {/* Show Pages */}
        <div className="max-w-[1080px] hidden md:block mx-auto border-b-[1px] py-2 border-gray-200">
          <ul className="flex items-center justify-center">
            <li className="px-4 py-2 text-sm hover:text-color_dark_pink transition">
              <Link>Home</Link>
            </li>
            <li className="px-4 py-2 text-sm hover:text-color_dark_pink transition">
              <Link>Categories</Link>
            </li>
            <li className="px-4 py-2 text-sm hover:text-color_dark_pink transition">
              <Link>Mens</Link>
            </li>
            <li className="px-4 py-2 text-sm hover:text-color_dark_pink transition">
              <Link>Women</Link>
            </li>
            <li className="px-4 py-2 text-sm hover:text-color_dark_pink transition">
              <Link>Accessories</Link>
            </li>
            <li className="px-4 py-2 text-sm hover:text-color_dark_pink transition">
              <Link>Shoes</Link>
            </li>
            <li className="px-4 py-2 text-sm hover:text-color_dark_pink transition">
              <Link>Contact</Link>
            </li>
            <li className="px-4 py-2 text-sm hover:text-color_dark_pink transition">
              <Link>About</Link>
            </li>
          </ul>
        </div>

        {/* Banner */}
        <div className="max-w-[1080px] hidden mx-auto bg-heroPageBanner h-[40vh] md:h-[70vh] md:flex justify-center items-center bg-cover bg-center bg-no-repeat my-4 rounded-md">
          <div className="flex items-start h-auto p-6 w-[80%] rounded-lg md:rounded-none md:h-full md:w-full justify-center md:pl-16 gap-4 flex-col bg-white_gradient md:bg-transparent">
            <span className=" text-color_dark_pink font-semibold text-xl md:text-4xl">
              Trending Accessories
            </span>
            <h1 className="text-3xl md:text-5xl font-[600] w-[40%] ">
              MORDERN SUNGLASSES
            </h1>
            <p className="text-2xl hidden md:block font-[400] text-gray-400">
              starting at{" "}
              <span className="text-3xl font-bold text-gray-400">₹ 99</span>
            </p>
            <div>
              <button className="bg-color_dark_pink text-white py-2 px-6 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        {/* <CarouselComponent /> */}

        {/* Instructions */}

        <div className="max-w-[1080px] hidden md:flex  md:items-center grid-cols-2 grid-rows-2 gap-4 px-4 md:py-4 py-2 md:justify-around mx-auto">
          <div className="flex items-center flex-col text-center  gap-1 ">
            <CiDeliveryTruck className="mr-2  text-xl" />
            <span className="text-[12px] md:text-sm text-gray-600">
              Free Shipping
            </span>
          </div>
          <div className="flex items-center flex-col text-center gap-1 ">
            <PiKeyReturn className="mr-2 text-xl" />
            <span className=" text-[12px] md:text-sm text-gray-600">
              10 Days Easy Returns
            </span>
          </div>
          <div className="flex items-center flex-col text-center gap-1 ">
            <CiHeadphones className="mr-2 text-xl" />
            <span className=" text-[12px] md:text-sm text-gray-600">
              24/7 Customer Support
            </span>
          </div>
          <div className="flex items-center flex-col text-center  gap-1">
            <CiDiscount1 className="mr-2 text-xl" />
            <span className=" text-[12px] md:text-sm text-gray-600">
              Member Discount
            </span>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-[1080px] mx-auto my-12">
          <h1 className="text-center text-black text-2xl font-[500]  ">
            Shop By Category
          </h1>
          <CategoriesBoxes />
        </div>

        {/* New Arrivals */}
        <div className="max-w-[1080px] mx-auto">
          <h1 className="text-2xl my-8 text-center md:text-start border-b-[1px] border-gray-200 pb-4">
            New Arrivals
          </h1>
          <Products limit={8} />
          <div className="my-8 text-center">
            <button className="bg-color_dark_pink py-2 hover:bg-color_pink transition text-white rounded-sm text-sm px-6 ">
              View All
            </button>
          </div>
        </div>

        {/* Deal Of The Day */}
        <div className="max-w-[1080px] mx-auto my-12">
          <h1 className="text-2xl my-8 text-center md:text-start border-b-[1px] border-gray-200 pb-4">
            Deal Of The Day
          </h1>
          <DealOfTheDay />
        </div>

        {/* Top Rated */}
        <div className="max-w-[1080px] mx-auto">
          <h1 className="text-2xl my-8 text-center md:text-start border-b-[1px] border-gray-200 pb-4">
            Top Rated
          </h1>
          <Products limit={8} />
          <div className="my-8 text-center">
            <button className="bg-color_dark_pink py-2 hover:bg-color_pink transition text-white rounded-sm text-sm px-6 ">
              View All
            </button>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
