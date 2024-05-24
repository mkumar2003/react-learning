import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'; // Importing the Header component
import './header.css'; // Optional: if you have global styles

// Find the root element
const rootElement = document.getElementById('root');

if (rootElement) {
  // Create a root
  const root = ReactDOM.createRoot(rootElement);

  // Initial render
  root.render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>
  );
} else {
  console.error("The element with id 'root' was not found.");
}
