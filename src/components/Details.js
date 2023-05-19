import React from 'react'

const Details = (data) => {
  return (
    <div className='weather-details'>
        <div className="country-details">
            <h1>{data.name}</h1>
            <p>{data.sys.country}</p>
        </div>
        <div className="temp-details">
            <h1>{Math.round(data.main.temp - 273.15) + "\u00b0" + "C"}</h1>
            <p className='weather-main'>{data.weather[0].main}</p>
        </div>
        <div className='min-max'>
            <span><p>Max:{Math.round(data.main.temp_max - 273.15) + "\u00b0"}</p></span>
            <p>|</p>
            <span><p>Min:{Math.round(data.main.temp_min - 273.15) + "\u00b0"}</p></span>
        </div>
    </div>
  )
}

export default Details