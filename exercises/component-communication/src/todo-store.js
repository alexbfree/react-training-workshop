var TodoStore = {
  _state: {
    todos: []
  },

  getState: function() {
    return this._state;
  },

  addTodo: function(todo) {
    if (this._state.todos.indexOf(todo)==-1) {
      this._state.todos.push(todo);
      this.onChange();
    }
    else
    {
      alert("already exists!");
    }
  },

  deleteTodo: function(todoToDelete) {
    this._state = {
      todos: this._state.todos.filter(function(todo) {
        return todoToDelete !== todo;
      })
    };
    this.onChange();
  },

  onChange: function() {}
}

module.exports = TodoStore;
