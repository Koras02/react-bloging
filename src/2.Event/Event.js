import React, { useState } from 'react';

export const FieldEvent = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setinputValue] = useState('');

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleInput = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <div>
      <h1>클릭 수: {count}</h1>
      <button onClick={handleClick}>클릭</button>
      <br />
      <br />
      <hr />
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        placeholder="입력할 값을 넣어주세요"
      />
      <p>입력 값: {inputValue}</p>
    </div>
  );
};
