describe('TODO Service', () => {
  it('should be able to get todos from repository', async () => {
    // Arrange
    const expected = {
      todos: [
        {
          task: "This is a task to be done"
        }
      ]
    };

    const todoRepository = {
      getTodos: async () => Promise.resolve(expected)
    };
    const todoService = require('../../src/service/todo')(todoRepository);

    // Act 
    const actual = await todoService.getTodos();

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should be able to post a todo to the repository', async () => {
    // Arrange
    const todoToPost = { 'task': 'I am a todo.' };
    const expected = {
      todos: [
        {
          task: 'This is a task to be done'
        },
        {
          task: 'I am a todo.'
        }
      ]
    };

    const todoRepository = {
      getTodos: async () => Promise.resolve(expected),
      postTodo: (todo) => Promise.resolve(expected.todos.push(todo))
    };
    const todoService = require('../../src/service/todo')(todoRepository);

    // Act
    await todoRepository.postTodo(todoToPost);
    const actual = await todoService.getTodos();

    // Assert
    expect(actual).toEqual(expected);
  });

  it('shouldn\'t update the repository when an empty todo is POSTed',
    async () => {
    // Arrange
    const todoToPost = {};
    const expected = {
      todos: [
        { 'task': 'This is a todo example' }
      ]
    };

    const todoRepository = {
      getTodos: async () => Promise.resolve(expected),
      postTodo: (todo) => Promise.resolve(expected.todos.push(todo))
    };
    const todoService = require('../../src/service/todo')(todoRepository);

    // Act
    await todoRepository.postTodo(todoToPost);
    const actual = await todoService.getTodos();

    // Assert
    expect(actual).toEqual(expected);
  })

  it('shouldn\'t update the repository when an non-JSON todo is POSTed',
    async () => {
    // Arrange
    const todoToPost = 'I am a todo.. or am I?';
    const expected = {
      todos: [
        { 'task': 'This is a todo example' }
      ]
    };

    const todoRepository = {
      getTodos: async () => Promise.resolve(expected),
      postTodo: (todo) => Promise.resolve(expected.todos.push(todo))
    };
    const todoService = require('../../src/service/todo')(todoRepository);

    // Act
    await todoRepository.postTodo(todoToPost);
    const actual = await todoService.getTodos();

    // Assert
    expect(actual).toEqual(expected);
  })

  it(`shouldn\'t update the repository when an incorrectly formatted todo is
    POSTed`, async () => {
    // Arrange
    const todoToPost = { 'task': 'I am a todo.', 'important': false };
    const expected = {
      todos: [
        { 'task': 'This is a todo example' }
      ]
    };

    const todoRepository = {
      getTodos: async () => Promise.resolve(expected),
      postTodo: (todo) => Promise.resolve(expected.todos.push(todo))
    };
    const todoService = require('../../src/service/todo')(todoRepository);

    // Act
    await todoRepository.postTodo(todoToPost);
    const actual = await todoService.getTodos();

    // Assert
    expect(actual).toEqual(expected);
  })
});
