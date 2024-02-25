import React from 'react'
import {categoriesData} from '../data'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


function CategoriesBoxes() {
    console.log(categoriesData)
    return (
        <div className='grid md:grid-cols-4 my-6 grid-cols-2 w-[80%] md:w-full md:mx-0 mx-auto grid-row-4 md:grid-rows-2 gap-4'>
            {
                categoriesData.map((category) => {
                    return (
                        <Link key={category.id}  >
                            <div className=' h-32 w-[100%] flex items-center flex-col md:flex-row border-b-2 border-[1px] border-color_dark_pink rounded-md shadow-sm  justify-around'>
                                <img src={category.url} className='md:h-[80%] h-[50%] md:w-[50%]' alt="" />
                                <div className='flex flex-col items-center'>
                                    <span className=' text-sm '>{category.name}</span>
                                    <span className='text-[12px] text-color_dark_pink flex items-center hover:opacity-80'><IoIosArrowForward className='mr-1' /> Show All</span>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>

    )
}

export default CategoriesBoxes