import PropTypes from 'prop-types';
import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoTitle } = this.props;
    const { title } = this.state;
    if (title.trim()) {
      addTodoTitle(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addTodoTitle: PropTypes.func.isRequired,
};
export default InputTodo;
