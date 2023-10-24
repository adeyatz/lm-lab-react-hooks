import { ChangeEvent, useRef, useState } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");

  const countRef = useRef<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    countRef.current += 1;
  };

  const count = countRef.current;

  return (
    <>
      <h2>useRef</h2>

      <input value={value} type="text" onChange={(e) => handleChange(e)} />

      <p>{value}</p>
      <p>I have rendered {count} times</p>
    </>
  );
};
