import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0); // 기본 값 0

  const increment = () => {
    setCount(count + 1); // increment 클릭시 + 1 씩 증가
  };

  return (
    <div>
      <h1>현재 카운트: {count}</h1>
      <button onClick={increment}>증가</button>
    </div>
  );
};

export default Counter;
