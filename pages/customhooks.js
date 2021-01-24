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


const useHits = () => {

  const [count, setCounter] = useState(false);
  const [data, setData] = useState({ hits: [] });
  
  useEffect(() => {fetchData({data, setData});},[count])

  const showLog=(message)=>{
    console.log(message)

  }

  return [data,showLog,setData];

    
 

}

function App() {
  const [data, showLog, setData] = useHits();
  
  showLog("..... +>"+data.hits.length)
  
 
  if(data.hits.length<=0){
    return <div>waiting.......</div>
  }

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