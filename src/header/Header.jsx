import { useState } from "react";
function Header({ addTodos }) {
  console.log("Header render");
  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTodo = () => {
    if (!inputValue) return;
    addTodos(inputValue);
    setInputValue("");
  };
  return (
    <section className="w-1/3 flex flex-col">
      <h1 className="text-center text-lg font-bold my-4">TODO LIST</h1>

      <section className="flex justify-center my-8 w-full">
        <input
          onChange={handleOnchange}
          value={inputValue}
          type="text"
          className="border border-stone-800 rounded-sm p-2 mx-2 flex-1"
        />
        <button
          className="bg-stone-800 text-white p-2 rounded-sm hover:bg-stone-600 "
          onClick={handleAddTodo}
        >
          Add
        </button>
      </section>
    </section>
  );
}
export default Header;
