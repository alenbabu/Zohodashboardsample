import React from 'react'
import { AiOutlineDashboard, AiOutlineContacts } from "react-icons/ai"
import { MdOutlineCampaign, MdLocalLibrary, MdOutlineReport } from "react-icons/md"
import { TbSettingsAutomation } from "react-icons/tb"
import { BsCartCheck } from "react-icons/bs"
import { Link, NavLink } from 'react-router-dom'
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
        <div className='bg-[#172635] w-[90px] h-screen flex flex-col items-center fixed text-[white]'>
            <Link to="/dashboard" className='flex flex-col items-center  w-full no-underline text-[white] pt-[1.5em] hover:bg-[black] hover:border-b-2 hover:border-b-[cyan] hover:border-solid'>
                <AiOutlineDashboard style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='font-[lighter] text-xs'>Dashboard</h5>
            </Link>
            <Link to="/campaigns" className='flex flex-col items-center w-full no-underline text-[white] pt-[1.5em] hover:bg-[black] hover:border-b-2 hover:border-b-[cyan] hover:border-solid'>
                <MdOutlineCampaign style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='font-[lighter] text-xs'>Campaigns</h5>

            </Link>
            <div onClick={contactToggleDropdown} onMouseLeave={contactMouseLeave} className='flex flex-col items-center w-full no-underline text-[white] pt-[1.5em] hover:bg-[black] hover:border-b-2 hover:border-b-[cyan] hover:border-solid'>
                <AiOutlineContacts style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='font-[lighter] text-xs'>Contacts</h5>
                {isDropdownopen && (
                    <div className="contacts-dropdown-menu">
                        <ul>
                            <NavLink to="/contacts/allcontacts" className="no-underline text-[white]"><li>All Contacts</li></NavLink>
                            <li>Manage Lists</li>
                            <li>Manage Topics</li>
                            <li>Sync Service</li>
                            <li>Segments</li>
                            <li>Contact Tags</li>
                        </ul>
                    </div>
                )}

            </div>

            <div className='flex flex-col items-center w-full no-underline text-[white] pt-[1.5em] hover:bg-[black] hover:border-b-2 hover:border-b-[cyan] hover:border-solid'>
                <TbSettingsAutomation style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='font-[lighter] text-xs'>Automation</h5>
            </div>
            <div className='flex flex-col items-center w-full no-underline text-[white] pt-[1.5em] hover:bg-[black] hover:border-b-2 hover:border-b-[cyan] hover:border-solid'>
                <BsCartCheck style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='font-[lighter] text-xs'>Ecommerce</h5>

            </div>
            <div className='flex flex-col items-center w-full no-underline text-[white] pt-[1.5em] hover:bg-[black] hover:border-b-2 hover:border-b-[cyan] hover:border-solid'>
                <MdLocalLibrary style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='font-[lighter] text-xs'>Library</h5>

            </div>
            <div className='flex flex-col items-center w-full no-underline text-[white] pt-[1.5em] hover:bg-[black] hover:border-b-2 hover:border-b-[cyan] hover:border-solid'>
                <MdOutlineReport style={{ color: "white", fontSize: "1.5em" }} />
                <h5 className='font-[lighter] text-xs'>Reports</h5>

            </div>

        </div>
    )
}

export default SideNavbar