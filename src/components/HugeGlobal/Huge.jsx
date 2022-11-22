import React from 'react'
import './Huge.css'
import map from '../../assets/Huge Global.svg'
import reddit from '../../assets/Mask Group (1).svg';
import amazon from '../../assets/Mask Group (2).svg';
import discord from '../../assets/Mask Group (3).svg';
import netflix from '../../assets/Mask Group.svg';
import spotify from '../../assets/Mask Group (4).svg';

function Huge() {
    return (
        <div className="huge-container">
            <div className="huge-heading">
                Huge Global Network <br /> of Fast VPN
            </div>
            <div className="huge-subheading">
                See <span>LaslesVPN</span> everywhere to make it easier for you when you move <br />locations.
            </div>
            <div className="huge-map">
                <img src={map} alt='' />

            </div>
            <div className="huge-sites">
                <img src={netflix} alt='' style={{ height: '7rem' }} />
                <img src={reddit} alt='' style={{ height: '3rem' }} />
                <img src={amazon} alt='' style={{ height: '12rem' }} />
                <img src={discord} alt='' style={{ height: '4rem' }} />
                <img src={spotify} alt='' style={{ height: '3rem' }} />


            </div>
        </div>

    )
}

export default Huge