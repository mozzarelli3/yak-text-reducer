import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import InputChatBar from './InputChatBar';
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


// Test button click functionality - ensure the summarisation button works and triggers the API call
  describe('Summarise button', () => {
    it('handles AI summary when clicked', async () => {
      const handleAIClick = vi.fn(); // Vitest's vi.fn() for mocking
      const setShowAISummary = vi.fn(); // Mock function for setShowAISummary
      const setIsLoading = vi.fn(); // Mock function for setIsLoading
      const setSummary = vi.fn(); // Mock function for setSummary

      const { getByTestId, getByPlaceholderText } = await render(
      <InputChatBar 
        handleAIClick={handleAIClick} 
        setShowAISummary={setShowAISummary} 
        setIsLoading={setIsLoading} 
        setSummary={setSummary}
      />
    );

      // Simulate entering 160 characters in the input field
      const input = getByPlaceholderText('Enter text...');
      fireEvent.change(input, { target: { value: 'a'.repeat(160) } });

      // Ensure the button is rendered
      const button = getByTestId('summarise-button');
      expect(button).to.exist;

      // Simulate button click
      fireEvent.click(button);
      
      expect(handleAIClick).toHaveBeenCalled();
    });
  });


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
      