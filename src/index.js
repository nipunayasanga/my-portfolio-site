import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // or './main.css' if that's your main stylesheet

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
