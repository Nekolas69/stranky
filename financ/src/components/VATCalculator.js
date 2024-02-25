import React, { useState } from 'react';

const VATCalculator = () => {
  const [priceWithoutVAT, setPriceWithoutVAT] = useState(0);
  const [VATRate, setVATRate] = useState(0);

  const calculateVAT = () => {
    const VATPrice = (priceWithoutVAT * VATRate) / 100;
    const totalPrice = priceWithoutVAT + VATPrice;
    const difference = totalPrice - priceWithoutVAT;
    return { VATPrice, difference };
  };

  const handlePriceChange = (e) => {
    setPriceWithoutVAT(e.target.value);
  };

  const handleRateChange = (e) => {
    setVATRate(e.target.value);
  };

  const { VATPrice, difference } = calculateVAT();

  return (
    <div className='vat-calculator'>
      <h2>Výpočet DPH</h2>
      <div>
        <label>Cena bez DPH:</label>
        <input type="number" value={priceWithoutVAT} onChange={handlePriceChange} />
      </div>
      <div>
        <label>DPH sazba:</label>
        <input type="number" value={VATRate} onChange={handleRateChange} />
      </div>
      <div>
        <p>Celková cena s DPH: {VATPrice}</p>
        <p>Rozdíl: {difference}</p>
      </div>
    </div>
  );
};

export default VATCalculator;
