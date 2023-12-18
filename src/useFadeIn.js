import React, { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      duration = 1;
      delay = 0;
    }
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

/* Usage : 
function App() {
  const fadeInH1 = useFadeIn(3, 1);

  return (
    <div className="App">
      <h3 {...fadeInH1}>React Hook</h3>
    </div>
  );
}

export default App;
*/
