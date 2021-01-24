import React, { Component,useEffect } from "react";

import { useRef, useState } from 'react';
import { useMouse } from 'beautiful-react-hooks'; 



function App() {
  const [varA, setVarA] = useState(0);
  

  const isSupportNotification=()=>{
    return ("Notification" in window)===true;
  }

  const showNotification=({title,body,icon})=> {
    if (!isSupportNotification()) {
      return;
    }

    new Notification(title)
  }
  useEffect(() => {
    if (!isSupportNotification()) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }

  });


  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 10000);

    showNotification({title:"current value "+ varA});

    return () => clearTimeout(timeout);
  }, [varA]);


  

  return <span>{varA}</span>;
}




export default () => {
  return (
    <div>
      <App />
    </div>
  );
}

