import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './styles.css';
import { CerebroApp } from './CerebroApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CerebroApp />
    </BrowserRouter>
  </React.StrictMode>,
)
