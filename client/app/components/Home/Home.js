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
            <div className="container">
                <div className="header">
                    <h1> Welcome to the landing page!</h1>
                </div>
                <div className="content">
                    <p> Put content here: </p>
                </div>
            </div>
        );
    }
}

export default Home;