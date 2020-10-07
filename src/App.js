import React, { Component } from "react";
import Todo from "./components/Todo";
import todoData from "./components/TodoData";
import ButtonComplete from "./components/ButtonComplete";
import AddTodo from "./components/AddTodo";
import ActiveButton from "./components/ActiveButton";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

export class App extends Component {
    constructor() {
        super();
        this.state = {
            data: todoData,
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
        // const uid = () => Math.random.toString(34).slice(2);
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

    completeBtn = (id) => {
        this.setState((prevstate) => {
            return {
                data: prevstate.data.map((todo) => {
                    if (id === todo.completed) {
                    }

                    return {
                        todo,
                    };
                }),
            };
        });
    };

    render() {
        const TodoItems = this.state.data.map((todo) => <Todo key={todo.id} todo={todo} handleChange={this.handleChange} delTodo={this.delTodo} completeBtn={this.completeBtn} />);
        return (
            <div className="app">
                <AddTodo addTodo={this.addTodo} />
                <div className="btnComponent">
                    <ButtonComplete completeBtn={this.completeBtn} />
                    <ActiveButton />
                </div>
                {TodoItems}
            </div>
        );
    }
}

export default App;
