import React from "react";
import "./Header.css";
import letterV from "../assets/icons/letter-v.png"; 
import linkedinIcon from "../assets/icons/blue-linkedin.png"; 
import githubIcon from "../assets/icons/github.png"; 

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <img src={letterV} alt="Name Icon" className="name-icon" /> 
      </div>
      <nav className="header-middle">
        <a href="#home">Terminal</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#skills">Skills</a>
      </nav>
      <div className="header-right">
        <span className="header-icons"> 
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </span>
        <span className="header-icons"> 
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;
