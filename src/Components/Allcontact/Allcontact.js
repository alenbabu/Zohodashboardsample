import React from 'react'
import './allcontact.css'
import { IoIosSearch } from "react-icons/io";
import { TbWorldSearch } from "react-icons/tb";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";


function Allcontact() {
    return (
        <div className='allcontact'>
            <div className='contacts-allcontacts-title-div'>
                <div className='contact-allcontacts-title'>
                    <h5 className='contacts-title-text'>Contacts &gt;</h5>
                    <h5 className='contacts-title-text'>&nbsp;&nbsp;All Contacts</h5>
                </div>
                <div className='contact-allcontacts-fav-title'>
                    <h5 className='contacts-title-text'>Favourite this?&nbsp;&nbsp;&nbsp;</h5>
                    <i class="fa-regular fa-heart contacts-title-text"></i>
                </div>
            </div>

            <div className='contact-allcontacts-header-div'>
                <div className='contact-allcontacts-header'>
                    <h2 className='contact-allcontacts-header-text'>Marketing Contacts</h2>

                </div>
                <div className='contact-allcontacts-buttons'>
                    <button className='addnew-btn'>Add New</button>
                    <button className='more-btn'>More</button>

                </div>

            </div>
            <div className='allcontacts-wrapper'>
                <div className='left-div-filterby'>
                    <h4 className='left-div-filterby-text'>FILTER BY</h4>
                    <div className='left-div-content'>
                        <input className='left-div-chkbox' type='checkbox' />
                        <h4 className='left-div-text'>Contact Owner</h4>
                    </div>
                    <div className='left-div-content'>
                        <input className='left-div-chkbox' type='checkbox' />
                        <h4 className='left-div-text'>Tags</h4>
                    </div>
                    <div className='left-div-content'>
                        <input className='left-div-chkbox' type='checkbox' />
                        <h4 className='left-div-text'>Score</h4>
                    </div>
                    <div className='left-div-content'>
                        <input className='left-div-chkbox' type='checkbox' />
                        <h4 className='left-div-text'>Activity</h4>
                    </div>

                </div>

                <div className='right-div-icon-div'>
                    <div className='right-div-icons'>
                        <IoIosSearch  style={{ color: "grey", fontSize: "1.5em" }} />

                    </div>
                    <div className='right-div-icons'>
                        <TbWorldSearch style={{ color: "grey", fontSize: "1.5em" }} />

                    </div>
                    <div className='right-div-icons'>
                        <HiOutlineAdjustmentsVertical style={{ color: "grey", fontSize: "1.5em" }} />

                    </div>


                </div>

            </div>



        </div>
    )
}

export default Allcontact