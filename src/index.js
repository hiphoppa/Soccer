import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GlobalState from './context/GlobalState';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <GlobalState >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById('root')
);