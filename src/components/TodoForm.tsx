import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/config/store';
import { addTodo } from '../store/modules/todoSlice';
import Button from './common/Button';

const TodoForm = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const addTodoList = () => dispatch(addTodo(value));
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="button" name="add-btn" clickEvent={addTodoList}>
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
