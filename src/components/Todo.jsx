import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import TodoForm from './TodoForm';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return (
      <TodoForm
        edit={edit}
        onSubmit={submitUpdate}
      />
    );
  }

  return todos.map((todo, index) => (
    <div
      key={index}
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
    >
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>
      <div className='icons'>
        <CiEdit
          className='edit-icon'
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
        <RiCloseCircleLine
          className='delete-icon'
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  ));
};
export default Todo;
