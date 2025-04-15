import React from 'react';
import './Button.css';

const Button = ({ text = 'Click Me', alt = 'animated button', className }) => {
  return (
    <button alt={alt} className={`${className} mainButton`}>
      {[...text].map((char, index) => (
        <i key={index}>{char === ' ' ? '\u00A0' : char}</i>
      ))}
    </button>
  );
};

export default Button;
