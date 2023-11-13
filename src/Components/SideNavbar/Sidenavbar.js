import React from 'react'
import './sidenavbar.css'
import { AiOutlineDashboard, AiOutlineContacts } from "react-icons/ai"
import { MdOutlineCampaign, MdLocalLibrary, MdOutlineReport } from "react-icons/md"
import { TbSettingsAutomation } from "react-icons/tb"
import { BsCartCheck } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../contactdropdown/contactdropdown.css'


function SideNavbar() {
    const [isDropdownopen, setIsDropdownopen] = useState(false);
    const contactToggleDropdown = () => {
        setIsDropdownopen(!isDropdownopen);

    }
    const contactMouseLeave=()=>{
        setIsDropdownopen(false);
    }

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
            <div onClick={contactToggleDropdown} onMouseLeave={contactMouseLeave} className='sidenavbar-content'>
                <AiOutlineContacts style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='sidenavbar-titles'>Contacts</h5>
                {isDropdownopen && (
                    <div className="contacts-dropdown-menu">
                        <ul>
                            <li>All Contacts</li>
                            <li>Manage Lists</li>
                            <li>Manage Topics</li>
                            <li>Sync Service</li>
                            <li>Segments</li>
                            <li>Contact Tags</li>
                        </ul>
                    </div>
                )}

            </div>

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