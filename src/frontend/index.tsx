// src/frontend/index.tsx
import React from 'react';
import { createRoot }    from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App               from './App';

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
