var React = require('react');
var connect = require('react-redux').connect;
var deleteTodo = require('./actions').deleteTodo;

var Todo = React.createClass({
  deleteTodo: function() {
    this.props.dispatch(deleteTodo(this.props.todo));
  },
  render: function() {
    return (
      <div>
        <p>{ this.props.todo }</p> <button onClick={this.deleteTodo}>Delete</button>
      </div>
    )
  }
});

var ConnectedTodo = connect()(Todo);

module.exports = ConnectedTodo;
