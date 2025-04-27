import React from 'react'; // Import React to resolve the ReferenceError
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary> {/* Wrap App with ErrorBoundary */}
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
