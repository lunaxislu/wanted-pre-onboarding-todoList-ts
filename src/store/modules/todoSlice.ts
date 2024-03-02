import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Todo {
  text: string;
  id: number;
}
const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, { payload }: PayloadAction<string>) => {
      const id = Date.now();
      state.push({ text: payload, id });
    },
    removeTodo: (state, { payload }: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
