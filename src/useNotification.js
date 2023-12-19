import React from "react";

export const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if(Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if(permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      })
    } else {
      new Notification(title, options);
    }
  }

  return fireNotif;
}
/*
Usage :

function App() {
  const triggerNotifi = useNotification("너 김치 먹어도 돼?",
    {body: "안돼요. 나 김치 너무 좋아해요."});
  return (
    <div className={'App'}>
      <button onClick={triggerNotifi}>Hello Notification</button>
    </div>
  );
}

export default App;
*/
