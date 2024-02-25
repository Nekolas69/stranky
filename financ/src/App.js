import React from 'react';
import './App.css'; // Import your CSS file
import HomePage from './components/HomePage';
import VATCalculator from './components/VATCalculator';
import CurrencyTransfer from './components/CurrencyTransfer';
import SavingInvestmentCalculator from './components/SavingInvestmentCalculator';
import LoginWindow from './components/LoginWindow';

const App = () => {
  return (
    <div className="container"> {/* Add a class name to the main container */}
      <HomePage income={1000} outcome={500} />
      <hr />
      <VATCalculator />
      <hr />
      <CurrencyTransfer />
      <hr />
      <SavingInvestmentCalculator />
      <hr />
      <LoginWindow />
    </div>
  );
};

export default App;
