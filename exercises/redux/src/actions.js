var actions = {
  addTodo: function(todo) {
    return {
      type: 'ADD_TODO',
      todo: todo
    }
  },
  deleteTodo: function(todo) {
    return {
      type: 'DELETE_TODO',
      todo: todo
    }
  }  
};

module.exports = actions;
