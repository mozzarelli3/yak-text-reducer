import React from 'react';

function testLog() {
    console.log("hello i am a googleberry");
};

const TestButton = () => {
  return (
    <button
      onClick={testLog}
      aria-label="test"
    >
      Test
    </button>
  );
};

export default TestButton;