import React from 'react';

function List() {
  const list = ['딸기', '사과', '바나나'];
  return (
    <ul>
      {list.map((list) => (
        <li key={list}>{list}</li>
      ))}
    </ul>
  );
}
export default List;
