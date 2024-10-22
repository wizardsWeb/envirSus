// src/hooks/useThemeMode.js
import { useEffect, useState } from 'react';

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return { themeMode, darkTheme, lightTheme };
};

export default useThemeMode;
