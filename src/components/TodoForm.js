import React, {useState} from 'react'

const TodoForm = (addTodo) => {
    const handleSubmit = event => {
        event.preventDefault()
        addTodo({
            id: 4,
            title
        })
    }

    const style = {
        background: 'rgba(240, 240, 240)',
        color: 'black'
      }
      const [title, setTitle] = useState([''])
      const onTitleChange = event => {
        setTitle(event.target.value)
      }
  return (
    <form onSubmit={handleSubmit}>
        <input 
        style={style} 
        type="text" 
        name='title' 
        placeholder='Enter a new todo...' 
        onChange={onTitleChange}
        value={title}
        required
        />
        <input type="submit" value='Add' style={style}/>
    </form>
  )
}

export default TodoForm