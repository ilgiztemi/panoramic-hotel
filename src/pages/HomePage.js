import React from 'react';
import styled from "styled-components";
import { useHomepage } from "../context/homepage/homepage.provider";

const HomePage = () => {
  const { loggedIn } = useHomepage();
  console.log( loggedIn );
  return (
    <MainDiv>
      <Section id="1">
        <div>
          <h1>First One</h1>
        </div>
      </Section>
      <Section id="2">
        <div>
          <h1>Second One</h1>
        </div>
      </Section>
      <Section id="3">
        <div>
          <h1>Third One</h1>
        </div>
      </Section>
      <Section id="4">
        <div>
          <h1>Fourth One</h1>
        </div>
      </Section>
      <Section id="5">
        <div>
          <h1>Fifth One</h1>
        </div>
      </Section>
      <Section id="6">
        <div>
          <h1>Sixth One</h1>
        </div>
      </Section>
    </MainDiv>
  );
};
const MainDiv = styled.div`
  height: 100vh;
  width: 600vw;
  display: flex;
  flex-direction: row;
  section:nth-child(even) {
    background-color: aquamarine;
  }
`;
const Section = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  div {
    h1 {
    font-size: 90px;
  }
  }
`;
export default HomePage;