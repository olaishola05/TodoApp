import React, { Component } from "react";

export class ActiveButton extends Component {
    render() {
        return (
            <div>
                <button
                    className="active"
                    onClick={this.props.activeTodos}
                >
                    Active
                </button>
            </div>
        );
    }
}

export default ActiveButton;
