import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] - constructor()', props);
        // this.state
        // not recommended using constructor
    }

    componentWillMount() {
        console.log('[Persons.js] - componentWillMount()');
    }

    componentDidMount() {
        console.log('[Persons.js] - componentDidMount()');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] - componentWillReceiveProps()');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] - shouldComponentUpdate()');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] - componentWillUpdate()');
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] - componentDidUpdate()');
    }


    render() {
        console.log('[Persons.js] - render()');
        return this.props.persons.map( ( person, index ) => {
            console.log(person, { ...person });
            return <Person
                { ...person }
                clicked={ () => this.props.clicked( index ) }
                position={ index }
                // name={ person.name }
                // age={ person.age }
                // key={ person.id }
                changed={ event => this.props.changed( event, person.id )} />
        })
    }
}

export default Persons;
