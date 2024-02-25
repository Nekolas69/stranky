import React from 'react';

const HomePage = ({ income, outcome }) => {
  return (
    <div className='homepage'>
      <h2>Finanční přehled</h2>
      <div>
        <h3>Příjmy: {income}</h3>
        <h3>Výdaje: {outcome}</h3>
      </div>
    </div>
  );
};

export default HomePage;
