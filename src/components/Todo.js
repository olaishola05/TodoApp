import React, { Component } from "react";

export class Todo extends Component {
    render() {
        const { id, completed, text } = this.props.todo;
        return (
            <div className="todo-items">
                <div>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={this.props.handleChange.bind(
                            this,
                            id
                        )}
                    />
                    <p
                        className="todo-para"
                        style={completed ? checkStyle : null}
                    >
                        {text}
                    </p>
                </div>
                <button
                    onClick={this.props.delTodo.bind(this, id)}
                >
                    X
                </button>
            </div>
        );
    }
}

const checkStyle = {
    background: "beige",
    color: "gray",
    fontStyle: "italic",
    textDecoration: "line-through",
};

export default Todo;
