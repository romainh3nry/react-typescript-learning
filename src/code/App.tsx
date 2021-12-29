import React from 'react';
import '../css/App.css';
import { List } from './generics/List';


const App = () => {

  return (
    <div className="App">
      <List 
        items={['Superman', 'Batman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List 
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;