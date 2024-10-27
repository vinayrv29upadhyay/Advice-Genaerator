import React from 'react';
import './AdviceCard.css'; // Create a CSS file for styles

const AdviceCard = ({ advice }) => {
  return (
    <div className="advice-card">
      <h1>{advice}</h1>
    </div>
  );
};

export default AdviceCard;
