import React from 'react';
import ELearningBSLC from '../assets/portfolio/E-LearningBSLC.png';
import WebISLab from '../assets/portfolio/WebISLab.png';
import OJTBSLC from '../assets/portfolio/ojtbslc.png';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "BSLC Landing Page Design",
      description: "A landing page design for the Binus Student Learning Community (BSLC) for training purposes.",
      imageUrl: OJTBSLC,
      link: "https://iamvier.github.io/ITDEV-OJT-BSLC/"
    },
    {
      title: "ISLab Recruitment Website",
      description: "An official recruitment website for the Information Systems Laboratory at BINUS University.",
      imageUrl: WebISLab,
      link: "https://islab.apps.binus.ac.id/recruitmentislab/"
    },
    {
      title: "E-Learning BSLC",
      description: "An e-learning platform for students to access learning materials online.",
      imageUrl: ELearningBSLC,
      link: "https://elearning.bslc.or.id/"
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-cards">
        {portfolioItems.map((item, index) => (
          <a href={item.link} className="portfolio-card" key={index}>
            <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="view-link" id="view-button">View</a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;