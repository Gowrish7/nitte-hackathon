// Card.js

import React from 'react';
import './Card.css';

const Card = ({ title, totaldriver, totalcustomer, ongoingfleet }) => {
    return (
        <>
            <div className="overview-total">
                <h3>overview</h3>
            <div className="overview">
                <div className="card">
                    <img alt={title} />
                    <div className="card-content">
                        <h3>Total Drivers</h3>
                        <p>{totaldriver}</p>
                    </div>
                </div>
                <div className="card">
                    <img alt={title} />
                    <div className="card-content">
                        <h3>Customers</h3>
                        <p>{totalcustomer}</p>
                    </div>
                </div>
                <div className="card">
                    <img alt={title} />
                    <div className="card-content">
                        <h3>On going Fleets</h3>
                        <p>{ongoingfleet}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Card;
