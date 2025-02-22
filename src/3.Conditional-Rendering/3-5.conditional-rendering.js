import React from 'react';

const Conditional = () => {
  const isLoggedIn = true; // or false

  const renderContent = () => {
    if (isLoggedIn) {
      return <h1>WelCome!</h1>;
    }
    return <h1>Please Login!</h1>;
  };
  return <div>{renderContent()}</div>;
};

export default Conditional;
