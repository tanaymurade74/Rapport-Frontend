import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(url, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        });
        if (response.status === 401) {
          localStorage.removeItem("token");
          window.location.href = "/";
          return;
        }
        if (!response.ok) {
          throw new Error("unable to fetch");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
