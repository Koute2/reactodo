import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, handleRemove }) => {
  const handleSubmit = e => {
    e.preventDefault();
    handleRemove(todo.id);
  }

  return (
    <p>
      <button onClick={handleSubmit}>-</button>
      { todo.body }
    </p>
  );
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
  }),
  handleRemove: PropTypes.func,
}

export default Todo;
