import React from 'react';
import './Map.css';

const Map: React.FC = () => {
  return (
    <div className="map">
      <h2>Map View</h2>
      <img src="/map-placeholder.png" alt="Map showing delivery routes" />
    </div>
  );
};

export default Map;
