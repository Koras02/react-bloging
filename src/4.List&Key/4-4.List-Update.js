import React, { useState } from 'react';

export default function ListUpdate() {
  const [fruits, setFruits] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addFruit = () => {
    const newFruit = {
      id: Date.now(), // 각 항목에 고유한 ID를 부여
      name: inputValue,
    };
    setFruits([...fruits, newFruit]);
    setInputValue('');
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a Fruit"
      />
      <button onClick={addFruit}>Add Fruit</button>
      <ul>
        {fruits.map((fruits) => (
          <li key={fruits.id}>{fruits.name}</li>
        ))}
      </ul>
    </div>
  );
}
