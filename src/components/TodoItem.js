import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      todo,
      onHandleChange,
      onHandleDelete,
    } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onHandleChange(todo.id)}
        />
        {todo.title}
        <button type="button" onClick={() => onHandleDelete(todo.id)}>Delete</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
  }).isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
};
export default TodoItem;
