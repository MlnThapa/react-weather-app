import React,{useState,useEffect} from 'react'
import {useDispatch } from 'react-redux'
import {addName} from '../slice/NameSlice'

const Search = () => {
    let [cityName, setCityName] = useState('')
    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault();
    }
    
  return (
    <div className='Search'>
      <form onSubmit={handleSubmit}>
        <input type="text" value={cityName} onChange={(e)=> setCityName(e.target.value)}/>
        <button onClick={()=>dispatch(addName(cityName))}><p>Search</p></button>
        </form>
    </div>
  )
}

export default Search