import React, { useEffect, useState } from 'react';
import whiteRightAngle from '../assets/icons/whiteRightAngle.svg';
import greenRightAngle from '../assets/icons/greenRightAngle.svg'; //belum kepakai
import './TerminalSection.css';

const TerminalSection = () => {
    const initialContent = [
        { type: 'text', value: 'Welcome', delay: 1000 },
        { type: 'text', value: 'Starting the server...', delay: 500 },
        {
            type: 'group', 
            value: [
                { type: 'text', value: 'You can run several commands:' },
                { type: 'command', code: '‎ about me', description: 'Who am I and what do I do.', delay: 500 },
                { type: 'command', code: '‎ github', description: 'View my GitHub profile.' },
                { type: 'command', code: '‎ linkedin', description: 'View my LinkedIn profile.' },
                { type: 'command', code: '‎ clear', description: 'Clear the terminal.' },
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
        //Ngulangin input tapi masih belum benar karena maunya waktu inputnya success baru repeat, error gk direpeat.
        setTerminalContent(prev => [
            ...prev,
            { type: 'user-input', value: inputValue }
        ]);

        if (inputValue === 'about me') {
            setTerminalContent(prev => [
                ...prev,
                { type: 'text', value: 'Name: Viery' },
                { type: 'text', value: 'Age: 20' },
                { type: 'text', value: 'Currently: Studying Information Systems in BINUS University' },
                { type: 'path', value: '# user in ~/iamvier' }
            ]);
        } else if (inputValue === 'github') {
            setTerminalContent(prev => [
                ...prev,
                { type: 'text', value: '<a href="https://github.com/iamvier" target="_blank">GitHub Profile</a>' },
                { type: 'path', value: '# user in ~/iamvier' }
            ]);
        } else if (inputValue === 'linkedin') {
            setTerminalContent(prev => [
                ...prev,
                { type: 'text', value: '<a href="https://linkedin.com/in/iamvier" target="_blank">LinkedIn Profile</a>' },
                { type: 'path', value: '# user in ~/iamvier' }
            ]);
        } else if (inputValue === 'clear') {
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
        } else {
            setTerminalContent(prev => [
                ...prev,
                { type: 'error', value: `command not found: ${inputValue}` },
                { type: 'path', value: '# user in ~/iamvier' }
            ]);
        }
        setInputValue('');
    };

    return (
        <div className="terminal-container" onClick={() => document.querySelector('input').focus()}>
            <div className="terminal-header">
                <span className="header-text">github.com/iamvier</span>
            </div>
            <div className="terminal-body">
                {terminalContent.map((item, index) => {
                    if (item.type === 'text') {
                        return <p key={index} dangerouslySetInnerHTML={{ __html: item.value }} />;
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
                    <img src={whiteRightAngle} alt="Right angle icon" id="white-right-angle"/>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress} //perlu buat enter
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default TerminalSection;
