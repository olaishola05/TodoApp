import React, { Component } from "react";

export class Todo extends Component {
    render() {
        const { id } = this.props.todo;
        return (
            <div className="todo-items">
                <div>
                    <input type="checkbox" checked={this.props.todo.completed} onChange={this.props.handleChange.bind(this, id)} />
                    <p>{this.props.todo.text}</p>
                </div>
                <button onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
        );
    }
}

export default Todo;
