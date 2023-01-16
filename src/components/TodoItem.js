import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

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

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.isCompleted}
          onChange={() => onHandleChange(todo.id)}
        />
        <span
          style={todo.isCompleted ? completedStyle : null}
        >
          {todo.title}
        </span>
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
