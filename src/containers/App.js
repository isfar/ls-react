import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';
import WithClass from '../hoc/WithClass';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] - constructor()', props);
        this.componentDidMount();
        // not recommended using constructor
    }

    componentWillMount() {
        console.log('[App.js] - componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] - componentDidMount()');
    }

    state = {
        persons: [
            { id: 'asfa1', name: 'Max', age: "28" },
            { id: 'vasdf1', name: 'Manu', age: 29 },
            { id: 'asdf11', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }


    nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        } );

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( { persons: persons } );
    }

    deletePersonHandler = ( personIndex ) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice( personIndex, 1 );
        this.setState( { persons: persons } );
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState( { showPersons: !doesShow } );
    }

    render () {
        console.log('[App.js] - render()');
        let persons = null;


        if ( this.state.showPersons ) {
            persons = (
                <div>
                    <Persons persons={ this.state.persons }
                        clicked={ this.deletePersonHandler }
                        changed={ this.nameChangedHandler} />
                </div>
            );
        }


        return (
            <WithClass classes={ classes.App }>
                <Cockpit
                    showPersons={ this.state.showPersons }
                    togglePersonsHandler={ this.togglePersonsHandler }
                    persons={ this.state.persons }/>
                { persons }
            </WithClass>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
