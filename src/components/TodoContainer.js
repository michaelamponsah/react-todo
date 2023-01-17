import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const getInitialTodos = () => {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  };

  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const updatedTodos = JSON.stringify(todos);
    localStorage.setItem('todos', updatedTodos);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => (
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    ));
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodoTitle = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: updatedTitle };
        }
        return todo;
      }),
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoTitle={addTodoTitle} />
        <TodosList
          todos={todos}
          onHandleChange={handleChange}
          onHandleDelete={handleDelete}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};
export default TodoContainer;
