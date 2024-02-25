import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { cartProduct, product } from '../data'
function Orders() {
    const [products, setProducts] = useState([]);

    // Fetch Products 
    async function fetchProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => console.log(err))
    }

    // 
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='py-6 px-4'>
            <h1 className='text-3xl '>YOUR ORDERS</h1>
            <div className='mt-4'>
                <table className='lg:w-full md:w-[80%]'>
                    <thead>
                        <tr className='bg-gray-100 h-12 text-sm'>
                            <th className='md:pl-2 lg:pl-12 text-start'>Product Details</th>
                            <th>Size</th>
                            <th>Color</th>
                            <th>Address</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProduct.map((p, index) => {
                                return (
                                    <tr className=' border-[1px]' key={index}>
                                        <td className=' md:pl-2 lg:pl-12' >
                                            <div className='flex items-center py-4 gap-6'>
                                                <img className='h-24' src={p.img} alt={`Product: ${p.title}`} />
                                                <div className='flex flex-col gap-2'>
                                                    <div className=' md:text-[12px] lg:text-lg'>
                                                        <span>Title: </span>
                                                        <span className='font-[500]'>{p.title}</span>
                                                    </div>
                                                    <div className='max-w-[300px] flex items-center overflow-hidden'>
                                                        <span>Desc: </span>
                                                        <p className='whitespace-nowrap text-sm ml-1 opacity-60 overflow-hidden text-ellipsis'>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo saepe ipsam laborum voluptatum soluta voluptatibus placeat quidem? Ipsam nihil facere ex assumenda veniam temporibus recusandae, veritatis dolores dicta, provident aut.
                                                        </p>
                                                    </div>
                                                    <div className="">
                                                        <button className="bg-color_dark_pink max-w-[100px] text-[12px] text-white py-0 rounded-sm px-2 hover:bg-color_pink transition" >Cancel Order</button>
                                                    </div>


                                                </div>
                                            </div>
                                        </td>

                                        <td className='font-semibold text-center'>
                                            <div className='h-8 w-8 p-2 text-sm flex items-center justify-center bg-gray-100 rounded-full'>{p.size}</div>
                                        </td>

                                        <td >
                                            <div className='flex flex-row items-center justify-center'>

                                                <div style={{ backgroundColor: p.color }} className='h-6 w-6 p-2 rounded-full'></div>

                                            </div>
                                        </td>

                                        <td className=' text-[12px] text-center'>
                                            <span className='cursor-pointer hover:opacity-60 transition'>View Address</span>
                                        </td>
                                        <td className='font-[400] text-sm text-center'>
                                            <span>{p.quantity}</span>
                                        </td>
                                        <td className='font-[400] text-sm text-center'>
                                            <span>${p.price}</span>
                                        </td>
                                        <td className='font-[400] text-sm text-center'>
                                            <span>Proccessing...</span>
                                        </td>
                                    </tr>


                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default Orders