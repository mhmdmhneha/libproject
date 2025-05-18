// src/frontend/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '@mui/material';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to libproject</h1>
      <Button variant="contained">Get Started</Button>
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
