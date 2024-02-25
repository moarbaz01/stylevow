import React from 'react'
import useRating from '../hooks/useRating'


function UserReview() {
    
    const reviews = [
        {
            img: "https://ui-avatars.com/api/?name=rajan+Doe",
            user: "John Doe",
            review: "Lot of space ; look -wise good; lot of pockets to accomodate several things; on the whole liked the product",
            rating: useRating(4.2),
            createdAt: new Date()

        },
        {
            img: "https://ui-avatars.com/api/?name=pelu+ram",
            user: "Pelu Ram",
            review: "So beautiful, So elegant, Just looking like a WOW!",
            rating: useRating(2.6),
            createdAt: new Date()
        },

        {
            img: "https://ui-avatars.com/api/?name=pelu+ram",
            user: "Pelu Ram",
            review: "So beautiful, So elegant, Just looking like a WOW!",
            rating: useRating(2.6),
            createdAt: new Date()
        },

        {
            img: "https://ui-avatars.com/api/?name=pelu+ram",
            user: "Pelu Ram",
            review: "So beautiful, So elegant, Just looking like a WOW!",
            rating: useRating(2.6),
            createdAt: new Date()
        },

    ]
    return (
        <div>
            {/* Selection  */}
            <div className='md:w-full w-[90%] h-16 rounded-xl bg-gray-200 flex justify-between my-4 px-4 items-center '>
                <div className='flex items-center gap-4 mx-4'>
                    <span className='text-lg font-[500]'>Sort : </span>
                    <select>
                        <option value="mostRecent">Most Recent</option>
                        <option value="mostRecent">Newest</option>
                        <option value="mostRecent">Oldest</option>
                    </select>
                </div>
                {/* <div>
                    <button className='py-1 px-4 rounded-sm bg-color_dark_pink transition hover:bg-color_pink text-white'>Submit review</button>
                </div> */}
            </div>

            {/* Reviews  */}
            <div className='md:w-full w-[90%] pb-24 py-4 px-4 rounded-xl bg-gray-300'>
                {
                    reviews.map((rev, index) => {

                        return (
                            <div key={index} className='flex w-full rounded-xl bg-gray-100 py-4 h-auto gap-1 pl-4 my-4 items-start'>
                                <div className='h-16 w-16'>
                                    <img className='rounded-full h-12' src={rev.img} alt="" />
                                </div>
                                <div className='flex flex-col gap-2 items-start'>
                                    <div className='flex gap-2 items-center'>
                                        <span className='text-xl font-bold'>{rev.user}</span>
                                        <span className='text-sm'>{`${rev.createdAt.getDay()}-${rev.createdAt.getMonth()}-${rev.createdAt.getFullYear()}`}</span>
                                    </div>
                                    <div className='flex items-center'>
                                        {
                                            rev.rating.map((star) => {
                                                return star
                                            })
                                        }
                                    </div>
                                    <p className=' pr-60'>{rev.review}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserReview