import React from 'react'
import './header.css'
import logo from "../../assets/zoho_logo.png"
import avatar from "../../assets/avatar.png"



function Header() {
    return (
        <div className='header'>
            <div className='header-left-content'>
                <img className='logo' src={logo} alt='logo' />
                <h1 className='header-title'>Campaigns</h1>
            </div>

            <div className='header-right-content'>
                <h3 className='header-trial-title'>Trial expires in 10 days</h3>
                <button className='header-upgrade-button'>Upgrade</button>
                <i class="fa-solid fa-square-plus plus-icon icon"></i>
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <i class="fa-regular fa-bell icon"></i>
                <i class="fa-regular fa-circle-question icon"></i>
                <i class="fa-solid fa-gear icon"></i>
                <i class="fa-solid fa-ellipsis-vertical icon"></i>
                <img className='header-avatar icon' src={avatar} alt='avatar' />

            </div>


        </div>

    )
}

export default Header