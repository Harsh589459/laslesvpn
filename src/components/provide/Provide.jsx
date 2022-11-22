import React from 'react'
import './Provide.css';
import men from '../../assets/Illustration 2.svg';
import tick from '../../assets/Group 1120.svg'

function Provide() {
    return (
        <div className="provide-container">
            <div className="provide-img">
                <img src={men} alt='' />

            </div>

            <div className="provide-right">
                <div className="provide-head">
                    We Provide Many <br /><span>Features You Can Use</span>
                </div>
                <div className="provide-desc">
                    You can explore the features that we provide with fun and<br /> have their own functions each feature.
                </div>
                <div className="provide-points">
                    <ul className="provide-list" style={{ marginRight: 0, padding: 0 }}>
                        <li className='tick'><img src={tick} alt='' style={{ width: '20px', height: '20px' }} />Powerfull online protection.</li>
                        <li className='tick'><img src={tick} alt='' style={{ width: '20px', height: '20px' }} />Internet without borders.</li>
                        <li className='tick'><img src={tick} alt='' style={{ width: '20px', height: '20px' }} />Supercharged VPN</li >
                        <li className='tick'><img src={tick} alt='' style={{ width: '20px', height: '20px' }} />No specific time limits.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Provide