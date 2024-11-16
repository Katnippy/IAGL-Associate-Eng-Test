function parseTodo(todo) {
  try {
    JSON.parse(todo);
  } catch (e) {
    return false;
  }
  
  return true;
}

const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    postTodo: async (todo) => {
      // If the todo is valid JSON and it has only the `task` property, POST 
      // it, else throw.
      // TODO: We could also validate the todo for character length, etc.
      if (todo.length == 1 && parseTodo(todo) && todo.task) {
        return await repository.postTodo(todo)
      } else {
        throw new Error('Invalid todo.');
      }
    }
  };
};

module.exports = todoService;
