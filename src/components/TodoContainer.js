import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
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

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      }),
    }));
  }

  handleDelete = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    this.setState({ todos: updatedTodos });
  }

  addTodoTitle = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({ todos: [...todos, newTodo] });
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoTitle={this.addTodoTitle} />
          <TodosList
            todos={todos}
            onHandleChange={this.handleChange}
            onHandleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
