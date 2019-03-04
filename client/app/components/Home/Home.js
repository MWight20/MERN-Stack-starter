import React, { Component } from 'react';

class Home extends Component {

    constructor (props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return(
            <div>
                <h1> Home </h1>
                <p> Welcome to the 'Home' page!</p>
            </div>
        );
    }
}

export default Home;