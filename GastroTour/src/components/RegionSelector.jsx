import React from 'react';
import './RegionSelector.css';

const RegionSelector = ({ regions, currentRegion, onRegionChange }) => {
  return (
    <div className="region-selector-container">
      <div className="container">
        <div className="region-chips">
          {regions.map((region) => (
            <button
              key={region.id}
              className={`region-chip ${currentRegion.id === region.id ? 'active' : ''}`}
              onClick={() => onRegionChange(region)}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionSelector;
