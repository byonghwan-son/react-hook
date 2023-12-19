import React, {useEffect, useRef, useState} from "react";

const useFullscreen = (runCb) => {
  const element = useRef()
  const triggerFull = () => {
    if(element.current) {
      if(element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if(element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if(element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if(element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
    }
    if(runCb && typeof runCb === 'function')
      runCb(true)
  }
  const exitFull = () => {
    if(document.fullscreenElement) {
      if(document.exitFullscreen) {
        document.exitFullscreen();
      } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if(document.webkitExitFullScreen) {
        document.webkitExitFullScreen();
      } else if(document.msExitFullScreen) {
        document.msExitFullScreen();
      }
    }
    if(runCb && typeof runCb === 'function')
      runCb(false)
  }
  return {element, triggerFull, exitFull };
}

function App() {
  const isFullS = (isFull) => {
    console.log(isFull ? 'Full Screen' : 'Back to Normal Screen')
  }
  const { element, triggerFull, exitFull } = useFullscreen(isFullS)
  return (
    <div className={'App'}>
      <div ref={element}>
        <button onClick={exitFull}>Exit fullscreen</button>
        <img style={{width: '300px', height: '200px'}}
             src={`https://i.namu.wiki/i/ROGzx3BkPFtwuJ1OPbuKCasvNHihIgvq2Bxx9gtzGmFHObCda5zRbIamObsd4CXje7tLmpwSqRaiTnbfI1uXiw.webp`}/>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
