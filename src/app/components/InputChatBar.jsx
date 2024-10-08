import React, { useState } from 'react';

const InputTextBar = ({ placeholder, onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (onInputChange) {
      onInputChange(value);
    }
  };

  return (
    <div className="w-full flex items-center space-x-2">
      <input
        type="text"
        className="flex-grow bg-offwhite border border-outline rounded-xl p-2 focus:outline-none"
        placeholder={placeholder || 'Enter text...'}
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="bg-offwhite border border-outline p-2 rounded-xl hover:bg-outline shadow-md"
      >
        Submit
      </button>
    </div>
  );
};

export default InputTextBar;
