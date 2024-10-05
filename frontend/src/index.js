import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './app'; // Ensure this path is correct (should be 'App' with capital 'A')
import './index.css'; // Ensure this file exists in the same directory

// Get the root element from the HTML
const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root using createRoot

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
