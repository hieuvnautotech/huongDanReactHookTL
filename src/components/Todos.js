import React, { useContext } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { TodoContext } from '../contexts/TodoContext'

const Todos = () => {
  // Load context
  const { todos } = useContext(TodoContext);

  return (
    <div className="todo-list">
      <TodoForm/>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}  />
        ))}
      </ul>
    </div>
  );
}

export default Todos