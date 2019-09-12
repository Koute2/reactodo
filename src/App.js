import React, { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import './App.css';

const App = () => {
  const [nextId, setNextId] = useState(1);
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    const nextTodos = [
      ...todos,
      {
        id: nextId,
        body: text
      },
    ];

    setTodos(nextTodos);
    setNextId(nextId + 1)
  };

  const removeTodo = target => {
    const idx = todos.findIndex(({ id }) => id === target);
    const nextTodos = [
      ...todos
    ];
    nextTodos.splice(idx, 1);

    setTodos(nextTodos);
  }

  return (
    <div id="app">
      <Form handleAdd={addTodo} />
      {
        todos.map(todo => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              handleRemove={removeTodo}
            />
          );
        })
      }
    </div>
  );
}

export default App;
