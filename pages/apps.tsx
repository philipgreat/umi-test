import React,{ useEffect }  from 'react';
import { useRef, useState } from 'react';
import { useMouse } from 'beautiful-react-hooks'; 

const MouseReporter = () => {
  const ref = useRef();
  const [ showCoords, setShowCoords] = useState(false);
  const [position, { onMouseEnter, onMouseLeave }] = useMouse(ref); 
  
  onMouseEnter(() => setShowCoords(true));
  onMouseLeave(() => setShowCoords(false));
  
  return (
    <div style={{height:"400px"}}>
     <div ref={ref}>
       Move mouse over me to get its current coordinates:
       {showCoords && (
         <p>{position.clientX}, {position.clientY}</p>
       )}
     </div>
    </div>
  );
};


function App() {
  const [varA, setVarA] = useState(0);
  const [varB, setVarB] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setVarA(varA + 1), 1000);
    return () => clearTimeout(timeout);
  }, [varA]);

  useEffect(() => {
    const timeout = setTimeout(() => setVarB(varB + 2), 2000);

    return () => clearTimeout(timeout);
  }, [varB]);

  return <span>{varA}, {varB}</span>;
}




export default () => {
  return (
    <div>
      <App />
    </div>
  );
}
