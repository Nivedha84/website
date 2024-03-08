import React from 'react'
import { Element } from 'react-scroll'
import "./SkillsContainer.css";
import skillImg from "../../asset/code image.jpg";
import { LinearProgress } from '@mui/material';

const About = () => {
    return (
        <Element name='skills' className='skillContainer' >
            <div className='skills_ImageCont'>
                <img src={skillImg} alt='' ></img>

            </div>
            <div className='skill_text'>
                <h2>Skill Set</h2>

                <div className='skillcontainer_skillset'>
                    <h5>React</h5>
                    <div className='skillcontainer_slider skillcontainer_slider1'>

                        <LinearProgress variant='determinate' value={90} />
                    </div>
                    <h5>JavaScript</h5>
                    <div className='skillcontainer_slider skillcontainer_slider2'>

                        <LinearProgress variant='determinate' value={80} />
                    </div>
                    <h5>HTML</h5>
                    <div className='skillcontainer_slider skillcontainer_slider3'>

                        <LinearProgress variant='determinate' value={95} />
                    </div>
                    <h5>CSS</h5>
                    <div className='skillcontainer_slider skillcontainer_slider4'>

                        <LinearProgress variant='determinate' value={80} />
                    </div>
                    <h5>NodeJs</h5>
                    <div className='skillcontainer_slider skillcontainer_slider5'>

                        <LinearProgress variant='determinate' value={70} />
                    </div>
                </div>
            </div>



        </Element>
    )
}

export default About