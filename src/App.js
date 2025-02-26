import { ThemeProvider } from './6.State/ThemeContext';
import ThemedComponent from './6.State/ThemeComponent';
import './App.css';
import React from 'react';

const ReactApp = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
};

export default ReactApp;
