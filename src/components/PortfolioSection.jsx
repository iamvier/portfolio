import React from 'react';
import ELearningBSLC from '../assets/portfolio/E-LearningBSLC.png';
import WebISLab from '../assets/portfolio/WebISLab.png';
import './PortfolioSection.css';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "JobQoo App Design",
      description: "A job search application with a focus on user experience and clean UI.",
      imageUrl: ELearningBSLC,
      link: "#", // Replace with the actual link
    },
    {
      title: "Furniture App Design",
      description: "An e-commerce app for selling furniture with modern UI elements.",
      imageUrl: WebISLab,
      link: "#", // Replace with the actual link
    },
    {
      title: "Glassmorphism",
      description: "A modern glassmorphism design interface for a social media app.",
      imageUrl: ELearningBSLC,
      link: "#", // Replace with the actual link
    },
    {
      title: "JobQoo Web Design",
      description: "Web design for a job search platform with a focus on startup culture.",
      imageUrl: WebISLab,
      link: "#", // Replace with the actual link
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-cards">
        {portfolioItems.map((item, index) => (
          <div className="portfolio-card" key={index}>
            <img src={item.imageUrl} alt={item.title} className="portfolio-image" />
            <div className="portfolio-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.link} className="view-link">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;