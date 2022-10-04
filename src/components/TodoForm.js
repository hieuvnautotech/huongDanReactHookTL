import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid'
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoForm = () => {
  // Load context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  //style
    const style = isLightTheme ? light : dark;


  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({
      id: uuidv4(),
      title,
    });
    setTitle("");
  };
  // Load context todos
  const { addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        style={style}
        type="text"
        name="title"
        placeholder="Enter a new todo..."
        onChange={onTitleChange}
        value={title}
        required
      />
      <input type="submit" value="Add" style={style} />
    </form>
  );
}

export default TodoForm