import React from 'react'
import { Element } from 'react-scroll'
import './Contact.css';
const Contact = () => {
    return (
        <Element className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact_container'>
                <p>
                    Email: <span>nivedhaezhilarasan@gmail.com</span>
                </p>
                <p>
                    Github UserName: <span>@nivedha84</span>
                </p>
            </div>
        </Element>
    )
}

export default Contact