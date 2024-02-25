import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { product } from "../data";
import ProductView from "../components/ProductView";
import Footer from "../components/Footer";
import { PiArrowLeft, PiShare } from "react-icons/pi";

function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];

  return (
    <div>
      <div className=" hidden md:block">
        <Announcement />
      </div>
      <div className=" hidden md:block">
        <Navbar />
      </div>

      {/* Navigation */}
      <div className="md:h-12 md:hidden h-16 px-6 my-2 tracking-wide w-full flex items-center justify-between md:justify-center  md:text-sm ">
        <PiArrowLeft cursor="pointer" fontSize="2rem" />
        <button className=" bg-black text-white hover:opacity-60 transition font-semibold md:py-3 py-2 whitespace-nowrap text-center w-[140px] md:w-[100px] md:px-16 rounded-lg">
          Add to Cart
        </button>
      </div>

      {/* Product Content  */}
      <div className=" md:mt-12">
        {/* Top Content OF Product */}
        <ProductView />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Product;
