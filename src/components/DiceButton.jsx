import React from 'react';
import './DiceButton.css'; // Create a CSS file for styles

const DiceButton = ({ onClick }) => {
  return (
    <button className="dice-button" onClick={onClick}>
      🎲
    </button>
  );
};

export default DiceButton;
