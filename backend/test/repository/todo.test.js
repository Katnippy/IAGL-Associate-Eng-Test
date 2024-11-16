const repository = require('../../src/repository/todo');

describe('TODO repository', () => {
  it('should return the todo list', async () => {
    // Arrange
    const expected = {
      todos: [{
        "task": "This is a todo example"
      }]
    };

    // Act
    const actual = await repository.getTodos();

    // Assert
    expect(actual).toEqual(expected);
  });

  it('should accept todos being posted', async () => {
    // Arrange
    const todoToPost = { 'task': 'I am a todo.' };
    const expected = {
      todos: [
        { 'task': 'This is a todo example' },
        { 'task': 'I am a todo.' }
      ]
    };

    // Act
    await repository.postTodo(todoToPost);
    const actual = await repository.getTodos()

    // Assert
    expect(actual).toEqual(expected);
  })
});