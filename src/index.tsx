import { useState } from 'react';

export default function useToggle(): [true | false, () => void] {
  const [value, setValue] = useState(false);

  return [
    value,
    () => {
      setValue(prevValue => !prevValue);
    },
  ];
}
