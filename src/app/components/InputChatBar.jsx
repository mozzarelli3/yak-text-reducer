import React, { useState } from "react";
import SummaryDisplay from "./SummaryDisplay";
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
    <div className="w-full relative">

      {/* AI Summary Display */}
      {showAISummary && (
        <div className="bg-white absolute -top-32 left-0 w-full p-4">
          <SummaryDisplay />
        </div>
      )}

      {/* Input Bar and Buttons */}
      <div className="flex items-center space-x-5 pl-2 pr-2 bg-white relative z-10">
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
      </div>
    </div>
  );
};

export default InputTextBar;
