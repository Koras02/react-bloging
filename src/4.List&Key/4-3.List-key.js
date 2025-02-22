import React from 'react';

function ListKey() {
  const List = [
    { id: 1, name: 'Django' },
    { id: 2, name: 'Props' },
    { id: 3, name: 'C++' },
  ];
  return (
    <ul>
      {List.map((List) => (
        <li key={List.id}>{List.name}</li>
      ))}
    </ul>
  );
}

export default ListKey;
