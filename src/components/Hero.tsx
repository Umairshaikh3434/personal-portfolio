import React from 'react'
import Navbar from './Navbar'
import '../app/styles/hero.css';

const Hero = () => {
    return (
        <div id="hero" className='hero-container'
        style={{backgroundSize:"30%", backgroundPosition:"left 100px top 100px"}}
        >

        <Navbar />
        <div className='hero-container'>
            <div className='hidden lg:block'></div>
            <div className='hero-text'>
                <div className='hero-main'>
                    <p data-aos="zoom-in-up">I &apos;m</p>
                    <p data-aos="zoom-in-up">Muhammad</p>
                    <p data-aos="zoom-in-up">Umair</p>
                </div>
            </div>
        </div>
        </div>
    )
    
}
    
export default Hero;