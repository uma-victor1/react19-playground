import { useState, useCallback, useMemo } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((count) => count + 1), []);
  const doubleCounter = useMemo(() => count * 2, [count]);

  return (
    <>
      <h2>Counter without compiler</h2>
      <section>
        <p>You counted {count} times</p>
        <p>Double count {doubleCounter}</p>
        <button onClick={() => increment()}>add</button>
      </section>
    </>
  );
};

export const CountWithCompiler = () => {
  const [count, setCount] = useState(0);
  const increment = setCount((count) => count + 1);
  const doubleCounter = count * 2;

  return (
    <>
      <h2>Counter with compiler</h2>
      <section>
        <p>You counted {count} times</p>
        <p>Double count {doubleCounter}</p>
        <button onClick={() => increment()}>add</button>
      </section>
    </>
  );
};

export default Count;
