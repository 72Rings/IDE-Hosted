import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Mount the React app to the HTML root element
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
