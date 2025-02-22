import React from 'react';

const Operator = () => {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn && <h1>Hello</h1>}
      {!isLoggedIn && <h1>Login Please</h1>}
    </div>
  );
};

export default Operator;
