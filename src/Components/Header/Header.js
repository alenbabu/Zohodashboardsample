import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header-left-content'>
                <img className='logo' src='./assets/zoho_logo.png ' alt='logo' />
                <h1 className='header-title'>Campaigns</h1>
            </div>

            <div className='header-right-content'>
                <h2>Trial expires in 10days</h2>
                <button>Upgrade</button>
                <i class="fa-solid fa-square-plus icon"></i>
                <i class="fa-duotone fa-magnifying-glass"></i>

            </div>


        </div>
    )
}

export default Header