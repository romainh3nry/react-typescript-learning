import React from 'react';
import '../css/App.css';
import { Greet } from "./Greet";
import { Person } from './Person';
import { PersonList } from './PersonList';

const App = () => {

  const personName = {
    first: 'Romain',
    last: 'HENRY'
  }

  const nameList = [
      {
        first: 'Bruce',
        last: 'WAYNE'
      },
      {
        first: 'Clark',
        last: 'KENT'
      },
      {
        first: 'Diana',
        last: 'ROSS'
      }
  ]

  return (
    <div className="App">
      <Greet name="Romain" messageCount={15} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;