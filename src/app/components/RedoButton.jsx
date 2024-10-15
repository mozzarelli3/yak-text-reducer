import React from 'react';

const RedoButton = ({ onRedo }) => {
  return (
    <button
      className="bg-white px-4 py-2 border border-outline rounded-xl shadow-md w-16 flex justify-center"
      onClick={onRedo}
    >
      Redo
    </button>
  );
};

export default RedoButton;