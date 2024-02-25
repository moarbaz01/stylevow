import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { PiAddressBook, PiBookBookmark, PiHeart, PiNotification, PiOption, PiPencil, PiSignOut, PiUser, PiWallet } from 'react-icons/pi'
import { CiHeart, CiSettings } from 'react-icons/ci'
import EditProfile from '../components/EditProfile'
import Wishlist from '../components/Wishlist'
import Orders from '../components/Orders'
import UserReview from '../components/UserReview'

function Profile() {
    const [profileActive, setProfileActive] = useState(true);
    const [ordersActive, setOrdersActive] = useState(false);
    const [wishlistActive, setWishlistActive] = useState(false);
    const [reviewsActive, setReviewsActive] = useState(false);
    return (
        <div>
            {/* <Navbar home={true}/> */}

            {/* Edit Profile */}
            <div>
                {/* SideBar */}
                <div className='flex flex-col items-start fixed top-0 justify-between left-0  hover:transition-all hover:duration-500 rounded-r-xl duration-500 bottom-0  pt-4 px-2 whitespace-nowrap overflow-hidden bg-opacity-10 bg-color_dark_pink w-[10%]'>
                    <div className='flex flex-col'>
                        <div onClick={() => { setProfileActive(true); setOrdersActive(false); setWishlistActive(false); setReviewsActive(false) }} className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <PiUser />
                            <span className='text-sm'>Profile</span>
                        </div>
                        {/* <div className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <PiAddressBook />
                            <span className='text-sm'>Address</span>
                        </div> */}
                        <div onClick={() => { setProfileActive(false); setOrdersActive(false); setWishlistActive(true); setReviewsActive(false) }} className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <PiHeart />
                            <span className='text-sm'>Wishlist</span>
                        </div>
                        <div onClick={() => { setProfileActive(false); setOrdersActive(true); setWishlistActive(false); setReviewsActive(false) }} className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <PiBookBookmark />
                            <span className='text-sm'>Orders</span>
                        </div>
                        {/* <div className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <PiWallet />
                            <span className='text-sm'>Payments</span>
                        </div> */}
                        {/* <div className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <PiNotification />
                            <span className='text-sm'>Notifications</span>
                        </div> */}
                        <div onClick={() => { setProfileActive(false); setOrdersActive(false); setWishlistActive(false); setReviewsActive(true) }} className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <PiPencil />
                            <span className='text-sm'>My Reviews</span>
                        </div>

                    </div>
                    <div className='flex items-start flex-col mb-12'>
                        <div className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <CiSettings stroke='black' strokeWidth="0.5px" />
                            <span className='text-sm'>Settings</span>
                        </div>
                        <div className='flex cursor-pointer items-center text-2xl my-2 gap-2'>
                            <PiSignOut />
                            <span className='text-sm'>Logout</span>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className='ml-[160px] mr-2'>
                    {/* Edit Profile  */}
                    {
                        profileActive == true && <EditProfile />

                    }
                    {/*Wishlist */}

                    {wishlistActive === true &&
                        <Wishlist />
                    }
                    {/* Orders */}
                    {
                        ordersActive === true && <Orders />
                    }


                    {
                        reviewsActive === true && <UserReview />
                    }

                </div>
            </div>

        </div>
    )
}

export default Profile