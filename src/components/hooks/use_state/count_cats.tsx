import { useState } from "react";

const Cat = "😺";

export function CountCats() {
  const [numberOfCats, setNumberOfCats] = useState<number>(0);

  const incrementNumberOfCats = () => {
    setNumberOfCats(numberOfCats + 1);
  };

  return (
    <>
      <h2>useState</h2>

      <p>
        {numberOfCats === 0
          ? `cats will appear here`
          : Cat.repeat(numberOfCats)}
      </p>

      <button onClick={incrementNumberOfCats}>
        There are {numberOfCats} cats 🥳
      </button>
    </>
  );
}
