import { ContentCopy, Done } from '@mui/icons-material';
import { Button, Grid } from '@mui/material';
import React, { useRef, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlockWithCopy = ({ code }) => {
  const [copied, setCopied] = useState(false); // State to manage the button icon
  const codeRef = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true); // Change the button icon to Done
        setTimeout(() => {
          setCopied(false); // Revert back to ContentCopy after 2 seconds
        }, 1000);
      })
      .catch(() => {
        console.log('Failed to copy code');
      });
  };

  return (
    <Grid style={{ position: 'relative' }}>
      <SyntaxHighlighter language="jsx" style={oneLight} ref={codeRef}>
        {code}
      </SyntaxHighlighter>
      <Button
        onClick={handleCopy}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '5px',
          background: '#dedede',
          color: 'gray',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        {copied ? <Done /> : <ContentCopy />}
      </Button>
    </Grid>
  );
};

export default CodeBlockWithCopy;
