import React, { useState } from "react";
import SummaryDisplay from "./SummaryDisplay";
import CharacterLimit from "./CharacterLimit";
import CloseButton from "./CloseButton"; // Import the new CloseButton component
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
    <div className="w-full relative bg-white pt-4 absolute bottom-24 space-y-3">
      <div className="flex justify-between items-start space-x-4 pl-2">
        {/* AI Summary Display */}
        {showAISummary && (
          <div className="flex-grow"> {/* Removed width restriction */}
            <SummaryDisplay
              summary={summary}
              isLoading={isLoading}
              onConfirm={handleConfirm}
            />
          </div>
        )}

        {/* Character Limit Slider & Close Button */}
        {showAISummary && (
          <div className="w-1/8 flex flex-col space-y-2 items-center">
            {/* Red Close Button */}
            <CloseButton onClose={handleCloseAISummary} /> {/* Using the new component */}
            
            {/* Character Limit Slider */}
            <CharacterLimit charLimit={charLimit} setCharLimit={setCharLimit} />
          </div>
        )}
      </div>
        
      {/* Input Bar and Buttons */}
      <div className="flex items-center space-x-5 pl-2 pr-2 bg-white relative z-10">
        <input
          type="text"
          className="flex-grow bg-offwhite border border-outline rounded-xl p-2 focus:outline-none"
          placeholder={placeholder || `Enter text...`}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="absolute right-20 bg-offwhite border border-outline p-2 rounded-xl hover:bg-outline shadow-md"
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
