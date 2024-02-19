import React from 'react';
import profileImage from './photo_2024-02-18_21-08-17.jpg'; 
import './App.css'; // Import the CSS file

const Profile = () => {
  return (
    <div className="profile">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <p className="profile-intro">Hello, my name is Dawit Zebro.</p>
    </div>
  );
}

export default Profile;
