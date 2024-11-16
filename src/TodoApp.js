import React from 'react';

import "./styles.css";
import AddTodoForm from './component/AddTodoForm';
import TodoList from './component/TodoList';

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}
