import React, { Component } from 'react';

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
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

export default TodosList;
