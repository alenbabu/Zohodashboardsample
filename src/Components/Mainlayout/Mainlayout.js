import React from 'react'
import './mainlayout.css'
import SideNavbar from '../SideNavbar/SideNavbar'
import Allcontact from '../Allcontact/Allcontact'

function Mainlayout() {
  return (
    <div className='mainlayout'>
        <SideNavbar/>
        <Allcontact/>

    </div>
  )
}

export default Mainlayout