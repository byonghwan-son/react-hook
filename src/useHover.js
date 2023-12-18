import { useEffect, useRef } from "react";

export const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }

    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.addEventListener("mouseenter", onHover);
      }
    };
  }, []);

  return element;
};
/*
function App() {
  const onHover = () => {
    console.log("onHover Title");
  };
  const hover = useHover(onHover);
  return (
    <div className="App">
      <h1 ref={hover}>Hello React Hook</h1>
    </div>
  );
}

export default App;
*/
