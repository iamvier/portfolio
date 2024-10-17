import React from 'react';
import Header from './components/Header';
import MainSection from './components/mainSection';
import PortfolioSection from './components/PortfolioSection';
import Footer from './components/Footer';
import TerminalSection from './components/TerminalSection';

const App = () => {
  return (
    <div>
      <Header />
      <TerminalSection />
      <PortfolioSection />
      <Footer />
    </div>
  );
};

export default App;
