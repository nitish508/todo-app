import { useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../store/todo-slice";

const TodoForm = () => {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(formRef.current);
    const data = Object.fromEntries(fd.entries());
    if (!data.todoText.trim()) return false;

    const updatesData = { ...data, id: uuidv4() };
    dispatch(addTask(updatesData));
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="todoText"
        placeholder="+ Add Task"
        className="todo-form-input"
        onKeyDown={handleKeyDown}
      />
    </form>
  );
};

export default TodoForm;
