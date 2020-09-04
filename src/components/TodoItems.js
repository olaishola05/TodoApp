import React from "react";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoItems() {
    return (
        <div style={itemStyle}>
            <h3>Learn React and Django framework</h3>
            <button>X</button>
            {/* <FontAwesomeIcon icon={faHome} /> */}
        </div>
    );
}

const itemStyle = {
    background: "#FDDBD0",
    color: "black",
    textAlign: "justify",
    width: "95%",
    margin: "0 auto",
    border: "1px solid",
    borderRadius: "5px",
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
};
export default TodoItems;
