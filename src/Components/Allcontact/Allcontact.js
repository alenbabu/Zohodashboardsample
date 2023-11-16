import React, { useState } from 'react'
import './allcontact.css'
import { IoIosSearch } from "react-icons/io";
import { TbWorldSearch } from "react-icons/tb";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import ChatBot from 'react-simple-chatbot';
import { RiMessage2Fill } from "react-icons/ri";


function Allcontact() {

    const [component, setComponent] = useState(false)

    const toggleComponent = () => {
        setComponent(!component);
    };

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

                <div className='right-wrapper'>
                    <div className='right-div-icon-div'>
                        <div className='right-div-icons tooltip'>
                            <span class="tooltiptext">Search</span>
                            <IoIosSearch style={{ color: "grey", fontSize: "1.5em" }} />

                        </div>
                        <div className='right-div-icons tooltip'>
                            <span class="tooltiptext">Advanced search</span>
                            <TbWorldSearch style={{ color: "grey", fontSize: "1.5em" }} />

                        </div>
                        <div className='right-div-icons tooltip'>
                            <span class="tooltiptext">Organize coloumns</span>
                            <HiOutlineAdjustmentsVertical style={{ color: "grey", fontSize: "1.5em" }} />
                        </div>

                    </div>
                    <div className='right-div-contacts-table'>

                        {/* table */}
                        <div class="table-container">
                            <div class="table-horizontal-container">
                                <table class="unfixed-table">
                                    <thead>
                                        <tr>
                                            <td>Contact Email</td>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Company Name</th>
                                            <th>Phone</th>
                                            <th>Mobile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>alenbabualen@gmail.com</td>
                                            <td>Column two</td>
                                            <td>Column three</td>
                                            <td>Column four</td>
                                            <td>Five</td>
                                            <td>six</td>
                                        </tr>
                                        <tr>
                                            <td>narmi@zohocampaigns.com</td>
                                            <td>Column two</td>
                                            <td>Column three</td>
                                            <td>Column four</td>
                                            <td>Five</td>
                                            <td>six</td>

                                        </tr>
                                        <tr>
                                            <td>bale@zohomarketingautoma</td>
                                            <td>Column two</td>
                                            <td>Column three</td>
                                            <td>Column four</td>
                                            <td>Five</td>
                                            <td>six</td>
                                        </tr>
                                        <tr>
                                            <td>aron@zohocampaigns.com</td>
                                            <td>Column two</td>
                                            <td>Column three</td>
                                            <td>Column four</td>
                                            <td>Five</td>
                                            <td>six</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div onClick={toggleComponent} className='chatbot'>
                    <RiMessage2Fill style={{ color: "white", fontSize: "1.5em" }} />
                    </div>

                    {component && (
                        <div className='chatdiv'>
                            <ChatBot 
                            steps={[
                                {
                                  id: '1',
                                  message: 'What is your name?',
                                  trigger: '2',
                                },
                                {
                                  id: '2',
                                  user: true,
                                  trigger: '3',
                                },
                                {
                                  id: '3',
                                  message: 'Hi {previousValue}, nice to meet you!',
                                  end: true,
                                },
                              ]}/>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Allcontact