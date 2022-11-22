import React from 'react'
import free from '../../assets/Free.svg'
import './Plan.css'
import tick from '../../assets/Vector.svg'

function Plan() {
    return (
        <div className="plan-container">
            <div className="plan-content">
                <div className="plan-heading">
                    Choose Your Plan
                </div>
                <div className="plan-subheading">
                    Let's choose the package that is best for you and explore it happily and <br />cheerfully.
                </div>
            </div>
            <div className="plan-boxes">
                <div className="plan-box1 box">
                    <img src={free} alt='' />
                    <div className="box1-head head">
                        Free Plan
                    </div>
                    <ul className='box1-list list'>
                        <li><img src={tick} alt='' />Unlimited Bandwidth</li>
                        <li><img src={tick} alt='' />Encrypted Connection</li>
                        <li><img src={tick} alt='' />No Traffic Logs</li>
                        <li><img src={tick} alt='' />Works on All Devices</li>
                    </ul>
                    <div className="box-bottom" style={{ marginTop: '14.4rem' }}>
                        <div className="box-end">Free</div>
                        <button className='btn'>Select</button>
                    </div>
                </div>

                <div className="plan-box2 box">
                    <img src={free} alt='' />
                    <div className="box2-head head">
                        Standard Plan
                    </div>
                    <ul className='box2-list list'>
                        <li><img src={tick} alt='' />Unlimited Bandwidth</li>
                        <li><img src={tick} alt='' />Encrypted Connection</li>
                        <li><img src={tick} alt='' />Yes Traffic Logs</li>
                        <li><img src={tick} alt='' />Works on All Devices</li>
                        <li><img src={tick} alt='' />Connect Anyware</li>
                    </ul>

                    <div className="box-bottom" style={{ marginTop: '12.5rem' }}>
                        <div className="box-end">$9<span>/ mo</span></div>
                        <button className='btn'>Select</button>
                    </div>
                </div>

                <div className="plan-box3 box">
                    <img src={free} alt='' />
                    <div className="box3-head head">
                        Premium Plan
                    </div>
                    <ul className='box3-list list'>
                        <li><img src={tick} alt='' />Unlimited Bandwidth</li>
                        <li><img src={tick} alt='' />Encrypted Connection</li>
                        <li><img src={tick} alt='' />Yes Traffic Logs</li>
                        <li><img src={tick} alt='' />Works on All Devices</li>
                        <li><img src={tick} alt='' />Connect Anyware</li>
                        <li><img src={tick} alt='' />Get New Features</li>
                    </ul>

                    <div className="box-bottom" >
                        <div className="box-end">$12<span>
                            / mo</span></div>
                        <button className='btn'>Select</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Plan