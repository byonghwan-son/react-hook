import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0
  })
  const onScroll = (event) => {
    setState({
      x: window.scrollX,
      y: window.scrollY
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);
  return state;
};

/*
Usage :
function App() {
  const { y } = useScroll();
  return (
    <div className={'App'} style={{height: '1000vh'}}>
      <h3 style={{position: 'fixed', color: y > 300 ? 'red' : 'blue'}}>Use React Hook</h3>
    </div>
  );
}

export default App;
*/
