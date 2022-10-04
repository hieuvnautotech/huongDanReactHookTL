import React, { createContext, useState } from 'react'
// import { todoReducer } from '../reducers/TodoReducer'
// import { GET_TODOS, SAVE_TODOS } from '../reducers/types'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  // State
  // const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState([
    { id: 1, title: "viec1" },
    { id: 2, title: "viec2" },
    { id: 3, title: "viec3" },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const todoContextData = {
    todos,
    addTodo,
    deleteTodo,
  };
  // return
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider
