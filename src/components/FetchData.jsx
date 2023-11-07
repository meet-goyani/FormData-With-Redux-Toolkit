import axios from "axios";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

export const FetchData = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const debounceValues = useDebounce(search, 500);

  useEffect(() => {
    const getData = async () => {
      const controller = new AbortController();
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?title_like=${debounceValues}`,
          {
            signal: controller.signal,
          }
        );
        setUserData(response?.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [debounceValues]);
  return (
    <div>
      <h1>FetchData</h1>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        userData.map((user) => {
          return <p key={user.id}>{user.title}</p>;
        })
      )}
    </div>
  );
};
