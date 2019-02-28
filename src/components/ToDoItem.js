import React from "react";


function ToDoItem(props) {
    return (
    <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}/>
            <p>{props.item.description}</p>
    </div>
    )
}

export default ToDoItem