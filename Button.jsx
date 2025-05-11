import React from 'react';
import './Button.css'; // Optional: if you want custom styles

/**
 * A basic button component for UI systems.
 * Props:
 * - label: text inside the button
 * - onClick: function to call when clicked
 * - type: "primary" or "secondary"
 */
const Button = ({ label, onClick, type = 'primary' }) => {
  return (
    <button
      className={\`my-button \${type}\`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
