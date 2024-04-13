import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="todo-mainContainer">
      <TodoList />
      <TodoForm />
    </main>
  );
}

export default App;
