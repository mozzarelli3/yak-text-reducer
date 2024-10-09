import React, { useState } from "react";
import SummaryDisplay from "./components/SummaryDisplay";
import { ArrowUp, WandSparkles } from "lucide-react";

const InputTextBar = ({ placeholder, onInputChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [showAIButton, setShowAIButton] = useState(false);
  const [showAISummary, setShowAISummary] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Show AI button if input exceeds 160 characters
    if (value.length >= 160) {
      setShowAIButton(true);
    } else {
      setShowAIButton(false);
    }
    
    if (onInputChange) {
      onInputChange(value);
    }
  };

  // Toggle AISummary visibility on AI button click
  const handleAIClick = () => {
    setShowAISummary(true);
  };

  return (
    <div className="w-full flex items-center space-x-5 pl-2 pr-2">
      <input
        type="text"
        className="flex-grow bg-offwhite border border-outline rounded-xl p-2 focus:outline-none"
        placeholder={placeholder || "Enter text..."}
        value={inputValue}
        onChange={handleInputChange}
      />
      {showAIButton && (
        <button
          className="absolute right-20 bg-offwhite border border-outline p-2 rounded-xl hover:bg-outline shadow-md"
          onClick={handleAIClick}
        >
          <WandSparkles />
        </button>
      )}

      <button className="bg-offwhite border border-outline p-2 rounded-xl hover:bg-outline shadow-md">
        <ArrowUp />
      </button>

      {showAISummary && <SummaryDisplay />}
    </div>
  );
};

export default InputTextBar;
