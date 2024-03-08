import React from 'react'
import './TopContent.css'
import { Link } from 'react-scroll'

import { Element } from 'react-scroll'
const TopContent = () => {
    return (
        <Element className='topcontent' >
            <div className='topcontainer'>
                <div className='about'>
                    <h1>NIVEDHA E</h1>

                    <div className='about_text'>
                        <p>A Professional Web and App Developer</p>
                    </div>
                    <div className='about_button'>
                        <a href=''>
                            <p>My Resume</p>
                        </a>
                        {/* <Link to="project" smooth={true} duration={500}>
                        <p>My Work</p>
                    </Link> */}

                    </div>
                </div>
            </div>
        </Element>
    )
}

export default TopContent