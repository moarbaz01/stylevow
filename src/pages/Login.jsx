import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbPassword } from "react-icons/tb";
import google from "../assets/images/logo/google.png";
import facebook from "../assets/images/logo/facebook.png";
import logo from "../png/s-high-resolution-logo-white.png";
import { PiArrowLeft } from "react-icons/pi";

function Login() {
  return (
    <div>
      <Announcement />
      {/* <Navbar /> */}
{/* 
      <div className="md:h-12 md:hidden  my-2 mx-6 w-fit bg-black flex items-center  md:text-sm ">
        <PiArrowLeft className=" text-white" cursor="pointer" fontSize="2rem" />
      </div> */}
      {/* Center of page */}
      <div className="flex md:bg-gray-200 md:py-6 py-12 mx-auto">
        <div className="flex items-center md:w-[40%] w-full mx-auto py-8 px-4 bg-white rounded-sm flex-col justify-center">
         <div className=" h-24 w-24 rounded-lg bg-black p-2 flex items-center justify-center">
         <img className="" src={logo} alt="" />
         {/* STYLEVOW */}
         </div>
          <h1 className="text-lg my-2 font-[600]">Welcome to Stylevow</h1>
          <p className="mb-2 text-sm font-[400] text-gray-400">Sign in to continue</p>
          <form className="flex items-start w-full md:w-[80%] gap-4 my-2 flex-col">
            <div className="flex items-center md:border-b-[0.5px] border-[1px] pl-2  border-gray-200 py-2   md:py-4 w-full">
              <MdEmail className="mr-2" />
              <input
                className="bg-transparent h-[48px] border-none outline-none "
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="flex items-center md:border-b-[0.5px] border-[1px] pl-2  border-gray-200 py-2 md:py-4  w-full">
              <TbPassword className="mr-2" />
              <input
                className="bg-transparent h-[48px] border-none outline-none "
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <input
              className=" bg-black cursor-pointer hover:opacity-80 text-white font-[500] h-[57px] py-2 my-2 w-full "
              type="submit"
              value="LOGIN"
            />
          </form>

          <div className="flex items-center w-full md:w-[80%] gap-2 my-6">
            <div className="h-[0.5px] bg-black flex-1"></div>
            Or
            <div className="h-[0.5px] bg-black flex-1"></div>
          </div>

          {/* Google Icon */}
          <Link className="md:w-[80%]  w-full my-1">
            <button class="inline-flex h-[57px] outline-none w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                class="h-[18px] w-[18px] "
              />
              Continue with Google
            </button>
          </Link>

          <div className="flex items-center md:flex-col mt-4 flex-col-reverse justify-between w-full md:w-[80%]">
            <Link className="text-sm">Create an new account? <span className=" text-color_dark_pink font-bold">sign up</span></Link>
            <Link className="text-sm text-color_dark_pink font-bold my-1 ">Forgot Password?</Link>
          </div>
          {/* Facebook Icon */}
          {/* <Link className='w-[80%] my-1'>
                        <div className='py-2 px-2 border-[1px] border-black flex items-center '>
                            <img src={facebook} className='h-4 w-4' alt="" />
                            <span className='flex-[4] text-center '>Sign in with Facebook</span>
                        </div>
                    </Link> */}
        </div>
      </div>

      {/* Footer */}
      <div className=" hidden md:block">
        <Footer />
      </div>
    </div>
  );
}

export default Login;
