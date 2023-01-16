import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
};

export default TodosList;
