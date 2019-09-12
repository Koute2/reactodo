import React, { Component } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 1,
      todos: [],
    }
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(text) {
    const nextTodos = [
      ...this.state.todos,
      {
        id: this.state.nextId,
        body: text
      },
    ];

    this.setState({
      nextId: this.state.nextId + 1,
      todos: nextTodos,
    });
  }

  removeTodo(target) {
    const idx = this.state.todos.findIndex(({ id }) => id === target);
    const nextTodos = [
      ...this.state.todos
    ];
    nextTodos.splice(idx, 1);

    this.setState({
      todos: nextTodos,
    })
  }

  render() {
    return (
      <div id="app">
        <Form handleAdd={this.addTodo} />
        {
          this.state.todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                handleRemove={this.removeTodo}
              />
            );
          })
        }
      </div>
    );
  }
}
