import useFetch from "./useFetch";
import { getSummat } from "./scratch";

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

      {fetchResult0.fetchingState ? (
        <p>Fetching...</p>
      ) : (
        <p>{fetchResult0.dataObj?.title}</p>
      )}
      {fetchResult1.fetchingState ? (
        <p>Fetching...</p>
      ) : (
        <p>{fetchResult1.dataObj?.title}</p>
      )}
      {fetchResult2.fetchingState ? (
        <p>Fetching...</p>
      ) : (
        <p>{fetchResult2.dataObj?.title}</p>
      )}
      {fetchResult3.fetchingState ? (
        <p>Fetching...</p>
      ) : (
        <p>{fetchResult3.dataObj?.title}</p>
      )}
    </>
  );
};
