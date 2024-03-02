import { useSelector } from 'react-redux';
import { RootState } from '../store/config/store';
import TodoCard from './TodoCard';

import useTodoSlice from '../hooks/useTodoSlice';

const TodoList = () => {
  const todoSlice = useSelector((state: RootState) => state.todoSlice);
  const { completeTodo } = useTodoSlice({});
  return (
    <div onClick={completeTodo}>
      {todoSlice?.map((todo) => (
        <TodoCard key={todo.id} text={todo.text} id={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
