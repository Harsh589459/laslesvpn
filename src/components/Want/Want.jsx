import React from 'react'
import men from '../../assets/Illustration 1.svg';
import './Want.css';

function Want() {
    return (
        <div className="want-container">
            <div className="want-left">
                <div className="want-bold">
                    <h1 style={{ fontSize: '43px', fontWeight: '500' }}> Want anything to be<br /> easy with <bold style={{ fontWeight: '700' }}>LaslesVPN.</bold></h1>
                </div>
                <div className="want-light" style={{ fontSize: '14.9px' }}>
                    Provide a network for all your needs with ease and fun using <span style={{
                        fontWeight: '500', color: '#4F5665'
                    }}> LaslesVPN</span><br />  discover interesting features from us.
                </div>
                <div className="want-buttons">
                    <button className='want-button' style={{
                        fontWeight: 700, fontSize: 14.9, fontStyle: 'normal'
                    }}> Get Started</button>
                </div>

            </div>
            <div className="want-right">
                <img src={men} alt='' style={{ marginRight: '8.2rem', height: '20rem', width: '40rem', paddingLeft: 0, marginLeft: 0 }} />

            </div>
        </div>
    )
}

export default Want