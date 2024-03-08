import React from 'react'
import { Element } from 'react-scroll'
import Experience from '../Experience/Experience'
import './ExperienceContainer.css';

const ExperienceContainer = () => {
    return (
        <Element className='experienceContainer' id='exp'>
            <h1>Experience</h1>
            <div className='exp_cont_info'>
                <Experience
                    number="2" title="Clients" style={{ backgroundColor: "#f64c08" }} />
                <Experience
                    number="2" title="Projects" />
            </div>
        </Element>
    )
}

export default ExperienceContainer