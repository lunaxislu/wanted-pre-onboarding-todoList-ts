import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/config/store';
import TodoCard from './TodoCard';
import { removeTodo } from '../store/modules/todoSlice';
import { MouseEvent, useCallback } from 'react';

const TodoList = () => {
  const todoSlice = useSelector((state: RootState) => state.todoSlice);
  const dispatch = useDispatch<AppDispatch>();
  const completeTodo = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      // const el = e.target as Element
      // el.name
      if (e.target instanceof HTMLButtonElement) {
        const id = e.target.value;
        dispatch(removeTodo(Number(id)));
      }
    },
    [dispatch]
  );
  return (
    <div onClick={completeTodo}>
      {todoSlice?.map((todo) => (
        <TodoCard key={todo.id} text={todo.text} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
