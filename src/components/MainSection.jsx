import React from 'react';
import './MainSection.css';  // Linking the CSS

const MainSection = () => {
  return (
    <main className="main-container">
      <div className="text-section">
        <h1>Hey! I'm Viery, <br /> I love building things.</h1>
        <p>A cloud enthusiast that is</p>
        <div className="button-container">
          <button className="work-button">Work with me</button>
          <button className="projects-button">Check out my projects</button>
        </div>
      </div>

      <div className="avatar-section">
        <img src='src\assets\avatarImage.png' alt='Avatar' className="avatar-image" />
      </div>
    </main>
  );
};

export default MainSection;
