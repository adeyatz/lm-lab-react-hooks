import { useEffect, useState } from "react";
import { isError } from "../../../helpers/is_error";

export function useFetch<T>(url: string): [T | null, boolean] {
  const [data, setData] = useState<T>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);
        if (response.status === 200) {
          const json = (await response.json()) as T;
          setData(json);
          //          console.log(`setData`, json);
        }
      } catch (e: unknown) {
        setIsFetching(false);
        console.log(isError(e) ? e.message : "Unknown error!");
      }
    };
    fetchData();
  }, [url]);

  return data ? [data, isFetching] : [null, isFetching];
}

export default useFetch;
