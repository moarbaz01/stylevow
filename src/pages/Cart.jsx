import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { cartProduct, product } from '../data'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';
import logo from '../assets/images/logo/logo.svg'

function Cart() {
    const [amount, setAmount] = useState(1);
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });

    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await axios.post("http://localhost:5000/payment/orders");

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_r6FiJfddJh76SI", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:5000/payment/success", data);

                alert(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div>
            <Announcement />
            <Navbar />

            {/* Cart */}
            <div className='max-w-[1200px] mx-auto'>
                <div className='flex flex-col w-full items-center my-8 '>
                    {/* Cart Table */}
                    <table cellPadding={"2px"} className='table-auto min-w-full'>
                        <thead>
                            <tr className=' bg-gray-200 px-4 border-b-[1px] h-12'>
                                <th className='text-start pl-12'>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QTY</th>
                                <th>UNIT PRICE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartProduct.map((p, index) => {
                                    return (
                                        <tr className=' border-[1px]' key={index}>
                                            <td className=' pl-12' >
                                                <div className='flex items-center py-4 gap-6'>
                                                    <img className='h-24' src={p.img} alt={`Product: ${p.title}`} />
                                                    <div className='flex flex-col gap-2'>
                                                        <div>
                                                            <span>Title: </span>
                                                            <span className='font-semibold'>{p.title}</span>
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            <span>Color: </span>
                                                            <div style={{ backgroundColor: p.color }} className='h-6 w-6 p-2 rounded-full'></div>
                                                        </div>
                                                        <div className='flex items-center gap-2'>
                                                            <span>Size: </span>
                                                            <div className='h-8 w-8 p-2 text-sm flex items-center justify-center bg-gray-100 rounded-full'>{p.size}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='font-semibold text-center'>
                                                <span >${p.price.toFixed(2)}</span>
                                            </td>

                                            <td >
                                                <div className='flex flex-row items-center justify-center'>
                                                    <button className='bg-gray-200 py-2 px-4 rounded-l-lg text-xl' onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}>-</button>
                                                    <span className='py-2 px-4 w-12 text-center'>{amount}</span>
                                                    <button className='bg-gray-200 py-2 px-4 rounded-r-lg text-xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                                                </div>
                                            </td>

                                            <td className='font-semibold text-center'>
                                                <span>${Number((p.price * amount).toFixed(2))}</span>
                                            </td>
                                        </tr>


                                    )
                                })
                            }
                        </tbody>
                    </table>

                    {/* CheckOut Summary */}
                    <div className='flex items-start w-full justify-between my-6'>
                        <div className='flex items-center'>
                            <input className=' border-[1px] outline-none py-4 px-10' type="text" placeholder='Voucher code' />
                            <button className=' text-center py-4 px-6 rounded-r-lg hover:bg-color_pink transition bg-color_dark_pink text-white'>Redeem</button>
                        </div>
                        <div className='flex items-center justify-center flex-col p-4 w-[40%] bg-gray-50' >
                            <div className='flex my-2 w-full items-center justify-between'>
                                <span>Subtotal</span>
                                <span>$224</span>
                            </div>
                            <div className='flex my-2 w-full items-center justify-between'>
                                <span>Shipping Fee</span>
                                <span>$20</span>
                            </div>
                            <div className='flex my-2 w-full items-center justify-between'>
                                <span>Coupon</span>
                                <span>No</span>
                            </div>

                            <div className='flex p-4 my-1 w-full items-center justify-between font-bold text-2xl border-t-[4px] border-gray-100'>
                                <span>Total</span>
                                <span>$213</span>
                            </div>

                            <div className='w-full text-center'>
                                <button onClick={displayRazorpay} className=' text-center py-2 px-4 w-[90%] hover:bg-color_pink transition rounded-lg  bg-color_dark_pink text-white'>Checkout</button>
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

export default Cart