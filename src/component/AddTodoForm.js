import React from 'react';
import { useState } from 'react';

import { connect } from 'react-redux';

const AddTodoForm = () => {
  const [newTodo, setNewTodo] = useState('');

  function addTodo(event) {
    event.preventDefault();

    console.log('This will add a todo soon!');
  }

  function handleTodoChange(event) {
    event.preventDefault();

    setNewTodo(event.target.value);
  }

  return (
    <>
      <h1>{newTodo}</h1>
      <form onSubmit={addTodo}>
        <label htmlFor="todo-input">Todo: </label>
        <input id="todo-input" value={newTodo} onChange={handleTodoChange} 
          required />
        <button type="submit">+</button> 
      </form>
    </>
  );
};

// export default Todo;
export default connect(
  null
)(AddTodoForm);
