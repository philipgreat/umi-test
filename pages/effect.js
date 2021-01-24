import { useEffect, useState } from 'react';

function CountInputChanges() {
  
  const [count, setCount] = useState(-1);

  //useEffect(() => setCount(count + 1));

  

  return (
    <div>
      
      <div>Number of changes: {count}</div>
    </div>
  )
}


export default CountInputChanges;