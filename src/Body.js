import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';

class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: [],
            searchArea: ''
        };
    };

    userSubmit = (event) => {
        event.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchArea}`)
        .then(response => response.json())
        .then(responseJson => this.setState({results: [...responseJson.items]}));
    }

    userInput = (e) => {
        this.setState({searchArea: e.target.value})
    }

    render() {
        return (
            <div className="Body">
                <Search userInput={this.userInput} userSubmit={this.userSubmit} />
                <Results results={this.state.results} />
            </div>
        )
    }
}

export default Body;