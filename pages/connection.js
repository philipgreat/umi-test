import React from 'react';
import styles from './connection.css';
import { useOnlineState } from 'beautiful-react-hooks'; 


const DisplayDemo = (props) =>{
  return <div >{props.children}</div>
}

const ConnectionTest = () => {
   const isOnline = useOnlineState();
   return (
     <DisplayDemo>
       <p>Connection status: {isOnline ? 'online' : 'offline'}</p>
     </DisplayDemo>
   );
};

export default () => {
  return (
    <div>
      <ConnectionTest/>
    </div>
  );
}
