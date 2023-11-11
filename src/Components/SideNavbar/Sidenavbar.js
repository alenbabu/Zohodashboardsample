import React from 'react'
import './sidenavbar.css'
import { AiOutlineDashboard, AiOutlineContacts } from "react-icons/ai"
import {MdOutlineCampaign, MdLocalLibrary, MdOutlineReport} from "react-icons/md"
import {TbSettingsAutomation} from "react-icons/tb"
import {BsCartCheck} from "react-icons/bs"
import { Link } from 'react-router-dom'


function SideNavbar() {
    return (
        <div className='sidenavbar'>
            <Link to="/dashboard" className='sidenavbar-content'>
                <AiOutlineDashboard style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='sidenavbar-titles'>Dashboard</h5>
            </Link>
            <Link to="/campaigns" className='sidenavbar-content'>
                <MdOutlineCampaign style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='sidenavbar-titles'>Campaigns</h5>

            </Link>
            <Link to="/contacts" className='sidenavbar-content'>
                <AiOutlineContacts style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='sidenavbar-titles'>Contacts</h5>

            </Link>
            <div className='sidenavbar-content'>
                <TbSettingsAutomation style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='sidenavbar-titles'>Automation</h5>
            </div>
            <div className='sidenavbar-content'>
                <BsCartCheck style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='sidenavbar-titles'>Ecommerce</h5>

            </div>
            <div className='sidenavbar-content'>
                <MdLocalLibrary style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='sidenavbar-titles'>Library</h5>

            </div>
            <div className='sidenavbar-content'>
                <MdOutlineReport style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='sidenavbar-titles'>Reports</h5>

            </div>

        </div>
    )
}

export default SideNavbar