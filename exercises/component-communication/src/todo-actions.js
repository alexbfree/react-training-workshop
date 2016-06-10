var TodoStore = require('./todo-store');

var TodoActions = {
  addTodo: function(todo) {
    TodoStore.addTodo(todo);
  },
  deleteTodo: function(todo) {
    TodoStore.deleteTodo(todo);
  }
};

module.exports = TodoActions;
