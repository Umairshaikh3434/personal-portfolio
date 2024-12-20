import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import '../app/styles/navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className='navbar-brand'>Muhammad Umair</div>
                <ul className='gap-10 lg:gap-16 hidden md:flex'>
                    <li className='navbar-link'><a href='#hero'>Home</a></li>
                    <li className='navbar-link'><a href='#about'>About</a></li>
                    <li className='navbar-link'><a href='#skills'>Skills</a></li>
                    <li className='navbar-link'><a href='#contact'>Contact</a></li>
                </ul>
                <div className="navbar-menu-icon" onClick={toggleMenu}>
                 { isMenuOpen ? <AiOutlineClose size={35} /> :
                 <AiOutlineMenu size={35} />
                 }
                </div>
                </div>
                
                {isMenuOpen && (
                    <ul className='nabar-menu'>
                        <li className='navbar-link'>
                            <a href='#hero' onClick={toggleMenu}>Home</a>
                        </li>
                        <li className='navbar-link'>
                            <a href='#about' onClick={toggleMenu}>About</a>
                        </li>
                        <li className='navbar-link'>
                            <a href='#skills' onClick={toggleMenu}>Skills</a>
                        </li>
                        <li className='navbar-link'>
                            <a href='#contact' onClick={toggleMenu}>Contact</a>
                        </li>
                    </ul>
                )
                }

        </div>
    );
    
};
    
export default Navbar;