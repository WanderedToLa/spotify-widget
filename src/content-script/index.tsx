import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';

const app = document.createElement('div');
app.id = 'react-chrome-app';
document.body.appendChild(app);
const root = createRoot(app);
root.render(<App />);
