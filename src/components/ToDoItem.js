import React from "react";


function ToDoItem(props) {
    return (
    <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => console.log("checkbox changed")} />
            <p>{props.item.description}</p>
    </div>
    )
}

export default ToDoItem