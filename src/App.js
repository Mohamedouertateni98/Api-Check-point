import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>{
      setData(res.data);
      
    });
  },[]);




  return (
    <div className='App'>
    {""}
    {data.map((e) => (
      <div className='con1'> name is : {e.name}</div>
    ))}
    </div>
    
  );
}

export default App;
