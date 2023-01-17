import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const {
    todo,
    onHandleChange,
    onHandleDelete,
    setUpdate,
  } = props;

  const [isEditing, setIsEditing] = useState({ isEditing: false });

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  const handleEditing = () => {
    setIsEditing({
      isEditing: true,
    });
  };

  const handleUpdatedDone = (e) => {
    if (e.key === 'Enter') {
      setIsEditing({ isEditing: false });
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (isEditing.isEditing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
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
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={todo.title}
        onChange={(e) => setUpdate(e.target.value, todo.id)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
  }).isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
