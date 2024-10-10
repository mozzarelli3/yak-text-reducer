import React, { useState } from "react";
import SummaryDisplay from "./SummaryDisplay";
import { ArrowUp, Sparkles } from "lucide-react";

const InputTextBar = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [showAIButton, setShowAIButton] = useState(false);
  const [showAISummary, setShowAISummary] = useState(false);
  const [summary, setSummary] = useState(""); // To store the summary

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Show AI button if input exceeds 160 characters
    if (value.length >= 160 && !showAISummary) {
      setShowAIButton(true);
    } else {
      setShowAIButton(false);
    }
  };

  const handleAIClick = async () => {
    try {
      // Make a POST request to the backend summarization API
      const response = await fetch('https://ai-api-chi.vercel.app/summarise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputValue }),  // Send input text to the backend
      });

      if (!response.ok) {
        throw new Error('Failed to fetch summary');
      }

      const data = await response.json();

      // Set the received summary to state
      setSummary(data.summary);

      // Show the summary on the UI
      setShowAISummary(true);
      setShowAIButton(false);
    } catch (error) {
      console.error('Error fetching summary:', error);
    }
  };

  const handleConfirm = () => {
    setShowAISummary(false);  // Hide the summary display when confirmed
  };

  return (
    <div className="w-full relative">
      {/* AI Summary Display */}
      {showAISummary && (
        <div className="absolute -top-32 left-0 w-full bg-white z-20 p-4">
          <SummaryDisplay summary={summary} onConfirm={handleConfirm} />
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
            <Sparkles />
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
