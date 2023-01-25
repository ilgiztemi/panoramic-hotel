import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from "styled-components";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Div>
      <Routes>
        <Route exact="true" path="/" element={ <HomePage /> } />
      </Routes>
    </Div>
  );
};
const Div = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`
export default App;
