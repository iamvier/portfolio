import React, { useEffect, useState } from 'react';
import './TerminalSection.css';

const TerminalSection = () => {
    const themes = ['dark-theme', 'dracula-theme', 'forest-theme', 'ocean-theme'];
    const [currentTheme, setCurrentTheme] = useState('dark-theme'); // Store theme state

    const initialContent = [
        { type: 'text', value: 'Welcome', delay: 1000 },
        { type: 'text', value: 'Starting the server...', delay: 500 },
        {
            type: 'group', 
            value: [
                { type: 'text', value: 'Available commands::' },
                { type: 'command', code: '‎ about', description: 'Get to know who I am and my background.' },
                { type: 'command', code: '‎ github', description: 'Check out my GitHub projects and repositories.' },
                { type: 'command', code: '‎ linkedin', description: 'Explore my professional profile on LinkedIn.' },
                { type: 'command', code: '‎ restart', description: 'Clear the terminal and restart the session.' },
                { type: 'command', code: '‎ clear', description: 'Clean the terminal without restarting.' },
            ],
            delay: 2000
        },
        { type: 'path', value: '# user in ~/iamvier', delay: 500 }
    ];

    const [terminalContent, setTerminalContent] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [executedCommand, setExecutedCommand] = useState(null);
    
    useEffect(() => {
        let currentIndex = 0;

        const addContentWithCustomDelay = async () => {
            while (currentIndex < initialContent.length) {
                const item = initialContent[currentIndex];
                await delay(item.delay);

                if (item.type === 'group') {
                    setTerminalContent(prev => [...prev, ...item.value]);
                } else {
                    setTerminalContent(prev => [...prev, item]);
                }

                currentIndex++;
            }
        };
        addContentWithCustomDelay();
    }, []);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const handleKeyPress = async (event) => {
        if (event.key === 'Enter') {
            await delay(150);
            setExecutedCommand(inputValue);
            processCommand();
        }
    };

    const processCommand = () => {
        if (inputValue === 'about') {
            setTerminalContent(prev => [
                ...prev,
                { type: 'user-input', value: inputValue },
                { type: 'text', value: 'Name: Viery Joynaden' },
                { type: 'text', value: 'Age: 20' },
                { type: 'text', value: 'Location: Tangerang, Indonesia' },
                { type: 'text', value: 'Major: Information Systems in BINUS University' },
                { type: 'text', value: 'Interests: Web Development, Cloud Computing, and System Architecture' },
                {
                    type: 'tech-stack',
                    categories: [
                        {
                            title: 'Frontend',
                            technologies: [
                                { name: 'HTML', color: '#E34C26' },
                                { name: 'CSS', color: '#264DE4' },
                                { name: 'React', color: '#61DBFB' },
                                { name: 'Vite', color: '#646CFF' },
                                { name: 'Bootstrap', color: '#7952B3' }
                            ]
                        },
                        {
                            title: 'Backend',
                            technologies: [
                                { name: 'Java', color: '#b07219' },
                                { name: 'Laravel', color: '#FF2D20' },
                                { name: 'mySQL', color: '#00758F' },
                                { name: 'Node.js', color: '#50C878' }
                            ]
                        },
                        {
                            title: 'Cloud Platforms',
                            technologies: [
                                { name: 'AWS', color: '#FF9900' },
                                { name: 'Google Cloud', color: '#4285F4' }
                            ]
                        }
                    ]
                },
                { type: 'path', value: '# user in ~/iamvier' }
            ]);
        } else if (inputValue === 'github') {
            setTerminalContent(prev => [
                ...prev,
                { type: 'user-input', value: inputValue },
                { type: 'text', value: '<a href="https://github.com/iamvier" target="_blank">GitHub Profile</a>' },
                { type: 'path', value: '# user in ~/iamvier' }
            ]);
        } else if (inputValue === 'linkedin') {
            setTerminalContent(prev => [
                ...prev,
                { type: 'user-input', value: inputValue },
                { type: 'text', value: '<a href="https://linkedin.com/in/iamvier" target="_blank">LinkedIn Profile</a>' },
                { type: 'path', value: '# user in ~/iamvier' }
            ]);
        } else if (inputValue === 'restart') {
            setTerminalContent([]);
            let currentIndex = 0;
            setTimeout(() => {
                const resetContentWithDelay = async () => {
                    while (currentIndex < initialContent.length) {
                        const item = initialContent[currentIndex];
                        await delay(item.delay);
                        if (item.type === 'group') {
                            setTerminalContent(prev => [...prev, ...item.value]);
                        } else {
                            setTerminalContent(prev => [...prev, item]);
                        }
                        currentIndex++;
                    }
                };
                resetContentWithDelay();
            }, 500);
        } else if (inputValue === 'clear') {
            setTerminalContent([]);
        } else {
            setTerminalContent(prev => [
                ...prev,
                { type: 'error', value: `command not found: ${inputValue}` },
                { type: 'path', value: '# user in ~/iamvier' }
            ]);
        }
        setInputValue('');
    };

     const changeTheme = (newTheme) => {
        setCurrentTheme(newTheme);
    };
    
    return (
        <div className='terminal-section'>
            <div className="theme-buttons">
                <button onClick={() => changeTheme('dark-theme')}>Dark Theme</button>
                <button onClick={() => changeTheme('dracula-theme')}>Dracula Theme</button>
                <button onClick={() => changeTheme('forest-theme')}>Forest Theme</button>
                <button onClick={() => changeTheme('ocean-theme')}>Ocean Theme</button>
            </div>
            
            <div className={`terminal-container ${currentTheme}`} onClick={() => document.querySelector('input').focus()}>                <div className="terminal-header">
                    <span className="header-text">github.com/iamvier</span>
                </div>
                <div className="terminal-body">
                    {terminalContent.map((item, index) => {
                        if (item.type === 'text') {
                            return <p key={index} dangerouslySetInnerHTML={{ __html: item.value }} />;
                        } else if (item.type === 'tech-stack') {
                            return (
                                <div key={index} className="tech-stack">
                                    {item.categories.map((category, i) => (
                                        <div key={i} className="category">
                                            <p>{category.title}:</p>
                                            <ul>
                                                {category.technologies.map((tech, j) => (
                                                    <li key={j} style={{ color: tech.color }}>
                                                        {tech.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            );
                        } else if (item.type === 'command') {
                            return (
                                <p key={index}>
                                    <span className="command">{item.code}</span> {item.description}
                                </p>
                            );
                        } else if (item.type === 'path') {
                            return <p key={index} className="terminal-path">{item.value}</p>;
                        } else if (item.type === 'user-input') {
                            return <p key={index} className="user-command">{item.value}</p>;
                        } else if (item.type === 'error') {
                            return <p key={index} className="error">{item.value}</p>;
                        }
                        return null;
                    })}
                    <div className="input-line">
                        <i className='fas fa-angle-right' id='angle-right'></i>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            autoFocus
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalSection;