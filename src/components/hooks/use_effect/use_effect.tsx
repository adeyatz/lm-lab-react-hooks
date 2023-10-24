import { useState, useEffect } from "react";
import { Todo } from "../use_x/todo";

type Todo = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
};

// make an api call using useEffect
const jsonUrl = "https://jsonplaceholder.typicode.com/todos/1";

export const APICall = () => {
  const [myJson, setMyJson] = useState<null | Todo>(null);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const fetchJson = async (url: string) => {
      const response = await fetch(url);
      const myJson = await response.json();
      console.log(myJson);
      setMyJson(myJson);
    };

    fetchJson(jsonUrl).catch((error) => setError(error));
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <h2>useEffect</h2>
      <pre>{myJson !== null && JSON.stringify(myJson, null, 2)}</pre>
    </>
  );
};
