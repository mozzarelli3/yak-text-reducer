import TestButton from "./TestButton";
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

// Test button click functionality - ensure the summarisation button works and triggers the API call
describe('Summarise button', () => {
    it('handles AI summary when clicked', async () => {
      // const testLogSpy = vi.spyOn(InputChatBarModule, 'testLog');

      // render(<InputChatBar />);
  
      const testLog = vi.fn()

      const { findByRole, getByPlaceholderText } = await render(
      <TestButton  
        testLog={testLog} 

        // setShowAISummary={setShowAISummary} 
        // setIsLoading={setIsLoading} 
        // setSummary={setSummary}
      />
    );

      // Simulate entering 160 characters in the input field
      // const input = getByPlaceholderText('Enter text...');
      // fireEvent.change(input, { target: { value: 'a'.repeat(161) } });

      // Ensure the button is rendered
      // const button = getByTestId('summarise-button');
      const button = await screen.findByRole('button', {name: 'test'});

      console.log(button.onclick); // Should point to the correct function

      console.log("FOUND BUTTON")

      expect(button).to.exist;

      console.log("BUTTON EXISTS")

      // console.log(button);

      // Simulate button click
      await userEvent.click(button);

      console.log("BUTTON CLICKED")



      console.log("STARTING EXPECT CALL");
      
      expect(testLog).toBeCalled();

      console.log("FINISHED EXPECT CALL");
    });
  });
