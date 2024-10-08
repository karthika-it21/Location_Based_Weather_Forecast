/* import React from 'react';
import { iconUrlFromCode } from '../services/weatherService';

function Forecast({ weather }) {
  return (
    // Check if weather object is provided
    <div>
      {weather && (
        <React.Fragment>
          <div className="flex flex-row items-center justify-between text-white py-3 ">
        <img src={iconUrlFromCode(weather.icon)} 
        alt=""
        className="w-20"
        />
        </div >
        <div><p className="font-light text-xl text-white">Pressure {weather.pressure} Pa</p></div>
          
        </React.Fragment>
      )}
    </div >
  );}


export default Forecast;

 

  // Render forecast items if available
  /*return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map(item => (
          <div key={item.title} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className="w-12 my-1" alt="" />
            <p className="font-medium">{`${item.temp}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );

  import React from 'react';
import { iconUrlFromCode } from '../services/weatherService';

function Forecast({ title, items }) {
  // Check if items is not an array
  if (!Array.isArray(items)) {
    // Return default placeholder content
    return (
      <div>
        <div className="flex items-center justify-start mt-6">
          <p className="text-white font-medium uppercase">{title}</p>
        </div>
        <hr className="my-2" />
        <div className="text-white">No forecast data available</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map(item => (
          <div key={item.title} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className="w-12 my-1" alt="" />
            <p className="font-medium">{`${item.temp}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;*/

import React from 'react';
import formatCurrentWeather from "../services/weatherService";


function Forecast( { title , weather }) {


  return (
    <div>
      {weather && (
        <React.Fragment>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
      <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:00 AM</p>
            <img src="http://openweathermap.org/img/wn/11d@2x.png" className="w-12 my-1" alt="" />
            <p className="font-medium text-white">
              {weather.pressure} Pa
            </p>
            <p className="font-medium">19°</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:00 AM</p>
            <img src="http://openweathermap.org/img/wn/03d@2x.png" className="w-12 my-1" alt="" />
            <p className="font-medium text-white">
              {weather.pressure} Pa
            </p>
            <p className="font-medium">19°</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:00 AM</p>
            <img src="http://openweathermap.org/img/wn/02d@2x.png" className="w-12 my-1" alt="" />
            <p className="font-medium text-white">
              {weather.pressure} Pa
            </p>
            <p className="font-medium">19°</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:00 AM</p>
            <img src="http://openweathermap.org/img/wn/09n@2x.png" className="w-12 my-1" alt="" />
            <p className="font-medium text-white">
              {weather.pressure} Pa
            </p>
            <p className="font-medium">19°</p>
          </div>
      </div>
      </React.Fragment>) }

      
    </div>
  )
}

export default Forecast



