import { useEffect, useState } from "react";
import Header from "./header/Header.jsx";
import Body from "./body/Body.jsx";

import "./App.css";

function App() {
  useEffect(() => {
    const storedTodoLists = JSON.parse(localStorage.getItem("todoLists"));
    if (storedTodoLists) {
      setTodoLists(storedTodoLists);
    }
  }, []);
  console.log("App render");
  const [todoLists, setTodoLists] = useState([]);
  const handleClick = (value) => {
    const updatedValue = {
      id: Math.random() * 10,
      text: value,
    };
    const updatedLists = [...todoLists, updatedValue];
    setTodoLists(updatedLists);
    localStorage.setItem("todoLists", JSON.stringify(updatedLists));
  };

  const handleDelete = (id) => {
    setTodoLists((prevState) => {
      const updatedLists = prevState.filter((item) => item.id !== id);
      localStorage.setItem("todoLists", JSON.stringify(updatedLists));
      return updatedLists;
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
