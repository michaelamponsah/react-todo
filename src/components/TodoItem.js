import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input type="checkbox" checked={todo.isCompleted}/>
        {todo.title}
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
};
export default TodoItem;
