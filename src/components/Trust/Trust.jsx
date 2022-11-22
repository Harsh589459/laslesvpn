import React from 'react'
import Cards from './Cards';
import './Trust.css';

function Trust() {
    return (
        <div className="trust-container">
            <div className="trust-heading">
                Trusted by Thousands of <br /> Happy Customer
            </div>
            <div className="trust-subheading">
                These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.
            </div>

            <div className="trust-cards">
                <Cards />
            </div>
        </div>
    )
}

export default Trust