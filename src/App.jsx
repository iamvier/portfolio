import React from 'react';
import Header from './components/Header';
import PortfolioSection from './components/PortfolioSection';
import SkillSection from './components/SkillSection';
import TerminalSection from './components/TerminalSection';

const App = () => {
  return (
    <div>
      <Header />
      <TerminalSection />
      <PortfolioSection />
      <SkillSection />
    </div>
  );
};

export default App;
