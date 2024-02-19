import React from 'react';
import Profile from './Profile';
import Hobbies from './Hobbies';
import './App.css'; // Import the CSS file

function App() {
  return (
    <div className="App">
      <div className="profile-container">
        <Profile />
      </div>
      <div className="hobbies-container">
        <Hobbies />
      </div>
    </div>
  );
}

export default App;
