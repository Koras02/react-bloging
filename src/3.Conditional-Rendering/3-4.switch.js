import React from 'react';

const Switch = () => {
  const status = 'success';

  switch (status) {
    case 'loading':
      return <h1>loading...</h1>;
    case 'success':
      return <h1>성공!</h1>;
    case 'error':
      return <h1>오류 발생!</h1>;
    default:
      return null;
  }
};
export default Switch;
