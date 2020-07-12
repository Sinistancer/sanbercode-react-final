import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const ulStyle = {
  paddingLeft: 0,
}

function TodoList() {
  const tasks = useSelector(state => state.todo.todoItems);
  return (
    <div>
      <h2>List:</h2>
      <ul style={ulStyle}>
        {tasks.map(t =>
          <TodoItem item={t} key={t.id} />
        )}
      </ul>
    </div>
  );
}

export default TodoList;
