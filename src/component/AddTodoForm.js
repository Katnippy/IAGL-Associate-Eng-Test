import React from 'react';
import { useState } from 'react';

import { connect, useDispatch } from 'react-redux';

import { postTodo } from '../actions';

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  function addTodo(event) {
    event.preventDefault();

    dispatch(postTodo({ task: newTodo }));
    setNewTodo('');
  }

  function handleTodoChange(event) {
    event.preventDefault();

    setNewTodo(event.target.value);
  }

  return (
    <>
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
