import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {
  const [personsState, setPersonsState] = useState({
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

  const [showPersonsState, setShowPersonsState] = useState({
    isVisible: false
  })

  const deletePersonHandler = (index) => {
    const persons = [...personsState.persons];
    persons.splice(index, 1);
    setPersonsState({ persons });
  }

  const nameChangedHandler = (evt) => {
    let persons = [
      {
        name: evt.target.value,
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
    setPersonsState({ persons });
  }

  const style = {
    backgroundColor: 'White',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  const togglePersonsHandler = () => {
    let isVisible = showPersonsState.isVisible;
    setShowPersonsState({ isVisible: !isVisible });
  }

  let persons = null

  if (showPersonsState.isVisible) {
    persons = (
      <div>
        {
          personsState.persons.map((person, index) => {
            return <Person
              name={person.name}
              click={deletePersonHandler.bind(this, index)}
              age={person.age}>My hobby is Racing.</Person>
          })}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hi, I'm React Demo App.</h1>
      <button
        style={style}
        onClick={togglePersonsHandler}>Toggle Persons</button>
      {
        showPersonsState.isVisible ? persons : null
      }
    </div>
  );
}

export default App;
