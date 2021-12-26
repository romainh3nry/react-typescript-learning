import React from 'react';
import '../css/App.css';
import { ThemeContextProvider } from './context/ThemeContext';
import { Box } from './context/Box';

const App = () => {

  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;