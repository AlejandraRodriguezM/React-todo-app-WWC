import React, { useState } from 'react';


const TodoItem = ({ todo, deleteTodo, completeTodo }) => {

    const handleDelete = () => {
        deleteTodo(todo.id);
    }

    const handleCompleted = () => {
        completeTodo(todo.id);
    }

    return (
        <div className="todo-item">
            <div className={todo.isCompleted ? "item-decoration" : ""}>
                {todo.task}
            </div>
            <button onClick={handleCompleted}>
                {todo.isCompleted ? "Not completed" : "Completed"}
            </button>
            <button onClick={handleDelete}>
                Delete
        </button>
        </div>
    );
}

export default TodoItem;