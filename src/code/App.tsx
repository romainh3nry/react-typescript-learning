import React from 'react';
import '../css/App.css';
import { Greet } from './Greet';
import { Heading } from './Heading';
import { Oscar } from './Oscar';
import { Status } from './Status';

const App = () => {

  return (
    <div className="App">
      <Status status='loading' />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Tom Hanks</Heading>
      </Oscar>
      <Greet name="Henry Romain" isLoggedIn={true} />
    </div>
  );
}

export default App;