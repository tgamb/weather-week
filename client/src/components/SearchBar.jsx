import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        userInput: '', 
    }

    handleChange = (event) => {
        this.setState({userInput: event.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text"
                     name="userInput"
                     placeholder="Zip Code"
                     value={this.state.userInput}
                     onChange={this.handleChange}
                     />
                </form>
            </div>
        )
    }
}
