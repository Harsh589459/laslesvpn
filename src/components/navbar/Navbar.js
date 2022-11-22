import React from 'react'
import logo from '../../assets/logo.svg';
import './Navbar.css';

function Navbar() {
    return (
        <div className='nav-container'>
            <div className='nav-heading'>
                <img src={logo} alt='logo' height={17.02} />
            </div>
            <div className='nav-pages'>
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className='nav-right'>
                <div className='nav-signin'>
                    Sign In
                </div>
                <div className='nav-signup'>
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default Navbar