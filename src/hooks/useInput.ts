import { ChangeEvent, useState } from 'react';

const useInput = ({ text }: { text: string }) => {
  const [value, setValue] = useState(text);

  const changeHandle = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return { value, changeHandle, setValue };
};

export default useInput;
