import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        age: '',
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, age } = this.state;
        console.log(firstName, lastName, age);
    }

    render() {
        return (
            <form>
                <input name="firstName" value={this.state.firstName} onChange={this.handleInputChange} />
                <input name="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                <input name="age" value={this.state.age} onChange={this.handleInputChange} />
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}