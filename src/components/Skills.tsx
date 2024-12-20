import React from 'react'
import '../app/styles/skills.css';

const skills = () => {
    return (
        <div id='skills' className='skills-container'>
            <div className='skills-grid'>
            <div data-aos="zoom-in-up">
                <h2 className='skills-heading'>Technologies I Work With</h2>
                <p className='skills-text'>
                I have a solid foundation in web development, specializing in HTML, CSS and typescript. My experiance extend to using framework like React and Next.Js to create dynamic and user-friendly applications. Im also proficient in tailwind CSS for efficient styling and design. With a passion for learning, i stay updated on the latest technoligies to enhance my skill set and contribute effectively to projects. 
                </p>
            </div>
            <div className='skills-right'>
                <div className='skills-icon-grid'>
                    <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Typescript</h2>
                        <h2 data-aos="zoom-in-up">React.js</h2>
                        <h2 data-aos="zoom-in-up">Next.js</h2>
                        </div>
                         <div className='skills-space'>
                        <h2 data-aos="zoom-in-up">Tailwind</h2>
                        <h2 data-aos="zoom-in-up">CSS</h2>
                        <h2 data-aos="zoom-in-up">Node.js</h2>
                         </div>
                </div>
            </div>
            </div>

        </div>
    )
    
}

 export default skills;