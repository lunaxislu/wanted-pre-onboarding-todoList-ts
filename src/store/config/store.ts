import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../modules/todoSlice';
const store = configureStore({
  reducer: { todoSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
