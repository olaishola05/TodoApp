import React, { Component } from "react";
import todoData from "./TodoData";

export class ButtonComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: todoData,
        };
    }

    // handleComplete = () => {
    //     this.props.completeBtn(this.state.id);
    //     this.setState({ id: this.props.todo.id });
    // };

    completeBtn = (id) => {
        console.log("I'm Alive");
        this.setState((prevState) => {
            return {
                data: prevState.data.filter((todo) => id === todo.completed),
            };
        });
    };

    render() {
        return (
            <div className="btnComponent">
                <button className="completed" onClick={this.completeBtn}>
                    Completed
                </button>
                <button className="active">Active</button>
            </div>
        );
    }
}

export default ButtonComponent;
