import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/config/store';
import { addTodo } from '../store/modules/todoSlice';
import { useEffect } from 'react';
interface useSlice {
  value: string;
  setValue: React.Dispatch<string>;
}
const useTodoSlice = ({ value, setValue }: useSlice) => {
  const todoSlice = useSelector((state: RootState) => state.todoSlice);
  const dispatch = useDispatch<AppDispatch>();
  const appendTodo = () => {
    if (value) dispatch(addTodo(value));
  };

  useEffect(() => {
    if (todoSlice.length > 0) {
      setValue('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoSlice]);
  return appendTodo;
};

export default useTodoSlice;
