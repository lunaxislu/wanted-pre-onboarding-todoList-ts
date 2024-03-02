import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/config/store';
import { addTodo, removeTodo } from '../store/modules/todoSlice';
import { MouseEvent, useEffect } from 'react';
interface useSlice {
  value?: string;
  setValue?: React.Dispatch<string>;
}
const useTodoSlice = ({ value, setValue }: useSlice) => {
  const todoSlice = useSelector((state: RootState) => state.todoSlice);
  const dispatch = useDispatch<AppDispatch>();

  const appendTodo = () => {
    if (value) dispatch(addTodo(value));
  };
  const completeTodo = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      const id = e.target.value;
      dispatch(removeTodo(Number(id)));
    }
  };
  useEffect(() => {
    if (todoSlice.length > 0 && setValue) {
      setValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoSlice]);
  return { appendTodo, completeTodo };
};

export default useTodoSlice;
