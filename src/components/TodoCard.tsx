import Button from './common/Button';

interface CardType {
  text: string;
  id: number;
}
const TodoCard = ({ text, id }: CardType) => {
  return (
    <div>
      <p>{text}</p>
      <Button type="button" name="remove" value={id}>
        delete
      </Button>
    </div>
  );
};

export default TodoCard;
