import React from 'react';
import '../css/App.css';
import { Greet } from "./Greet";

const App = () => {
  return (
    <div className="App">
      <h1>Hello there</h1>
      <Greet name="Romain" />
    </div>
  );
}

export default App;