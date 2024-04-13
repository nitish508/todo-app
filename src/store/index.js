import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import editTodoSlice from "./edit-todolist";

const store = configureStore({
  reducer: { todo: todoSlice.reducer, edit: editTodoSlice.reducer },
});

export default store;
