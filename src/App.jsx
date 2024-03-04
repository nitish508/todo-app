import { useCallback, useState } from "react";
import Header from "./header/Header.jsx";
import Body from "./body/Body.jsx";

import "./App.css";

function App() {
  console.log("App render");
  const [todoLists, setTodoLists] = useState([]);
  // Add todos
  const handleClick = (value) => {
    const updatedValue = {
      id: Math.random() * 10,
      text: value,
    };
    setTodoLists((prevState) => [...prevState, updatedValue]);
  };

  const handleDelete = (id) => {
    setTodoLists((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
  };

  return (
    <main className="flex flex-col items-center">
      <Header addTodos={handleClick} />
      <Body lists={todoLists} removeListItem={handleDelete} />
    </main>
  );
}

export default App;
