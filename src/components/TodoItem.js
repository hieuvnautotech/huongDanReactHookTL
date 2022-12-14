import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  // Load Context
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  // Style
  const style = isLightTheme ? light : dark;
  // Load context todos
  const { deleteTodo } = useContext(TodoContext);
  
  return (
    <li
      onClick={() => {
        deleteTodo(todo.id);
      }}
      style={style}
    >
      {todo.title}
    </li>
  );
}

export default TodoItem