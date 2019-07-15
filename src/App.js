import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Learn React hooks',
      isCompleted: false
    },
    {
      content: 'Dinner with wife',
      isCompleted: false
    },
    {
      content: 'Pick up some milk',
      isCompleted: false
    }
  ]);

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter') {
      createTodoAtIndex(e, index);
    }
    if (e.key === 'Backspace' && todos[index].content === '') {
      e.preventDefault();
      return removeTodoAtIndex(index);
    }
  };

  const createTodoAtIndex = (e, index) => {
    const newTodos = [...todos];
    newTodos.splice(index + 1, 0, {
      content: '',
      isCompleted: false
    });
    setTodos(newTodos);
    setTimeout(() => {
      document.forms[0].elements[index + 1].focus();
    }, 0);
  };

  const updateTodoAtIndex = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].content = e.target.value;
    setTodos(newTodos);
  };

  const removeTodoAtIndex = index => {
    if (index === 0 && todos.length === 1) return;
    setTodos(todos => todos.slice(0, index).concat(todos.slice(index + 1, todos.length)));
    setTimeout(() => {
      document.forms[0].elements[index - 1].focus();
    }, 0);
  }

  return (
    <div className="app">
      <header className="app-header">React Todos</header>
      <form className="todo-list">
        <ul>
          {todos.map((todo, index) => (
            <div className="todo">
              <div className="checkbox" />
              <input
                type="text"
                value={todo.content}
                onChange={e => updateTodoAtIndex(e, index)}
                onKeyDown={e => handleKeyDown(e, index)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
