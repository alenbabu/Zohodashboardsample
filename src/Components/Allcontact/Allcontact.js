import React, { useState } from 'react'
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
        <div className='flex-1 h-screen ml-[90px]'>
            <div className='sticky w-full h-[4vh] bg-[white] flex flex-row items-center justify-between border-t-[none] border-b-[0.5px] border-b-[rgb(242,245,245)] border-solid top-[7.5vh]'>
                <div className='flex flex-row pl-[1em]'>
                    <h5 className='font-[lighter]'>Contacts &gt;</h5>
                    <h5 className='font-[lighter]'>&nbsp;&nbsp;All Contacts</h5>
                </div>
                <div className='flex flex-row pr-[1em]'>
                    <h5 className='font-[lighter]'>Favourite this?&nbsp;&nbsp;&nbsp;</h5>
                    <i class="fa-regular fa-heart font-[lighter]"></i>
                </div>
            </div>

            <div className='h-[8vh] bg-[white] flex flex-row items-center justify-between border-t-[none] border-b-[2.5px] border-b-[rgb(242,245,245)] border-solid'>
                <div className='pl-[1em]'>
                    <h2 className='text-[#FF7E18] text-2xl'>Marketing Contacts</h2>

                </div>
                <div className='pr-[1em]'>
                    <button className='w-[105px] h-[35px] text-[white] bg-[#FD7553] rounded mr-[1em] border-[none] hover:shadow-[0_8px_8px_-4px_lightblue]'>Add New</button>
                    <button className='w-20 h-[35px] text-[#FF7E18] bg-[white] rounded border-[0.5px] border-solid border-[#FF7E18] hover:shadow-[0_8px_8px_-4px_lightblue]'>More</button>

                </div>

            </div>
            <div className='flex h-[77vh]'>
                <div className='w-[28%] h-[60vh] pl-[1em] pt-[2em] border-r-[rgb(242,245,245)] border-b-[rgb(242,245,245)] border-r border-solid border-b'>
                    <h4 className='text-[grey] font-[lighter]'>FILTER BY</h4>
                    <div className='flex pt-[1.5em]'>
                        <input className='accent-[#FF7E18]' type='checkbox' />
                        <h4 className='text-[gray] ml-[0.5em] hover:text-[#FF7E18]'>Contact Owner</h4>
                    </div>
                    <div className='flex pt-[1.5em]'>
                        <input className='accent-[#FF7E18]' type='checkbox' />
                        <h4 className='text-[gray] ml-[0.5em] hover:text-[#FF7E18]'>Tags</h4>
                    </div>
                    <div className='flex pt-[1.5em]'>
                        <input className='accent-[#FF7E18]' type='checkbox' />
                        <h4 className='text-[gray] ml-[0.5em] hover:text-[#FF7E18]'>Score</h4>
                    </div>
                    <div className='flex pt-[1.5em]'>
                        <input className='accent-[#FF7E18]' type='checkbox' />
                        <h4 className='text-[gray] ml-[0.5em] hover:text-[#FF7E18]'>Activity</h4>
                    </div>

                </div>

                <div className='flex flex-col w-9/12'>
                    <div className='w-[90%] h-[10vh] flex flex-row items-center justify-end ml-[4em] mt-[0.7em]'>
                        <div className='border text-center w-10 h-[30px] rounded mt-[-0.5em] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] mr-[1em] border-solid border-[rgb(223,228,228)] tooltip'>
                            <span class="tooltiptext">Search</span>
                            <IoIosSearch style={{ color: "grey", fontSize: "1.5em" }} />

                        </div>
                        <div className='border text-center w-10 h-[30px] rounded mt-[-0.5em] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] mr-[1em] border-solid border-[rgb(223,228,228)] tooltip'>
                            <span class="tooltiptext">Advanced search</span>
                            <TbWorldSearch style={{ color: "grey", fontSize: "1.5em" }} />

                        </div>
                        <div className='border flex justify-center w-10 h-[30px] rounded mt-[-0.5em] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] mr-[1em] border-solid border-[rgb(223,228,228)] tooltip'>
                            <span class="tooltiptext">Organize coloumns</span>
                            <HiOutlineAdjustmentsVertical style={{ color: "grey", fontSize: "1.5em" }} />
                        </div>

                    </div>
                    <div className='border w-[90%] h-[50vh] rounded ml-[4em] mt-[1em] border-solid border-[rgb(242,245,245)]'>

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
                    <div onClick={toggleComponent} className='w-[45px] h-[45px] flex justify-center items-center bg-[#FD7553] self-end m-[2em] rounded-[10px]'>
                    <RiMessage2Fill style={{ color: "white", fontSize: "1.5em" }} />
                    </div>

                    {component && (
                        <div className='absolute self-end mr-[5em] bottom-[3em]'>
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