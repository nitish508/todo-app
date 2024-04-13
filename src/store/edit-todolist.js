import { createSlice } from "@reduxjs/toolkit";

const checkIsCompleted = { isCompleted: false };

const editTodoSlice = createSlice({
  name: "editTodo",
  initialState: checkIsCompleted,
  reducers: {
    isCompleted(state) {
      state.isCompleted = !state.isCompleted;
    },
  },
});
export const { isCompleted } = editTodoSlice.actions;
export default editTodoSlice;
