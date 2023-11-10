import React from 'react'
import './header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header-title-content'>
            <img className='logo' src='./assets/zoho_logo.png ' alt='logo' />
            <h1 className='header-title'>Campaigns</h1>
            </div>
            
        </div>
    )
}

export default Header