import React, { Component } from "react";
import Todo from "./components/Todo";
import todoData from "./components/TodoData";
import ButtonCommponent from "./components/ButtonComponent";
import AddTodo from "./components/AddTodo";
import "./App.css";
// import { v4 as uuidv4 } from "uuid";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            data: todoData,
        };
    }

    handleChange = (id) => {
        this.setState((prevState) => {
            const updateData = prevState.data.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            });

            return {
                data: updateData,
            };
        });
    };

    //  Delete Todo from list
    delTodo = (id) => {
        console.log(id);
        this.setState((prevState) => {
            const updateState = prevState.data.filter((todo) => todo.id !== id);
            return {
                data: updateState,
            };
        });
    };

    addTodo = (text) => {
        const newTodo = {
            id: "",
            text: text,
            completed: false,
        };
        this.setState((prevState) => {
            return {
                data: [...prevState.data, newTodo],
            };
        });
    };

    render() {
        const TodoItems = this.state.data.map((todo) => <Todo key={todo.id} todo={todo} handleChange={this.handleChange} delTodo={this.delTodo} />);
        return (
            <div className="app">
                <AddTodo addTodo={this.addTodo} />
                <ButtonCommponent completeBtn={this.props.completeBtn} />
                {TodoItems}
            </div>
        );
    }
}

export default App;
