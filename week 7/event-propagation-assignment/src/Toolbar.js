import React from 'react';
import AlertButton from './AlertButton';

const Toolbar = () => {
  // Define an array of button properties
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
    // Add more button objects as needed
  ];

  return (
    <div>
      {/* Map over the buttons array and render an AlertButton for each item */}
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message}>
          {button.children}
        </AlertButton>
      ))}
    </div>
  );
};

export default Toolbar;
