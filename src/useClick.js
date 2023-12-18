import { useRef, useEffect } from "react";
import "./styles.css";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") return;
    // dependency가 없는 상태에서는 componentDidMount의 형태로 아래의 내용을 호출함(딱 한 번만..)
    // 만약 아래의 dependency 배열에 해당 값이 있다면 해당 값이 변경될 때마다 아래의 내용을 호출함.
    // 이것은 componentDidUpdate와 같음.
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnmount에서 리턴된 함수를 호출함.
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

export default useClick;

/*
Usage : 
function App() {
  const onClick = () => {
    console.log("clicked Title");
  };
  const title = useClick(onClick);
  return (
    <div className="App">
      <h1 ref={title}>Hello React Hook</h1>
    </div>
  );
}

export default App;
*/
