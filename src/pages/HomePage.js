import React from 'react';
import { useHomepage } from "../context/homepage/homepage.provider";

const HomePage = () => {
  const { loggedIn } = useHomepage();
  console.log( loggedIn );
  return (
    <div>HomePage</div>
  );
};

export default HomePage;