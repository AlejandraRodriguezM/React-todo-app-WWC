import React, { useState } from 'react';


const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState('');

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                className="todo-input"
                required
                value={value}
                onChange={onChangeHandler}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;