import React from 'react';
import AlertButton from './AlertButton'; // Import the AlertButton component
import Toolbar from './Toolbar'; // Import the Toolbar component

const NestedButtons = () => {
  const handleOuterClick = () => {
    alert('Outer button clicked!');
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); // Stops propagation to prevent outer button click handler from executing
    alert('Inner button clicked!');
  };

  return (
    <div>
      <Toolbar /> {/* Render the Toolbar component */}
      <button onClick={handleOuterClick}>
        Outer Button
        <button onClick={handleInnerClick} style={{ margin: '10px' }}>
          Inner Button
        </button>
      </button>
      <AlertButton /> {/* Render the AlertButton component */}
    </div>
  );
};

export default NestedButtons;
