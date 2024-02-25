import React, { useState } from 'react';

const CurrencyTransfer = () => {
  const [baseCurrency, setBaseCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [transferredAmount, setTransferredAmount] = useState(0);

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  const handleTargetCurrencyChange = (e) => {
    setTargetCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransfer = () => {

    setTransferredAmount(amount);
  };

  return (
    <div className='currency-transfer'>
      <h2>Převod měny</h2>
      <div>
        <label>Základní měna:</label>
        <input type="text" value={baseCurrency} onChange={handleBaseCurrencyChange} />
      </div>
      <div>
        <label>Cílová měna:</label>
        <input type="text" value={targetCurrency} onChange={handleTargetCurrencyChange} />
      </div>
      <div>
        <label>Částka:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={handleTransfer}>Převést</button>
      <p>Převedená částka: {transferredAmount}</p>
    </div>
  );
};

export default CurrencyTransfer;
