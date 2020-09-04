import React from "react";

function CheckTodo() {
    return (
        <div style={statusContainer}>
            <button style={todoStatus}>Completed</button>
            <button style={todoStatus}>Active</button>
        </div>
    );
}

const statusContainer = {
    margin: "0 auto",
    // border: "1px solid red",
    width: "50%",
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
};

const todoStatus = {
    width: "70px",
    fontSize: "0.9rem",
    background: "black",
    color: "white",
    padding: "5px",
};

export default CheckTodo;
