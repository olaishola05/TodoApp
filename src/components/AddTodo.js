import React from "react";

function AddTodo() {
    return (
        <div style={addTodo}>
            <input style={inputField} placeholder="add todo" />
            <button style={btnStyle}>+</button>
        </div>
    );
}

const addTodo = {
    display: "flex",
    flexDirection: "row",
    height: "30px",
    width: "50%",
    margin: "0 auto",
    marginTop: "20px",
};

const inputField = {
    width: "100%",
    height: "25px",
    marginBottom: "10px",
};

const btnStyle = {
    width: "70px",
    marginLeft: "10px",
    fontSize: "1.5rem",
    background: "black",
    color: "white",
};
export default AddTodo;
