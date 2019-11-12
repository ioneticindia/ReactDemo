import React from 'react';
import styles from './Person.module.css';

const person = (props) => {
    return (
        <div className={styles.Person} style={styles['@media (min-width: 500px)']}>
            <p onClick={props.click}>I am a {props.name}. I am {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    ); 
};

export default person;