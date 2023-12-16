import { useState, useEffect } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };

  // componentDidMount(X), componentDidUpdate(O)
  useEffect(updateTitle, [title]);

  return setTitle;
};

export default useTitle;

/*
Usage : 
export default App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <h1>Hello User Hook</h1>
    </div>
  );
};
*/
