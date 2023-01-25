import React from 'react';
import styled from "styled-components";
// import { useHomepage } from "../context/homepage/homepage.provider";

const HomePage = () => {
  // const { loggedIn } = useHomepage();
  const scrollContainer = document.querySelector( "main" );

  scrollContainer?.addEventListener( "wheel", findScrollDirectionOtherBrowsers );
  function findScrollDirectionOtherBrowsers( event ) {
    scrollContainer.scrollBy( {
      left: event.deltaY,
      top: 0,
      behavior: "smooth",
    } );
    console.log( event.clientX );
  }
  return (
    <Main>
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
    </Main>
  );
};
const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overscroll-behavior: contain;
  section:nth-child(even) {
    background-color: aquamarine;
  }
`;
const Section = styled.section`
  position: relative;
  height: 100vh;
  width: 102vw;
  scroll-snap-align: start;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 101vw;
    h1 {
    font-size: 90px;
  }
  }
`;
export default HomePage;