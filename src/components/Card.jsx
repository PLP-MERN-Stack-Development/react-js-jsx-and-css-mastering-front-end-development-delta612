import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
