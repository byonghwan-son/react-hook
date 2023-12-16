import React, { useState, useEffect } from "react";
import Axios from "axios";

// make hooks
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange };
}

function useFetch(url) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      setLoading(true);
      const data = await Axios.get(url);
      setPayload(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    } finally {
    }
  };

  useEffect(() => {
    callUrl();
  }, []);

  return { payload, loading, error };
}

function App() {
  const name = useInput("");
  const { payload, loading, error } = useFetch(
    "https://api.thecatapi.com/v1/images/search"
  );
  return (
    <>
      <h1>Use Hooks</h1>
      <input {...name} placeholder="name?" />
      <br />
      {loading && <span>loading user cat</span>}
      {!loading && error && <span>{error}</span>}
      {!loading && payload && (
        <img src={payload.data[0].url} width={200} height={200} />
      )}
    </>
  );
}

export default App;
