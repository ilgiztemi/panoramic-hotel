import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact="true" path="/" element={ <HomePage /> } />
      </Routes>
    </div>
  );
};

export default App;
