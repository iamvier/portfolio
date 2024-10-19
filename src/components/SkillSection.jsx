import React from "react";
import './SkillSection.css';

const SkillSection = () => {
    const frontendSkills = [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Vite', icon: 'fas fa-rocket' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
    ];

    const backendSkills = [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'Laravel', icon: 'fab fa-laravel' },
        { name: 'Java', icon: 'fab fa-java' },
    ];

    const tools = [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'Eclipse', icon: 'fas fa-moon' },
    ];

    const cloud = [
      { name: 'AWS', icon: 'fab fa-aws' },
      { name: 'Google Cloud', icon: 'fab fa-google' }
    ];


    return (
        <section className="skill-section" id="skills">
            <h2>Skills</h2>
            <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skills">
                    {frontendSkills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <i className={skill.icon}></i>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skill-category">
                <h3>Backend</h3>
                <div className="skills">
                    {backendSkills.map((skill, index) => (
                        <div className="skill" key={index}>
                            <i className={skill.icon}></i>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skill-category">
                <h3>Tools</h3>
                <div className="skills">
                    {tools.map((skill, index) => (
                        <div className="skill" key={index}>
                            <i className={skill.icon}></i>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skill-category">
                <h3>Cloud</h3>
                <div className="skills">
                    {cloud.map((skill, index) => (
                        <div className="skill" key={index}>
                            <i className={skill.icon}></i>
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
