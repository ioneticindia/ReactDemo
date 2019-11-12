import React from 'react';
import Person from '../Person/Person';

const personList = (props) => (
    props.persons.map((person, index) => 
        <Person
        name={person.name}
        click={props.clicked.bind(this, index)}
        age={person.age}
        changed={(event) => props.changed(event, person.id)}
        key={person.id}>My hobby is Racing.</Person>
    )
)
export default personList;