import React from 'react';
import '../css/App.css';
import { Button } from './Button';
import { Greet } from './Greet';
import { Heading } from './Heading';
import { Input } from './Input';
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
      <Input value='' />
      <Button handleClick={e => console.log('clicked', e)} />
    </div>
  );
}

export default App;