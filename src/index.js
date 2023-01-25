import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CombinedContextProviders from "./context/CombinedContextProviders";
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from "./GlobalStyle";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <CombinedContextProviders>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </CombinedContextProviders>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
