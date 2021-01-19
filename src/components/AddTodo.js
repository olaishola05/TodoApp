import React, { Component } from "react";

export class AddTodo extends Component {
    constructor() {
        super();
        this.state = {
            text: "",
        };
    }
    onChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.text) {
            return null;
        } else {
            this.props.addTodo(this.state.text);
        }

        this.setState({ text: "" });
    };

    render() {
        return (
            <div className="todo">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="text"
                        value={this.state.text}
                        placeholder="Add new todo"
                        onChange={this.onChange}
                    />
                    <button>Add Todo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
