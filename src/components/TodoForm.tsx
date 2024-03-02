import Button from './common/Button';
import useInput from '../hooks/useInput';
import useTodoSlice from '../hooks/useTodoSlice';

const TodoForm = () => {
  const { value, setValue, changeHandle } = useInput({ text: '' });
  const appendTodo = useTodoSlice({ value, setValue });
  return (
    <div>
      <input type="text" value={value} onChange={changeHandle} />
      <Button type="button" name="add-btn" clickEvent={appendTodo}>
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
