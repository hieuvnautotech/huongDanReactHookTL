import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
    const style = {
        background: 'rgba(240, 240, 240)',
        color: 'black'
      }
    const [todos, setTodos] = useState([
        {id:1, title:'viec1'},
        {id:2, title:'viec2'},
        {id:3, title:'viec3'},
    ])

    const addTodo = (todo) => {
        setTodos([...todos, todo])   
    }
  return (
    <div className='todo-list'>
        <TodoForm addTodo={addTodo}/>
        <ul>
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} addTodo={addTodo}/>
                ))}
        </ul>
    </div>
  )
}

export default Todos