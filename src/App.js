import './App.css'
import React,{useState,useEffect} from 'react'
import Search from './components/Search'
import Details from './components/Details'
import { useSelector } from 'react-redux'

function App() {
  let [data,setData] = useState([]);
  let name = useSelector((state)=>state.nameReducer.value)
  useEffect(()=>{
    const fetchApi =async()=>{
      const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e989050c538b213163998f96efa4a09b`)
      const urlResponse = await url.json();
      setData(urlResponse)
    }
    fetchApi()
  },[name])
  return (
    <div className='Container'>
      <div className='weather'>
        <Search/>
        {!data.name?<p>Please enter a valid city name</p>:<Details {...data}/>}
      </div>
    </div>
  );
}

export default App;
