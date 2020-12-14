import React, { Component } from "react";

export class ButtonComplete extends Component {
    render() {
        return (
            <div>
                <button
                    className="completed"
                    onClick={this.props.completeBtn}
                >
                    Completed
                </button>
            </div>
        );
    }
}

export default ButtonComplete;
