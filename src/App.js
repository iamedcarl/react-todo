import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Learn React hooks',
      isCompleted: false,
    },
    {
      content: 'Dinner with wife',
      isCompleted: false,
    },
    {
      content: 'Pick up some milk',
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <header className="app-header">
        React Todos
      </header>
      <form className="todo-list">
        <ul>
          {todos.map((todo, index) => (
            <div className="todo">
              <div className="checkbox" />
              <input type="text" value={todo.content} />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
