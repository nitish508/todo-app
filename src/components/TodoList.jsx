import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const state = useSelector((state) => state.todo.items || []);
  return (
    <section className="todolist-container">
      <ul>
        {state.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};
export default TodoList;
