import React from 'react'

function EditProfile() {
    return (
        
            <div className='py-6 bg-gray-100 h-screen'>

                <div className='flex justify-evenly  '>
                    <div className=' bg-white p-12 h-[50%]'>
                        {/* <h1 className='text-start text-2xl'>EDIT PROFILE</h1> */}
                        <div className='flex items-center mt-6 border-[1px] border-gray-400  justify-center rounded-lg p-8  w-[250px] h-[250px] bg-white'>
                            <input className=' appearance-none' type="file" name="" id="" />
                        </div>
                        <div className='text-center'>
                            <button className=' text-center bg-color_dark_pink text-white py-2 px-6 my-2 rounded-lg hover:bg-color_pink transition'>Update Image</button>
                        </div>
                    </div>
                    <form className='bg-white p-12' action="">
                        <div className='flex-col flex items-start'>
                            <h1 className=' font-bold my-4'>ACCOUNT INFORMATION</h1>
                            <div className=' my-2 flex w-full items-center justify-between'>
                                <span className=' text-sm mr-24'>First Name</span>
                                <input className=' outline-none border-[1px] border-gray-400  rounded-sm px-4' type="text" name='fname' />
                            </div>
                            <div className=' my-2 flex w-full items-center justify-between'>
                                <span className=' text-sm mr-24'>Last Name</span>
                                <input className=' outline-none border-[1px] border-gray-400  rounded-sm px-4' type="text" name='fname' />
                            </div>
                            <div className=' my-2 flex w-full items-center justify-between'>
                                <span className=' text-sm mr-24'>E-mail</span>
                                <input className=' outline-none border-[1px] border-gray-400  rounded-sm px-4' type="email" name='email' />
                            </div>

                        </div>
                        <div className='flex-col flex items-start'>
                            <h1 className=' font-bold my-4'>CHANGE PASSWORD</h1>
                            <div className=' my-2 flex w-full items-center justify-between'>
                                <span className=' text-sm mr-24'>Current Password</span>
                                <input className=' outline-none border-[1px] border-gray-400  rounded-sm px-4' type="password" name='currPass' placeholder='' />
                            </div>
                            <div className=' my-2 flex w-full items-center justify-between'>
                                <span className=' text-sm mr-24'>New Password</span>
                                <input className=' outline-none border-[1px] border-gray-400  rounded-sm px-4' type="password" name='newPass' placeholder='' />
                            </div>
                            <div className=' my-2 flex w-full items-center justify-between'>
                                <span className=' text-sm mr-24'>Confirm Password</span>
                                <input className=' outline-none border-[1px] border-gray-400  rounded-sm px-4' type="text" name='confirmPass' placeholder='' />
                            </div>

                        </div>
                        <input type="submit" className=' text-center bg-color_dark_pink text-white py-2 px-6 my-4 rounded-lg hover:bg-color_pink transition' value="Save Changes" />
                    </form>
                </div>
            </div>
        
    )
}

export default EditProfile