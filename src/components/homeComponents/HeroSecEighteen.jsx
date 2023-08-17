import React from 'react';
import './HeroSecEighteen.css'; // You can create this CSS file to style the section

import bangladeshMap from '../../assets/bdmap.png';

const MapSection = () => {
  const divisionData = [
    { name: 'Dhaka', registered: 1000 },
    { name: 'Chittagong', registered: 750 },
    { name: 'Rajshahi', registered: 500 },
    { name: 'Khulna', registered: 400 },
    { name: 'Barisal', registered: 300 },
    { name: 'Sylhet', registered: 200 },
    { name: 'Rangpur', registered: 150 },
    { name: 'Mymensingh', registered: 100 },
  ];

  return (
    <div className="map-section">
      <div className="map-container">
        <img src={bangladeshMap} alt="Bangladesh Map" className="map-image" />
      </div>
      <div className="division-list">
        <ul className="list-unstyled">
          {divisionData.map((division, index) => (
            <li key={index} className="division-item">
              <div className="division-box">
                <span className="division-name">{division.name}</span>
                <span className="registration-count">{division.registered}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapSection;






