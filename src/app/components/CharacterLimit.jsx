import React from 'react';

const CharacterLimit = ({ charLimit, setCharLimit }) => {
  return (
    <div className="flex justify-center mt-5 relative w-16 h-16 border border-outline rounded-xl">
      {/* Slider */}
      <div
        className={`absolute w-full h-8 bg-white border border-outline rounded-xl transition-transform duration-300 ease-in-out transform ${
          charLimit === 320 ? "translate-y-8" : "translate-y-0"
        }`}
      ></div>

      {/* 160 Button */}
      <button
        className={`absolute w-full h-8 rounded-xl flex items-center justify-center text-lg ${
          charLimit === 160 ? "text-black shadow-md" : "text-gray-500"
        }`}
        onClick={() => setCharLimit(160)}
      >
        160
      </button>

      {/* 320 Button */}
      <button
        className={`absolute w-full h-8 rounded-xl flex items-center justify-center top-8 text-lg ${
          charLimit === 320 ? "text-black shadow-md" : "text-gray-500"
        }`}
        onClick={() => setCharLimit(320)}
      >
        320
      </button>
    </div>
  );
};

export default CharacterLimit;