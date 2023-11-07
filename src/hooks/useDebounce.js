import { useEffect, useState } from "react";

const useDebounce = (values, delay) => {
  const [debounceValues, setDebounceValues] = useState(values);

  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebounceValues(values);
    }, delay);

    return () => {
      clearTimeout(timerID);
    };
  }, [values, delay]);

  return debounceValues;
};

export default useDebounce;
