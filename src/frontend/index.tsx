// src/frontend/index.tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import UserAuth from './components/UserAuth'  // must match the default export

function App() {
  return (
    <div style={{ padding: 20 }}>
      <UserAuth />
    </div>
  )
}

const container = document.getElementById('root')
if (container) createRoot(container).render(<App />)
