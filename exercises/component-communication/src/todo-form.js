var React = require('react');
var TodoActions = require('./todo-actions');

var TodoForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    TodoActions.addTodo(this.refs.todoInput.value);
    this.refs.todoInput.value="";
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="todoInput" />
        <button type="submit">Create</button>
      </form>
    );
  }
});

module.exports = TodoForm;
