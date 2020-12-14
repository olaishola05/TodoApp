import React, { Component } from "react";

export default class AllTodos extends Component {
    render() {
        const { AllTodos } = this.props;
        return (
            <div>
                <button onClick={AllTodos}>All</button>
            </div>
        );
    }
}
