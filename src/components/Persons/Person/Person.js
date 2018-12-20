import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass.js'
import withClass from '../../../hoc/withClass.js'
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] - constructor()', props);
        // this.state
        // not recommended using constructor
    }

    componentWillMount() {
        console.log('[Person.js] - componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] - componentDidMount()');
        if ( this.props.position === 0 )
            this.inputElement.focus();
    }

    render() {
        console.log('[Person.js] - render()');
        return (
            <Aux>
                <p onClick={ this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={ input => { this.inputElement = input } }
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )

        // return [
        //     <p key="1" onClick={ this.props.clicked}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="2" >{this.props.children}</p>,
        //     <input key="3"  type="text" onChange={this.props.changed} value={this.props.name} />,
        // ];
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);
