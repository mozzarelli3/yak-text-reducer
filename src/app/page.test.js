



// Tests:
    // Test typing into the input field
    import { render, fireEvent } from '@testing-library/react';
    import InputChatBar from './InputChatBar';
    
    test('allows user to type in text input', () => {
      const { getByPlaceholderText } = render(<InputChatBar />);
      const inputElement = getByPlaceholderText('Enter text...');
      fireEvent.change(inputElement, { target: { value: 'Sample text' } });
      expect(inputElement.value).toBe('Sample text');
    });



    // // Test button click functionality - ensure the summarisation button works and triggers the API call
    // import { render, fireEvent } from '@testing-library/react';
    // import InputChatBar from './InputChatBar';
    
    // test('calls summarization function on button click', () => {
    //   const mockSummarise = jest.fn();
    //   const { getByText } = render(<InputChatBar summariseText={mockSummarise} />);
    //   fireEvent.click(getByText('Summarise'));  // Assuming button has text 'Summarise'
    //   expect(mockSummarise).toHaveBeenCalled();
    // });


    // // Test input validation - ensure that the text input is not empty before making the API call
    // test('shows error if input is empty', () => {
    //     const { getByText, getByPlaceholderText } = render(<InputChatBar />);
        
    //     fireEvent.change(getByPlaceholderText('Enter text...'), { target: { value: '' } });
    //     fireEvent.click(getByText('Summarise'));
      
    //     expect(getByText('Input cannot be empty')).toBeInTheDocument();
    //   });
      


    // // Test that loading is shown when waiting for API response
    // test('shows loading state while waiting for API response', async () => {
    //     const { getByText, getByPlaceholderText, findByText } = render(<InputChatBar />);
        
    //     fireEvent.change(getByPlaceholderText('Enter text...'), { target: { value: 'Long input text' } });
    //     fireEvent.click(getByText('Summarise'));
      
    //     expect(getByText('Loading...')).toBeInTheDocument();
      
    //     await findByText('Shortened summary');  // Assuming the API call resolves
    //   });
      

