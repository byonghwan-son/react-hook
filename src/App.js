import React, {useEffect, useRef, useState} from "react";
import {useAxios} from "./useAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({url: 'https://yts.mx/api/v2/list_movies.json'})
  console.log(`Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`);
  return (
    <div className={'App'}>
      <h3>`{data && data.status}`</h3>
      <h4>{loading && "Loading"}</h4>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
