import React, { useState } from "react";
import {
  CiUser,
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiHome,
} from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";

function Navbar({ home }) {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className=" bg-white z-[9999] border-b-[1px] border-gray-200 mx-auto">
      <div className="px-4 max-w-[1200px] hidden mx-auto py-4 md:flex items-center  justify-between">
        {/* Logo */}
        <div className="text-3xl hidden md:block tracking-wide my-2 md:my-0 font-bold">
          StyleVow
        </div>

        {/* Search Bar */}
        <div className="flex items-center h-[46px] w-[263px] md:w-[50%] my-2 md:my-0 bg-white hover:border-gray-200 hover:bg-white border-[1px]  px-2 md:py-1 py-2 rounded-md">
          <input
            type="text"
            className="md:flex-[4] bg-transparent border-none outline-none placeholder:text-sm"
            placeholder="Enter your product name..."
          />
          <CiSearch className="text-lg cursor-pointer" />
        </div>

        {/* Icons */}
        <div className="flex items-center">
          <div
            onMouseOut={() => setShowProfile(false)}
            onMouseOver={() => setShowProfile(true)}
            className="px-2 py-2 hidden md:block text-2xl relative cursor-pointer"
          >
            <CiUser />
            {showProfile === true && (
              <ul className="flex flex-col items-start transition-opacity absolute py-6 px-4 pr-10 gap-2 z-[50] before:h-1 before:w-6 before:bg-color_dark_pink before:-top-1 rounded-tl-none before:left-0 before:absolute bg-white border-[1px] rounded-sm top-10">
                <li className=" hover:text-color_dark_pink transition">
                  <Link className="text-sm flex items-center gap-2">
                    <MdOutlineArrowRight />
                    <span>Account</span>
                  </Link>
                </li>
                <li className=" hover:text-color_dark_pink transition">
                  <Link className="text-sm flex items-center gap-2">
                    <MdOutlineArrowRight />
                    <span>Orders</span>
                  </Link>
                </li>

                <li className=" hover:text-color_dark_pink transition">
                  <Link className="text-sm flex items-center gap-2">
                    <MdOutlineArrowRight />
                    <span>Logout</span>
                  </Link>
                </li>
                <li className=" hover:text-color_dark_pink transition">
                  <Link className="text-sm flex items-center gap-2">
                    <MdOutlineArrowRight />
                    <span>Signup</span>
                  </Link>
                </li>
                <li className=" hover:text-color_dark_pink transition">
                  <Link className="text-sm flex items-center gap-2">
                    <MdOutlineArrowRight />
                    <span>Login</span>
                  </Link>
                </li>
                <li className=" hover:text-color_dark_pink transition">
                  <Link className="text-sm flex items-center gap-2">
                    <MdOutlineArrowRight />
                    <span>Notifications</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {!home && (
            <div className="px-2 text-2xl relative cursor-pointer">
              <CiHeart />
              <div className="h-4 text-sm  text-white rounded-full w-4 p-1 absolute top-0 animate-bounce right-1 bg-color_pink hidden items-center justify-center">
                <span>0</span>
              </div>
            </div>
          )}

          {home === true && (
            <div className="px-2 text-2xl relative cursor-pointer">
              <CiHome />
            </div>
          )}
          <div className="px-2 text-2xl relative cursor-pointer">
            <CiShoppingCart />
            <div className="h-4 text-sm text-white rounded-full w-4 p-1 absolute animate-bounce top-0 right-1 bg-color_pink hidden items-center justify-center">
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {/* Phone Navbar */}
      <div className="px-4 max-w-[380px] mx-auto py-4 md:hidden flex items-center justify-between">
        {/* Input */}
        <div className="flex items-center h-[46px] max-w-[260px] my-2 bg-white hover:border-gray-200 hover:bg-white border-[1px]  md:py-1 py-2 rounded-md">
          <input
            type="text"
            className="bg-transparent border-none outline-none placeholder:text-sm"
            placeholder="Search"
          />
          <CiSearch className="text-lg cursor-pointer" />
        </div>
        {/* Icons */}
        <div className="flex items-center">
          
          <div className="px-2 text-2xl relative cursor-pointer">
            <CiHeart />
          </div>
          <div className="px-2 text-2xl relative cursor-pointer">
            <CiShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
