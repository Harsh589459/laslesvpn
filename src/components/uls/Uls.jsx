import React from 'react'
import user from '../../assets/Group 1216.svg'
import location from '../../assets/Group 1215.svg'
import server from '../../assets/Group 1217.svg'
import './Uls.css'


function Uls() {
    return (
        <div className="uls-container">
            <div className="user">
                <img className='user-img' src={user} alt='' style={{ width: '17.89px', height: '19.46px', padding: 8, backgroundColor: '#FFECEC', borderRadius: '32.8px' }} />
                <div className="user-content" style={{ marginLeft: '17px' }}><span style={{ fontWeight: '700', color: '#0B132A', marginBottom: '2.35px' }}>90+</span> <br /> Users</div>

            </div>
            <div className="location">
                <img src={location} className="location-img" alt='' style={{ width: '17.89px', height: '19.46px', padding: 8, backgroundColor: '#FFECEC', borderRadius: '32.8px' }} />
                <div className="location-content" style={{ marginLeft: '17px' }}><span style={{
                    fontWeight: '700', color: '#0B132A', marginBottom: '2.35px'
                }}>30+</span>  <br />Locations</div>
            </div>
            <div className="server">
                <img src={server} alt="" className="server-img" style={{ width: '17.89px', height: '19.46px', padding: 8, backgroundColor: '#FFECEC', borderRadius: '32.8px' }} />
                <div className="location-content" style={{ marginLeft: '17px' }}><span style={{ fontWeight: '700', color: '#0B132A', marginBottom: '2.35px' }}>50+</span> <br />Servers</div>
            </div>

        </div>
    )
}

export default Uls