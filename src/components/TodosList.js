import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { todos, onHandleChange, onHandleDelete } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onHandleChange={onHandleChange}
            onHandleDelete={onHandleDelete}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
  })).isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
};

export default TodosList;
