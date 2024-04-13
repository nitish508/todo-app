import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteTask, toggleTodo } from "../store/todo-slice";

const TodoItem = ({ todo }) => {
  const isCompleted = useSelector((state) => {
    const todoItem = state.todo.items.find((item) => item.id === todo.id);
    return todoItem ? todoItem.completed : false;
  });
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleSelect = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <li onClick={() => handleSelect(todo.id)}>
      <label htmlFor="todo-input-checkbox" className="checkbox-container">
        <input
          type="checkbox"
          id={`todo-input-checkbox-${todo.id}`}
          defaultChecked={isCompleted}
        />
        <span className="custom-checkbox"></span>
      </label>
      <span
        className={`todoitem-text ${isCompleted && "todoitem-text-strike"}`}
      >
        {todo.todoText}
      </span>
      <button
        onClick={() => handleDelete(todo.id)}
        className="icon-button"
        title="Delete"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TodoItem;
