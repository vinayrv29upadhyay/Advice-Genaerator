import React, { useState, useEffect } from 'react';
import AdviceCard from './components/AdviceCard';
import DiceButton from './components/DiceButton';
import './App.css';

const App = () => {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app-container">
      <AdviceCard advice={advice} />
      <DiceButton onClick={fetchAdvice} />
    </div>
  );
};

export default App;
