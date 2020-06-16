import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';


const App = () => {

  const [todos, setTodos] = useState([]);

  const [count, setCount] = useState(0);

  const addTodo = task => {
    setCount(count + 1);
    const newTodos = [...todos, { id: count, task, isCompleted: false }];
    setTodos(newTodos);
  }

  const deleteTodo = id => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const completeTodo = id => {
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex((todo) => todo.id === id);
    newTodos[indexTodo].isCompleted = !newTodos[indexTodo].isCompleted;
    setTodos(newTodos);
  }

  return (
    <div className="container">
      <header className="todo-header">
        <h1 className="title">Todo App</h1>
        <TodoForm addTodo={addTodo} />
      </header>
      <div className="todo-items-container">
        {todos.map((todo) =>
          <TodoItem key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
