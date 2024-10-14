import React from 'react';

const CloseButton = ({ onClose }) => {
  return (
    <button
      className="bg-palered text-red px-4 py-2 rounded-3xl shadow-md"
      onClick={onClose}
    >
      X
    </button>
  );
};

export default CloseButton;
