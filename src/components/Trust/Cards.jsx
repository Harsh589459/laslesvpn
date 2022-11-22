import React from 'react'
import picA from '../../assets/Ellipse 175.png'
import picB from '../../assets/Ellipse 175 (1).png'
import picC from '../../assets/Ellipse 175 (2).png'
import star from '../../assets/Star.svg';
import './Card.css'

function Cards() {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-main">
                    <div className="card-img">
                        <img src={picA} alt='' />
                    </div>
                    <div className="card-name">Viezh Robert
                        <br /><span className='loc'>Warsaw, Poland</span> </div>
                    <div className="card-rate"> 4.5
                        <img src={star} alt='' />
                    </div>
                </div>
                <div className="card-content">
                    “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                </div>
            </div>
            <div className="card">
                <div className="card-main">
                    <div className="card-img">
                        <img src={picB} alt='' />
                    </div>
                    <div className="card-name">Yessica Christy
                        <br /><span className='loc'>Shanxi, China</span> </div>
                    <div className="card-rate"> 4.5
                        <img src={star} alt='' />
                    </div>
                </div>
                <div className="card-content">
                    “I like it because I like to travel far and still can connect with high speed.”.                </div>
            </div>
            <div className="card">
                <div className="card-main">
                    <div className="card-img">
                        <img src={picC} alt='' />
                    </div>
                    <div className="card-name">Kim Young Jou
                        <br /><span className='loc'>Seoul, South Korea</span> </div>
                    <div className="card-rate"> 4.5
                        <img src={star} alt='' />
                    </div>
                </div>
                <div className="card-content">
                    “This is very unusual for my business that currently requires a virtual private network that has high security.”.                </div>
            </div>


        </div>
    )
}

export default Cards