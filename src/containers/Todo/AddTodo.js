import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../modules/todos';

class AddTodo extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { value } = this.refs.input;
    const { dispatch } = this.props;

    if (! value.trim()) {
      return;
    }

    dispatch(addTodo(value));
    this.refs.input.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="input" />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
