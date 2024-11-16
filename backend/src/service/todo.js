const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    postTodo: async (todo) => {
      return await repository.postTodo(todo)
    }
  };
};

module.exports = todoService;
