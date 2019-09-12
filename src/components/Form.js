import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleAdd }) => {
  const [body, setBody] = useState("");

  const handleChnage = e => {
    setBody(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (body.length === 0) return;
    handleAdd(body);
    setBody("");
  }

  return (
    <form action="/" method="post">
      <input type="text" onChange={handleChnage} value={body} />
      <button type="submit" onClick={handleSubmit}>+</button>
    </form>
  );
}

Form.propTypes = {
  handleAdd: PropTypes.func,
}

export default Form;
