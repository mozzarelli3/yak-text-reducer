import React from 'react';

const SummaryDisplay = ({ summary, isLoading, onConfirm }) => {
  return (
    <div className="bg-paleyellow p-4 h-44 border border-outline rounded-xl relative">
      <h2 className="text-lg font-bold">Summary</h2>
      {isLoading ? (
        <p>Loading summary...</p>
      ) : (
        <p className="pr-28">{summary}</p>
      )}

      {/* Confirm button */}
      <button
        className={`absolute bottom-4 right-4 bg-paleyellow border border-outline px-4 py-2 rounded-lg place-content-end ${
          isLoading
            ? "text-gray-500 cursor-not-allowed"
            : "hover:bg-yakyellow shadow-md"
        }`}
        onClick={onConfirm}
        disabled={isLoading}
      >
        Confirm
      </button>
    </div>
  );
};

export default SummaryDisplay;