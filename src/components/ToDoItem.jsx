import React, { useState } from "react";

function ToDoList(props) {
  const [isLineThrough, setLineThrough] = useState(false);

  function handleClick() {
    setLineThrough((prev) => !prev);
    props.onToggleCompletion(); // Notify the parent component about the toggle
  }

  const textDecorationStyle = props.isCompleted ? "line-through" : "none";

  return (
    <li onClick={handleClick} style={{ textDecoration: textDecorationStyle }}>
      {props.text}
    </li>
  );
}

export default ToDoList;
