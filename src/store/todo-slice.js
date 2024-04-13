import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = { items: [] };

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addTask(state, action) {
      state.items.push({ ...action.payload, completed: false });
    },
    deleteTask(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleTodo(state, action) {
      const todoId = action.payload;
      const selectedTodoItem = state.items.find((item) => item.id === todoId);

      if (selectedTodoItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === todoId ? { ...item, completed: !item.completed } : item
          ),
        };
      }

      return state;
    },
  },
});

export const { addTask, deleteTask, toggleTodo } = todoSlice.actions;

export default todoSlice;
