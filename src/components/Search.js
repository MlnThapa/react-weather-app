import React,{useState} from 'react'
import {useDispatch } from 'react-redux'
import {addName} from '../slice/NameSlice'

const Search = () => {
    let [cityName, setCityName] = useState('')
    const dispatch = useDispatch()
  return (
    <div className='Search'>
        <input type="text" value={cityName} onChange={(e)=> setCityName(e.target.value)}/>
        <button onClick={()=>dispatch(addName(cityName))}><p>Search</p></button>
    </div>
  )
}

export default Search