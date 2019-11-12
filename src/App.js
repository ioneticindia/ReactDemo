import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {
        name: 'Ravi',
        age: 24
      },
      {
        name: 'Ajay',
        age: 27
      },
      {
        name: 'Keshav',
        age: 26
      }
    ]
  })
  
  const switchNameHandler = () => {
    let persons = [
      {
        name: 'Ankit',
        age: 28
      },
      {
        name: 'Ravi',
        age: 24
      },
      {
        name: 'Ajay',
        age: 27
      },
      {
        name: 'Keshav',
        age: 26
      }
    ]
    setPersonsState({persons});
  }
  
  return (
    <div className="App">
      <h1>Hi I am react app.</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobby is Racing.</Person>
    </div>
  );
}

export default App;
