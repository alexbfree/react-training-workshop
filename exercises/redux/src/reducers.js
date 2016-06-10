var todoReducer = function(state, action) {
  if (!state) state = { todos: [] };

  switch (action.type) {
    case 'ADD_TODO': {
      if (state.todos.indexOf(action.todo)==-1) {
        var newState = {
          todos: state.todos.concat([action.todo])
        }
        return Object.assign({}, state, newState);
      }
      else {
        alert ("Already exists!");
        return state;
      }
    }
    case 'DELETE_TODO': {
      return Object.assign({}, state, {
        todos: state.todos.filter( function(toDoToDelete) {
          return toDoToDelete != action.todo;
        })
      });
    }
    default:
      return state
  }
}

module.exports = todoReducer;
