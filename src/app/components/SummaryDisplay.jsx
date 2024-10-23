import React from 'react';
import { Check } from 'lucide-react';

const SummaryDisplay = ({ summary, isLoading, onConfirm }) => {
  return (
    <div className="bg-paleyellow p-4 h-44 border border-outline rounded-xl relative overflow-hidden">
      <h2 className="text-lg font-bold">Summary</h2>
      {isLoading ? (
        <p>Loading summary...</p>
      ) : (
        <p className="pr-10 sm:pr-28 overflow-y-auto max-h-28 text-sm sm:text-base" >{summary}</p>
      )}

      {/* Confirm button */}
      <button
        className={`absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-paleyellow border border-outline px-4 py-2 rounded-lg place-content-end ${
          isLoading
            ? "text-gray-500 cursor-not-allowed"
            : "hover:bg-yakyellow shadow-md"
        }`}
        onClick={onConfirm}
        disabled={isLoading}
      >
        {/* Text changes based on screen size */}
        <span className="block sm:hidden"><Check size={20} /></span> {/* For mobile */}
        <span className="hidden sm:block">Accept</span> {/* For larger screens */}
      </button>
    </div>
  );
};

export default SummaryDisplay;