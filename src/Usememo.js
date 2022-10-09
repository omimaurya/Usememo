import { useMemo, useState } from "react";

const Usememo = () => {
  const [count, setCount] = useState(0);

  const [count1, setCount1] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const inc1 = () => {
    setCount1(count1 + 1);
  };
  const isEven = useMemo(() => {
    for (let i = 0; i <= 1000; i++) {}
    return count % 2 === 0;
  }, [count]);
  return (
    <>
      <button onClick={inc}>{count}</button>
      {isEven ? "Even" : "Odd"}
      <button onClick={inc1}>{count1}</button>
    </>
  );
};
export default Usememo;
