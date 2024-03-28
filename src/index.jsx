import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/app.css';

const container = document.getElementById('app');
const root = createRoot(container); // Create a root.
root.render(<App />);
