import React, { useState } from "react";
import SummaryDisplay from "./SummaryDisplay";
import CharacterLimit from "./CharacterLimit";
import CloseButton from "./CloseButton";
import RedoButton from "./RedoButton";
import { ArrowUp, Sparkles } from "lucide-react";

const InputTextBar = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const [showAISummary, setShowAISummary] = useState(false);
  const [summary, setSummary] = useState(""); // To store the summary
  const [isLoading, setIsLoading] = useState(false); // To track loading state
  const [charLimit, setCharLimit] = useState(160); // Default character limit to 160

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (value.length >= 160 && !showAISummary) {
      setShowAISummary(true);
    }
  };

  const handleAIClick = async () => {
    setIsLoading(true); // Set loading to true
    setShowAISummary(true); // Show the summary display immediately
    
    try {
      // Make a POST request to the backend summarisation API
      const response = await fetch('https://ai-api-7i1d.onrender.com/summarise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputValue, charLimit }),  // Send input text to the backend
      });

      if (!response.ok) {
        throw new Error('Failed to fetch summary');
      }

      const data = await response.json();
      setSummary(data.summary); // Set the received summary
    } catch (error) {
      console.error('Error fetching summary:', error);
      setSummary('Error generating summary.');
    } finally {
      setIsLoading(false); // Set loading to false once fetching is done
    }
  };

  const handleCloseAISummary = () => {
    setShowAISummary(false);  // Hide the summary display
    setSummary(''); // Reset the summary state
  };

  const handleConfirm = () => {
    setShowAISummary(false);  // Hide the summary display when confirmed
    setSummary(''); // Reset the summary state
  };

  return (
    <div className="w-full relative bg-white pt-4 absolute bottom-0 space-y-3">
      <div className="flex justify-between items-start space-x-4 absolute bottom-20 p-3 bg-white w-full">
        {/* AI Summary Display */}
        {showAISummary && (
          <div className="flex-grow">
            <SummaryDisplay
              summary={summary}
              isLoading={isLoading}
              onConfirm={handleConfirm}
            />
          </div>
        )}

        {/* Character Limit Slider & Close Button */}
        {showAISummary && (
          <div className="w-1/8 flex flex-col space-y-4 items-center">
            {/* Red Close Button */}
            <CloseButton onClose={handleCloseAISummary} />
            
            {/* Redo Button */}
            <RedoButton onRedo={handleAIClick} />

            {/* Character Limit Slider */}
            <CharacterLimit charLimit={charLimit} setCharLimit={setCharLimit} />
          </div>
         )}     
              
              

        
      </div>
        
      {/* Input Bar and Buttons */}
      <div
        className={`absolute bottom-0 w-full px-4 py-3 flex items-center space-x-5 transition-all ${
          showAISummary
            ? "bg-white " // Styles when AI summary is shown
            : "bg-white " // Styles when AI summary is hidden
        }`}
      >
      {/* <div className="flex items-center space-x-5 pl-2 pr-2 bg-white relative z-10"> */}
        <div className="relative w-full">
          <input
            type="text"
            className="w-full pr-16 bg-offwhite border border-outline rounded-xl p-2 focus:outline-none pr-32"
            placeholder={placeholder || `Enter text...`}
            value={inputValue}
            onChange={handleInputChange}
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pr-6 text-gray-600 text-sm">
            {inputValue.length}/{charLimit}
          </span>
        </div>
        <button
          className="absolute right-16 bg-offwhite border border-outline p-2 rounded-xl space-x-2hover:bg-outline shadow-md"
          onClick={handleAIClick}
        >
          <Sparkles />
        </button>

        <button className="bg-offwhite border border-outline p-2 rounded-xl hover:bg-outline shadow-md">
          <ArrowUp />
        </button>
      </div>
    </div>
  );
};

export default InputTextBar;
