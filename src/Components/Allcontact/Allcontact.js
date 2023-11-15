import React from 'react'
import './allcontact.css'

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

        </div>
    )
}

export default Allcontact