import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="py-4 bg-gray-100">
                <div className="p-12 flex md:flex-row flex-col md:gap-0 gap-12 justify-around">
                    <div className="flex flex-col items-start w-52 gap-4">
                        <div className="flex items-center gap-2">
                            {/* <i className="pt-1 fa-solid fa-truck-fast text-sm"></i> */}
                            <h1 className="text-sm font-bold">StyleVow</h1>
                        </div>
                        <div>
                            <p className="opacity-40">There are many variations of passages Lorem ipsum available. but the majority have.</p>
                        </div>
                        <div className="flex gap-2 opacity-40 items-center">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin-in"></i>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                    </div>

                    <div className="flex flex-col w-52 gap-4 items-start">
                        <h1 className="text-sm font-bold">Quick Links</h1>
                        <ul className="flex flex-col items-start">
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Shop</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col w-52 gap-4 items-start">
                        <h1 className="text-sm font-bold">Contact</h1>
                        <div className="flex flex-col items-start">
                            +9129466464 , Gopalpura-Hanuman ji ka rasta , udaipur rajasthan
                        </div>
                    </div>

                    <div className="flex flex-col md:gap-4 gap-2 items-start">
                        <h1 className="text-sm font-bold">Subscribe To Our Email</h1>
                        <h1 className="text-xl md:text-2xl font-bold">For Latest News & Updates</h1>
                        <div className="flex items-center w-[90%] relative">
                            <input type="text" placeholder="Enter email" className="outline-none rounded-sm px-2 py-2 w-full bg-zinc-200" />
                            <button className=" absolute right-0 rounded-sm bg-color_dark_pink text-white h-full px-4 text-xs">Subscribe</button>
                        </div>
                    </div>


                </div>
            </footer>

            {/*Last Footer */}
            <div className=''>
                <div className="flex text-white flex-col md:flex-row bg-black md:px-12 px-4 py-4 items-center justify-between">
                    <span className="opacity-50 md:text-lg text-sm text-center">@2019 shop-digital-All Rights Reserved ABR</span>
                    <h1 className="text-2xl md:block hidden">www.style.com</h1>
                    <span className="md:flex items-center hidden gap-4">
                        <Link className="text-white opacity-50" >Privacy Policy</Link>
                        <Link classNameName="text-white opacity-50" >Terms Condition</Link>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Footer