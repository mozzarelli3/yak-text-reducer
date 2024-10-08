import { Mention, SendBox, FluentThemeProvider } from '@azure/communication-react';
import React, { useEffect, useRef } from 'react';

const suggestions = [
  { id: '1', displayText: '' },
  { id: '2', displayText: 'Patricia Adams' },
  { id: '3', displayText: '1' },
];

const trigger = '@';

export const MentionsExample = () => {
  const timeoutRef = useRef();
  const delayForSendButton = 300;

  useEffect(() => {
    return () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <FluentThemeProvider>
      <div style={{ width: '31.25rem', marginTop: '15rem' }}>
        <SendBox
          onSendMessage={async (message) => {
            timeoutRef.current = setTimeout(() => {
              alert(`sent message: ${message} `);
            }, delayForSendButton);
          }}
          onTyping={async () => {
            return;
          }}
          mentionLookupOptions={{
            trigger,
            onQueryUpdated: async (query) => {
              const filtered = suggestions.filter((suggestion) => {
                return suggestion.displayText.toLocaleLowerCase().startsWith(query.toLocaleLowerCase());
              });
              return Promise.resolve(filtered);
            }
          }}
        />
      </div>
    </FluentThemeProvider>
  );
};