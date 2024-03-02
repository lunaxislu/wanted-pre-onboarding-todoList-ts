import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/config/store';
import { addTodo } from '../store/modules/todoSlice';
import Button from './common/Button';
import useInput from '../hooks/useInput';

const TodoForm = () => {
  const { value, changeHandle } = useInput({ text: '' });
  const dispatch = useDispatch<AppDispatch>();
  const addTodoList = () => dispatch(addTodo(value));
  return (
    <div>
      <input type="text" value={value} onChange={changeHandle} />
      <Button type="button" name="add-btn" clickEvent={addTodoList}>
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
