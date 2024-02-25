import React, { useState } from 'react'
import { IoMdStar } from "react-icons/io";
import { CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function ProductCard({ props }) {
    const [isVisible, setIsVisible] =  useState(false);
    const [selectHeart, setSelectHeart] =  useState(false);
    const HeartStyle = ` rounded-full p-2 hover:opacity-60 transition ${selectHeart === true ? "bg-color_dark_pink" : "bg-white"} text-color_black text-xl`
    let overflowIcons = `absolute top-0 left-0 h-full gap-2 z-10 justify-center items-center transition w-full bg-black_gradient ${isVisible === true ? "flex" : "hidden"}`

    return (
        <div onMouseOver={() => setIsVisible(true)} onMouseOut={() => setIsVisible(false)} 
        className='flex flex-col gap-2 justify-between md:h-[45vh] group/scale h-[30vh] overflow-hidden relative border-[1px] p-6 rounded-sm border-gray-300'>

            {/* Overflow Icons */}
            <div className={overflowIcons}>
                <Link onClick={() => selectHeart === false && setSelectHeart(true) || selectHeart === true && setSelectHeart(false)} className={HeartStyle} >
                    <CiHeart />
                </Link>
                <Link className='bg-white rounded-full p-2 hover:opacity-60 transition text-color_black text-xl'>
                    <CiShoppingCart />
                </Link>
                <Link className='bg-white rounded-full p-2 hover:opacity-60 transition text-color_black text-xl'>
                    <CiSearch />
                </Link>
            </div>
            <div className='h-[55%] w-[80%] mx-auto my-auto'>
                <img className=' group-hover/scale:scale-[1.1] transition  h-full w-full' src={props.image} alt="" />
            </div>
            <div className='flex items-start flex-col gap-2'>
                <span className='text-[10px] font-bold text-color_dark_pink ' >{props.category.toUpperCase()}</span>
                <p className='text-[12px] text-ellipsis whitespace-nowrap overflow-hidden w-[80%]'>{props.title}</p>
            </div>
            <div className='flex items-center gap-1'>

                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />

            </div>
            <div className='flex items-center gap-6'>
                <span className='font-bold text-sm'>₹{Math.floor(props.price)}</span>
                <span className=' line-through text-gray-300 text-sm'>₹{Math.floor(props.price)}</span>
            </div>

            
        </div>
    )
}

export default ProductCard