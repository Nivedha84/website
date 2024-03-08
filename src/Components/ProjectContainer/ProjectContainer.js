import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Projects/Projects'
import './ProjectContainer.css'

const ProjectContainer = () => {
    const projects = [
        {
            img: "https://blogs.sw.siemens.com/wp-content/uploads/sites/39/2021/12/640x360-LandingPage-Laotops.jpg",
            title: "Client",
            desc: "Web Application for clinical Products using ReactJs"

        },
        {
            img: "https://espeo.eu/wp-content/uploads/2022/04/Software-development-outsourcing_-9-benefits-that-will-make-you-want-to-outsource-your-next-digital-project.jpg",
            title: "Client",
            desc: " Design, Development, and Implementation modules according to the specifications in the ReactJS, HTML, CSS, JavaScript"

        }
    ]
    return (
        <Element className='projectContainer' id='projects'>
            <h1>Projects</h1>
            <p>Here are some projects which I done for making lives of people easy</p>
            <div className='projectContainer_projects'>
                {
                    projects.map((project, index) => {
                        return <Project
                            key={index}
                            // link={projects.link}
                            desc={project.desc}
                            img={project.img} />

                    })
                }
            </div>
        </Element>
    )
}

export default ProjectContainer