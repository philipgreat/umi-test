import React from 'react';
import styles from './geolocation.css';
import { useGeolocation } from 'beautiful-react-hooks'; 


const DisplayDemo = (props) =>{
  return <div >{props.children}</div>
}


const PositionReporter = () => {
  const [geoState, { onChange }] = useGeolocation(); 
  
  onChange(() => {
    console.log('Position changed...');
  });
    
  return (
   <DisplayDemo>
     The current position is:
     {geoState.isRetrieving && (<p>Retrieving position...</p>)}
     {geoState.isSupported && geoState.position && [
       <p key={0}>Lat: {geoState.position.coords.latitude}</p>,
       <p key={1}>Lng: {geoState.position.coords.longitude}</p>
     ]}
   </DisplayDemo>
  );
};

export default () => {
  return (
    <div>
      <PositionReporter className={styles.title}>Page geolocation</PositionReporter>
    </div>
  );
}
