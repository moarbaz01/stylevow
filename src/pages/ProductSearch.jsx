import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Products from '../components/Products'
import { categoriesData, colors, sizes } from '../data'
import { GoRows, GoColumns } from "react-icons/go";
import Footer from '../components/Footer'
import usePagination from '../hooks/usePagination'
import axios from 'axios'


function ProductSearch() {
    const [productData, setProductData] = useState([]);

    async function fetchProducts() {
        const url = "https://fakestoreapi.com/products"
        axios.get(url)
            .then((data) => setProductData(data.data))
            .catch((err) => console.log(err))
    }
    // My custom Hook
    const { currentData, currentPage, next, prev, jump, maxPages } = usePagination(productData.length > 0 ? productData : [], 8);
    // Generate Pagination
    const generatePaginationBox = () => {
        const paginationBox = []
        for (let i = 1; i <= maxPages; i++) {
            paginationBox.push(i)
        }
        return paginationBox
    }

    // UseEffect
    useEffect(() => {
        generatePaginationBox();
        fetchProducts();
    }, [])
    return (
        <div>
            <Announcement />
            <Navbar />

            <div className='h-8 my-4 hidden  tracking-wide w-full md:flex items-center justify-center text-sm bg-gray-100'>
                <Link  className='text-color_dark_pink mx-1'>
                    Home
                </Link>
                <Link  className=''>
                    / Products
                </Link>

            </div>

            {/* Products Searching */}
            <div className='px-16 '>
                <div className='flex items-start'>
                    {/* Selection Left */}
                    <div className='flex-[1] md:flex hidden  flex-col items-start  ' >

                        {/* Category Box */}
                        <div className='bg-gray-100 w-[60%] p-4 my-2'>
                            <h1 className='my-2 font-bold'>Category</h1>
                            <div className='flex flex-col items-start justify-between w-full'>
                                {
                                    categoriesData.map((cat) => {
                                        return (
                                            <Link className='my-1 flex text-[12px] rounded-md w-[80%] items-center justify-between hover:text-color_dark_pink transition' key={cat.id}><span>{cat.name}</span> <span>({cat.stock})</span></Link>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* Price Box */}
                        <div className='bg-gray-100 w-[60%] p-4 my-2'>
                            <h1 className='font-bold'>Prices</h1>
                            <div>
                                <div className='flex items-center justify-between my-2'>
                                    <span className='text-sm'>Range</span>
                                    <span className='text-sm'>0$ - 500$</span>
                                </div>
                                <input type="range" className='w-full h-2 rounded-lg bg-color_dark_pink' />
                            </div>
                        </div>


                        {/* Color Box */}
                        <div className='bg-gray-100 w-[60%] p-4 my-2'>
                            <h1 className='font-bold'>Color</h1>
                            <div className='flex flex-col'>
                                <h1 className=' text-sm my-1'>Choose colors</h1>
                                <div className='flex flex-wrap f'>
                                    {
                                        colors.map((col) => {
                                            return (
                                                <div key={col.id} style={{ backgroundColor: col.color }} className=' rounded-full w-6 m-1 h-6 cursor-pointer p-1 border-[1px] border-black' ></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        {/* Color Box */}
                        <div className='bg-gray-100 w-[60%] p-4 my-2'>
                            <h1 className='font-bold'>Sizes</h1>
                            <div className='flex flex-col'>
                                <h1 className=' text-sm my-1'>Choose sizes</h1>
                                <div className='flex flex-wrap f'>
                                    {
                                        sizes.map((size) => {
                                            return (
                                                <div key={size.id} className='w-[40px] h-[30px] m-1 bg-gray-200 cursor-pointer text-sm flex items-center justify-center border-[1px] border-gray-200' >{size.size}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Content Right */}
                    <div className='flex-[3]'>
                        <div className='h-12 bg-gray-100 flex items-center justify-between my-4 px-2'>
                            <div>
                                Total : {productData.length > 0 ? productData.length : 0}
                            </div>
                            <div>
                                <span>Sort by : </span>
                                <select name="priceSort" className='text-[12px] cursor-pointer mx-2 p-1 '>
                                    <option value="">Price</option>
                                    <option value="asc">Lowest to highest</option>
                                    <option value="desc">Highest to lowest</option>
                                </select>
                                <select name="priceSort" className='text-[12px] cursor-pointer mx-2 p-1 '>
                                    <option value="asc">Newest to oldest</option>
                                    <option value="desc">Oldest to newest</option>
                                </select>
                                <span className='text-sm ml-4'>Show :</span>
                                <select name="priceSort" className='text-[12px] cursor-pointer mx-2 p-1 '>
                                    <option value="four">4</option>
                                    <option value="eight">8</option>
                                    <option value="twelve">12</option>
                                    <option value="sixteen">16</option>
                                </select>
                            </div>

                            <div className='flex items-center gap-4 '>
                                <div className='bg-white cursor-pointer hover:bg-color_dark_pink transition rounded-md p-2'>
                                    <GoColumns />
                                </div>
                                <div className='bg-white cursor-pointer hover:bg-color_dark_pink transition rounded-md p-2'>
                                    <GoRows />
                                </div>

                            </div>
                        </div>

                        {/* Products */}
                        <Products data={currentData()} />

                        {/* Pagination */}
                        <div className='my-8'>
                            <div className='flex items-center'>
                                <div onClick={() => prev()} className='bg-gray-50 hover:opacity-80 p-1 px-2 mx-1 text-sm cursor-pointer border-[1px]'>
                                    Prev
                                </div>
                                <div className='flex items-center '>
                                    {
                                        generatePaginationBox().map((e, index) => {
                                            const PageBoxStyle = ` ${currentPage - 1 === index ? "bg-color_dark_pink" : "bg-gray-50"} text-center border-[1px] cursor-pointer mx-[2px] text-sm  h-8 w-8 py-1 hover:bg-color_dark_pink`

                                            return <div key={e} onClick={() => {
                                                jump(e);
                                            }
                                            } className={PageBoxStyle}>{e}</div>
                                        })
                                    }
                                </div>
                                <div onClick={() => next()} className='bg-gray-50 hover:opacity-80 p-1 mx-1 text-sm cursor-pointer px-2 border-[1px]'>
                                    Next
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default ProductSearch