import React, { useState } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {
        id: 'dsfsf',
        name: 'Ravi',
        age: 24
      },
      {
        id: '9dii4',
        name: 'Ajay',
        age: 27
      },
      {
        id: 'tesers',
        name: 'Keshav',
        age: 26
      }
    ]
  })

  const [showPersonsState, setShowPersonsState] = useState({
    isVisible: true
  })

  const deletePersonHandler = (index) => {
    const persons = [...personsState.persons];
    persons.splice(index, 1);
    setPersonsState({ persons });
  }

  const nameChangedHandler = (evt, id) => {
    const personIndex = personsState.persons.findIndex((p) => {
      return p.id === id
    })
    const person = {...personsState.persons[personIndex]}
    person.name = evt.target.value;
    
    const persons = [...personsState.persons]
    persons[personIndex] = person
    setPersonsState({ persons });
  }

  const togglePersonsHandler = () => {
    let isVisible = showPersonsState.isVisible;
    setShowPersonsState({ isVisible: !isVisible });
  }

  let persons = null;
  let btnClass = '';
  if (showPersonsState.isVisible) {
    persons = (
      <div>
        {
          personsState.persons.map((person, index) => {
            return <Person
                      name={person.name}
                      click={deletePersonHandler.bind(this, index)}
                      age={person.age}
                      changed={(event) => nameChangedHandler(event, person.id)}
                      key={person.id}>My hobby is Racing.</Person>
          })}
      </div>
    )
    btnClass = styles.Red;
  }
  
  const classes = [];
  if(personsState.persons.length <= 2) {
    classes.push(styles.red);
  }
  if(personsState.persons.length <= 1) {
    classes.push(styles.bold);
  }
  
  return (
    <div className={styles.App}>
      <h1>Hi, I'm React Demo App.</h1>
      <p className={classes.join(' ')}>This is really working !</p>
      <button
        className={btnClass}
        onClick={togglePersonsHandler}>Toggle Persons</button>
      {
        showPersonsState.isVisible ? persons : null
      }
    </div>
  );
}

export default App;
