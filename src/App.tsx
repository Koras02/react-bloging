import React from 'react';

interface AppProps {
  title?: string; // title의 선택적 prop
  subscription?: string;
}

const App: React.FC<AppProps> = ({ title, subscription }) => {
  return (
    <div>
      <h1>{title || 'Hello, World!'}</h1>
      <p>{subscription || 'Toast'}</p>
    </div>
  );
};

export default App;
