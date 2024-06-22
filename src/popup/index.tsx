import React from 'react';
import { createRoot } from 'react-dom/client';
import './popup.module.css';

const App = () => {
  return <div>안녕하세요!</div>;
};

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<App />);
