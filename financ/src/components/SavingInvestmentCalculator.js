import React, { useState } from 'react';

const SavingInvestmentCalculator = () => {
  const [startingAmount, setStartingAmount] = useState(0);
  const [monthlyDeposit, setMonthlyDeposit] = useState(0);
  const [annualInterestRate, setAnnualInterestRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [futureAmount, setFutureAmount] = useState(0);

  const calculateFutureAmount = () => {

    const interestRatePerMonth = annualInterestRate / 12 / 100;
    const totalMonths = duration * 12;
    const futureValue = startingAmount * Math.pow(1 + interestRatePerMonth, totalMonths) +
                        monthlyDeposit * (Math.pow(1 + interestRatePerMonth, totalMonths) - 1) / interestRatePerMonth;
    return futureValue.toFixed(2);
  };

  const handleStartingAmountChange = (e) => {
    setStartingAmount(e.target.value);
  };

  const handleMonthlyDepositChange = (e) => {
    setMonthlyDeposit(e.target.value);
  };

  const handleAnnualInterestRateChange = (e) => {
    setAnnualInterestRate(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleCalculate = () => {
    const futureValue = calculateFutureAmount();
    setFutureAmount(futureValue);
  };

  return (
    <div className='saving-investment-calculator'>
      <h2>Kalkulačka spoření/investic</h2>
      <div>
        <label>Počáteční částka:</label>
        <input type="number" value={startingAmount} onChange={handleStartingAmountChange} />
      </div>
      <div>
        <label>Měsíční vklad:</label>
        <input type="number" value={monthlyDeposit} onChange={handleMonthlyDepositChange} />
      </div>
      <div>
        <label>Roční úroková sazba (%):</label>
        <input type="number" value={annualInterestRate} onChange={handleAnnualInterestRateChange} />
      </div>
      <div>
        <label>Doba trvání (roky):</label>
        <input type="number" value={duration} onChange={handleDurationChange} />
      </div>
      <button onClick={handleCalculate}>Spočítat</button>
      <p>Odhadovaná budoucí hodnota: {futureAmount}</p>
    </div>
  );
};

export default SavingInvestmentCalculator;
