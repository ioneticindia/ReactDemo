import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    const classes = [];
    if(props.persons.length <= 2) {
        classes.push(styles.red);
    }
    if(props.persons.length <= 1) {
        classes.push(styles.bold);
    }
    
    let btnClass = '';
    if(props.showPersons) {
        btnClass = styles.Red;
    }
    
    return (
        <div className={styles.Cockpit}>
            <h1>Hi, I'm React Demo App.</h1>
            <p className={classes.join(' ')}>This is really working !</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
)}

export default cockpit;