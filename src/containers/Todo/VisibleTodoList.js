import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleTodo } from '../../modules/todos';
import TodoList from '../../components/Todo/List';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: bindActionCreators(toggleTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
