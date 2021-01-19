import React, { Component } from "react";
import Todo from "./components/Todo";
import ButtonComplete from "./components/ButtonComplete";
import AddTodo from "./components/AddTodo";
import ActiveButton from "./components/ActiveButton";
import AllTodos from "./components/AllTodos";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            currentState: "all",
        };
    }

    handleChange = (id) => {
        this.setState({
            data: this.state.data.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    console.log(todo.completed);
                }
                return todo;
            }),
        });
    };

    // All todos
    AllTodos = (id) => {
        this.setState((prevState) => {
            return {
                currentState: "all",
            };
        });
    };

    //  Delete Todo from list
    delTodo = (id) => {
        console.log(id);
        this.setState((prevState) => {
            const updateState = prevState.data.filter(
                (todo) => todo.id !== id
            );
            return {
                data: updateState,
            };
        });
    };

    addTodo = (text) => {
        const newTodo = {
            id: uuidv4(),
            text: text,
            completed: false,
        };
        this.setState((prevState) => {
            return {
                data: [...prevState.data, newTodo],
            };
        });
    };

    completeBtn = () => {
        this.setState((prevstate) => {
            return {
                currentState: "completed",
            };
        });
    };

    activeTodos = () => {
        this.setState((prevState) => {
            return {
                currentState: "active",
            };
        });
    };

    render() {
        const TodoItems = this.state.data
            .filter((item) => {
                if (this.state.currentState === "active") {
                    return !item.completed;
                } else if (
                    this.state.currentState === "completed"
                ) {
                    return item.completed;
                } else {
                    return true;
                }
            })
            .map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleChange={this.handleChange}
                    delTodo={this.delTodo}
                />
            ));
        return (
            <div className="app">
                <AddTodo addTodo={this.addTodo} />
                <div className="btnComponent">
                    <AllTodos AllTodos={this.AllTodos} />
                    <ButtonComplete
                        completeBtn={this.completeBtn}
                    />
                    <ActiveButton
                        activeTodos={this.activeTodos}
                    />
                </div>
                {TodoItems}
            </div>
        );
    }
}

export default App;
