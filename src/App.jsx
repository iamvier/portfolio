import React from 'react';
import Header from './components/Header';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import SkillSection from './components/SkillSection';
import TerminalSection from './components/TerminalSection';

const App = () => {
  return (
    <div>
      <Header />
      <TerminalSection />
      <PortfolioSection />
      <SkillSection />
      <Footer />
    </div>
  );
};

export default App;
