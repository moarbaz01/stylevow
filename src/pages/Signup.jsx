import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import { FaUser, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import Footer from "../components/Footer";
import google from "../assets/images/logo/google.png";
import facebook from "../assets/images/logo/facebook.png";
import { Link } from "react-router-dom";
import logo from "../png/s-high-resolution-logo-white.png";

function Signup() {
  const [signupData, setSignupData] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    cPassword: "",
    phone: "",
  });

  function saveUserData(e) {
    const { name, value } = e.target;
    setSignupData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(signupData);
  }

  return (
    <div>
      <Announcement />
      {/* <Navbar /> */}

      {/* Center of page */}
      <div className="flex md:bg-gray-200 py-6">
        <div className="flex items-center w-full md:w-[40%] mx-auto py-8 bg-white rounded-sm flex-col justify-center">
        <div className=" h-24 w-24 rounded-lg bg-black p-2 flex items-center justify-center">
         <img className="" src={logo} alt="" />
         {/* STYLEVOW */}
         </div>
          <h1 className="text-lg my-2 font-[600]">Let`s Started</h1>
          <p className="mb-2 text-sm font-[400] text-gray-400">Sign up to continue</p>
          <form className="flex items-start w-[90%] md:w-[80%] gap-4 my-2 flex-col">
            <div className="flex items-center md:border-b-[0.5px] border-[1px] pl-2  border-gray-200 py-2   md:py-4 w-full">
              <FaUser className="mr-2" />
              <input
                className="bg-transparent h-[48px] border-none outline-none  "
                type="text"
                name="fName"
                placeholder="Full name"
              />
            </div>

            <div className="flex items-center md:border-b-[0.5px] border-[1px] pl-2  border-gray-200 py-2  md:py-4 w-full">
              <FaPhone className="mr-2" />
              <input
                className="bg-transparent h-[48px] border-none outline-none "
                type="phone"
                name="phone"
                placeholder="+91 Phone Number"
              />
            </div>

            <div className="flex items-center md:border-b-[0.5px] border-[1px] pl-2  border-gray-200 py-2   md:py-4 w-full">
              <MdEmail className="mr-2" />
              <input
                className="bg-transparent h-[48px] border-none outline-none "
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center md:border-b-[0.5px] border-[1px] pl-2  border-gray-200 py-2 md:py-4 w-full">
              <TbPassword className="mr-2" />
              <input
                className="bg-transparent h-[48px] border-none outline-none "
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center md:border-b-[0.5px] border-[1px] pl-2  border-gray-200 py-2  md:py-4 w-full">
              <TbPassword className="mr-2" />
              <input
                className="bg-transparent h-[48px] border-none outline-none"
                type="text"
                name="cPassword"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex items-center my-2 gap-2">
              <input type="checkbox" name="agree" />
              <span className="text-sm">
                Accept our <span className="text-color_dark_pink">Terms and Conditions</span>
              </span>
            </div>
            <input
              className=" bg-black cursor-pointer hover:opacity-80 text-white font-[500] h-[57px] py-2 my-2 w-full "
              type="submit"
              value="SIGN UP"
            />
          </form>

          <div className="flex items-center w-[80%] gap-2 my-6">
            <div className="h-[0.5px] bg-black flex-1"></div>
            Or
            <div className="h-[0.5px] bg-black flex-1"></div>
          </div>

          {/* Google Icon */}
           {/* Google Icon */}
           <Link className="md:w-[80%] w-[90%] my-1">
            <button class="inline-flex h-[57px] outline-none w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                class="h-[18px] w-[18px] "
              />
              Continue with Google
            </button>
          </Link>
          <Link className="text-sm my-2">Already have an account? <span className=" text-color_dark_pink font-[400]">sign in</span></Link>
        </div>
      </div>

      {/* Footer */}
      {/*Last Footer */}
      <div className=" hidden">
        <div className="flex text-white flex-col md:flex-row bg-black md:px-12 px-4 py-4 items-center justify-between">
          <span className="opacity-50 md:text-lg text-sm text-center">
            @2019 shop-digital-All Rights Reserved ABR
          </span>
          <h1 className="text-2xl md:block hidden">www.style.com</h1>
          <span className="md:flex items-center hidden gap-4">
            <Link className="text-white opacity-50">Privacy Policy</Link>
            <Link classNameName="text-white opacity-50">Terms Condition</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
