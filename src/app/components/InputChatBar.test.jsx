import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
// import * as utils from './utils'; // Import all exports from utils
// 
import InputChatBar from './InputChatBar';
import * as InputChatBarModule from './InputChatBar';

import React from 'react';

describe('InputChatBar Component', () => {
  it('should allow user to type in text input', () => {
    // test code
  });
});

// Tests:
  // Test typing into the input field
    describe('InputTextBar Component', () => {
      it('should allow user to type in text input', () => {
        const { getByPlaceholderText } = render(<InputChatBar />);
        const inputElement = getByPlaceholderText('Enter text...');
    
        // Simulate typing into the input field
        fireEvent.change(inputElement, { target: { value: 'Sample text' } });
    
        // Check that the input value is updated
        expect(inputElement.value).toBe('Sample text');
      });
    });







// -------------------------------- TEST THAT DOES NOT WORK --------------------------------

// JOSH - I am trying to write a test that checks to see that the handleAIClick function is triggered once the AI summary button (the one on line 121 in the InputChatBar.jsx file)
// I have been playing around with it and trying different things so it isn't in a good state sorry but good luck
// If you can't crack it that is okay, I'm going to get Jimmy (yakchat boss) to look at it next week


// Test button click functionality - ensure the summarisation button works and triggers the API call
describe('Summarise button', () => {
  it('handles AI summary when clicked', async () => {
    // const testLogSpy = vi.spyOn(InputChatBarModule, 'testLog');

    // render(<InputChatBar />);



    const handleAIClick = vi.fn(); // Vitest's vi.fn() for mocking
    const testLog = vi.fn()
    const setShowAISummary = vi.fn(); // Mock function for setShowAISummary
    // const setIsLoading = vi.fn(); // Mock function for setIsLoading
    // const setSummary = vi.fn(); // Mock function for setSummary

    const { findByRole, getByPlaceholderText } = await render(
      <InputChatBar
        handleAIClick={handleAIClick}
        testLog={testLog}

        setShowAISummary={setShowAISummary}
      // setIsLoading={setIsLoading} 
      // setSummary={setSummary}
      />
    );

    // Simulate entering 160 characters in the input field
    const inputElement = getByPlaceholderText('Enter text...');
    fireEvent.change(inputElement, { target: { value: 'a'.repeat(161) } });

    // Ensure the button is rendered
    const button = await screen.findByTestId('summarise-button');
    expect(button).to.exist;

    // Simulate button click
    await userEvent.click(button);
    console.log("BUTTON CLICKED")

    console.log("STARTING EXPECT CALL");

    expect(handleAIClick).toHaveBeenCalled();

    console.log("FINISHED EXPECT CALL");
  });
});










 // -------------- Ignore these below :D --------------



// Test input validation - ensure that the text input is not empty before making the API call
    // describe('InputChatBar Component', () => {
    //   it('shows error if input is empty before making API call', async () => {
    //     const { getByText, getByPlaceholderText } = await render(<InputChatBar />);
        
    //     fireEvent.change(getByPlaceholderText('Enter text...'), { target: { value: '' } });
    //     fireEvent.click(getByText('Summarise'));
        
    //     expect(getByText('Input cannot be empty')).toBeInTheDocument();
    //   });
    // });
      


    // // Test that loading is shown when waiting for API response
    // test('shows loading state while waiting for API response', async () => {
    //     const { getByText, getByPlaceholderText, findByText } = render(<InputChatBar />);
        
    //     fireEvent.change(getByPlaceholderText('Enter text...'), { target: { value: 'Long input text' } });
    //     fireEvent.click(getByText('Summarise'));
      
    //     expect(getByText('Loading...')).toBeInTheDocument();
      
    //     await findByText('Shortened summary');  // Assuming the API call resolves
    //   });
      