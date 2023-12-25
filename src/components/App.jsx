import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { text: inputText, isCompleted: false },
      ]);
    }
    setInputText("");
  }

  function deleteItems() {
    setItems((prevItems) => prevItems.filter((item) => !item.isCompleted));
  }

  function toggleCompletion(index) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].isCompleted = !updatedItems[index].isCompleted;
      return updatedItems;
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
        <button onClick={deleteItems}>
          <span>Delete</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              id={index}
              text={todoItem.text}
              isCompleted={todoItem.isCompleted}
              onToggleCompletion={() => toggleCompletion(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
