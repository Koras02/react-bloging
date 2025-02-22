import React from 'react';

const Trinomial = () => {
  const isLoggedIn = true; // or false
  return <h1>{isLoggedIn ? 'Hello' : 'Please Login!!'}</h1>;
};

export default Trinomial;
