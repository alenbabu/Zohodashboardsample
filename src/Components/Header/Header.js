import React from 'react'

import logo from "../../assets/zoho_logo.png"
import avatar from "../../assets/avatar.png"



function Header() {
    return (
        <div className='sticky w-full h-[7.5vh] z-[2] flex justify-between items-center bg-[white] border-b-[rgb(238,223,223)] border-b border-solid top-0'>
            <div className='flex justify-center items-center'>
                <img className='w-[2em] h-[2em] cursor-pointer ml-[0.5em]' src={logo} alt='logo' />
                <h1 className='text-[1.5rem] cursor-pointer ml-[0.2em]'>Campaigns</h1>
            </div>

            <div className='h-[7.5vh] flex justify-end items-center hover:bg-[#f8f6f6] hover:rounded'>
                <h3 className='text-[#ff6a1a] font-[lighter] mr-[1.5em]'>Trial expires in 10 days</h3>
                <button className='bg-[#FFEFED] text-[#FF3F00] rounded cursor-pointer mr-[1.2em] p-[0.4em] border-[none]'>Upgrade</button>
                <i class="fa-solid fa-square-plus text-[#ff6a1a] text-[1.4em] cursor-pointer mr-[1.2em]"></i>
                <i class="fa-solid fa-magnifying-glass cursor-pointer mr-[1.2em]"></i>
                <i class="fa-regular fa-bell cursor-pointer mr-[1.2em]"></i>
                <i class="fa-regular fa-circle-question cursor-pointer mr-[1.2em]"></i>
                <i class="fa-solid fa-gear cursor-pointer mr-[1.2em]"></i>
                <i class="fa-solid fa-ellipsis-vertical cursor-pointer mr-[1.2em]"></i>
                <img className='rounded-[20px] cursor-pointer mr-[1.2em]' src={avatar} alt='avatar' />

            </div>


        </div>

    )
}

export default Header