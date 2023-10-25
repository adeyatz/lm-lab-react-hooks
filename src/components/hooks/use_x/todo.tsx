import useFetch from "./useFetch";

/** This is the response that TypiCode gives for the /todos/ endpoint */
interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const urls: string[] = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
];

export const Todo = () => {
  // Cant do urls.forEach, TS complains about calling useFetch in a callback function.
  const fetchResult0 = useFetch<TodoResponse>(urls[0]);
  const fetchResult1 = useFetch<TodoResponse>(urls[1]);
  const fetchResult2 = useFetch<TodoResponse>(urls[2]);
  const fetchResult3 = useFetch<TodoResponse>(urls[3]);

  return (
    <>
      <h2>Custom Hook</h2>

      {fetchResult0[1] ? <p>Fetching...</p> : <p>{fetchResult0[0]?.title}</p>}
      {fetchResult1[1] ? <p>Fetching...</p> : <p>{fetchResult1[0]?.title}</p>}
      {fetchResult2[1] ? <p>Fetching...</p> : <p>{fetchResult2[0]?.title}</p>}
      {fetchResult3[1] ? <p>Fetching...</p> : <p>{fetchResult3[0]?.title}</p>}
    </>
  );
};
