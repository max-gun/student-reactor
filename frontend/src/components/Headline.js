import React, { Component } from "react";

class Headline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "Alexey"
        }
    }

    switchUser() {
        if (this.state.username === "Alexey") {
            this.setState({
                username : "Max"
            })
        }
        else if (this.state.username === "Max") {
            this.setState({
                username : "Alexey"
            })
        }
    }

    render() {
        return (
            <div>
                <h1>
                    Welcome to {this.props.title} {this.state.username}
                </h1>
                <button onClick={() => this.switchUser()} type="submit" className="btn btn-primary">Switch users</button>
            </div>
        )
    }
}

export default Headline;