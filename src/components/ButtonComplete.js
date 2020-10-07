import React, { Component } from "react";

export class ButtonComplete extends Component {
    render() {
        // const { id } = this.props.todo;
        console.log(this.props.completed);
        return (
            <div>
                <button className="completed" onClick={this.props.completeBtn}>
                    Completed
                </button>
            </div>
        );
    }
}

export default ButtonComplete;
