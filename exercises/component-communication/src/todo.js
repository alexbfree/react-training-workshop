var React = require('react');
var TodoActions = require('./todo-actions');

var Todo = React.createClass({
  deleteTodo: function(e) {
    TodoActions.deleteTodo(this.props.todo);
  },
  render: function() {
    return (
      <div>
        <p>TODO: { this.props.todo }<button onClick={this.deleteTodo}>Delete</button></p>
      </div>
    )
  }
});

module.exports = Todo
