import React, { Component } from 'react';
import Header from './Header';
import TodosList from './TodosList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          isCompleted: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          isCompleted: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          isCompleted: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodosList todos={todos} />
      </div>
    );
  }
}
export default TodoContainer;
