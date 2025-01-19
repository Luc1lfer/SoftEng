import React from 'react';
import './TrackingDashboard.css'; // Import the CSS for styling
import Sidebar from './elements/Sidebar.js';
import Header from './elements/Header.js';
import DeliveryList from './elements/DeliveryList.js';
import Map from './elements/Map.js';

const TrackingDashboard: React.FC = () => {
  return (
    <div className="tracking-dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content">
          <DeliveryList />
          <Map />
        </div>
      </div>
    </div>
  );
};

export default TrackingDashboard;