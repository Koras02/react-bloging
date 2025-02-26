import React, { createContext, useContext, useState } from 'react';

// Context 생성
const ThemeContext = createContext();

// Provider 컴포넌트
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Context 사용을 위한 훅
export const useTheme = () => {
  return useContext(ThemeContext);
};
