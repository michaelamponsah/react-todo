import PropTypes from 'prop-types';
import React, { useState } from 'react';

const InputTodo = (props) => {
  const { addTodoTitle } = props;
  const [inputText, setInputText] = useState({ title: '' });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoTitle(inputText.title);
      setInputText({ title: '' });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="title"
        className="input-text"
        placeholder="Add Todo..."
        value={inputText.title}
        onChange={handleChange}
      />
      <button className="input-submit" type="submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoTitle: PropTypes.func.isRequired,
};
export default InputTodo;
