import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg';
import fb from '../../assets/Facebook.svg'
import twitter from '../../assets/Twitter.svg';
import insta from '../../assets/Instagram.svg';

function Footer() {
    return (
        <div className="f-container">
            <div className="column">
                <img className='logo' src={logo} alt='' />
                <div className="desc">
                    <span>LaslesVPN</span> is a private virtual network that<br /> has unique features and has high security.

                </div>
                <div className="f-img">
                    <img src={fb} alt='' />
                    <img src={twitter} alt='' />
                    <img src={insta} alt='' />
                </div>

                <div className="trademark">
                    ©2020Lasles<span>VPN</span>
                </div>

            </div>

            <div className="column">
                Product
                <ul>
                    <li>Download</li>
                    <li>Pricing</li>
                    <li>Location</li>
                    <li>Server</li>
                    <li>Countries</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className="column">
                Engage
                <ul>
                    <li>LaslesVPN ?</li>
                    <li>FAQ</li>
                    <li>Tutorials</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>

            <div className="coulmn-4">
                Earn Money
                <ul>
                    <li>Affiliate</li>
                    <li>Become Partner</li>
                </ul>
            </div>


        </div>
    )
}

export default Footer