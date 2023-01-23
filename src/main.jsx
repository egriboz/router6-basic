import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import { Curtains } from "react-curtains";

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Curtains pixelRatio={Math.min(1.5, window.devicePixelRatio)}>
      <App />
    </Curtains>
  </BrowserRouter>
);
