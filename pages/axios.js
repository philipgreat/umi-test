import React, { useState, useEffect } from 'react';
import axios from 'axios';
 

const  hits = async () => {
  const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');

  return await result.data
}

const fetchData=async ({data, setData})=>{
  const resultData = await hits();
  setData(resultData)
}

function App() {
  const [data, setData] = useState({ hits: [] });
  const [count, setCount] = useState(0);
  useEffect(() => {

     fetchData({data, setData});
    },[count]
  );
  
  return (
    <div><button onClick={()=>setCount(count+1)} >refresh {count} times </button>
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul></div>
  );
}
 
export default App;



/*


function App() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(  () => {

    const callAPI= async ()=>{
      const resultData = await hits();
      setData(resultData)
    }
    callAPI();
  }
  );
 
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
 
export default App;
*/