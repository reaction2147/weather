import React from "react";
import moment from "moment";

const Weather = (props) => {
  return (
    <>
      <div className="bg-white/[.07] rounded shadow backdrop-blur-sm border-white/[.5] w-100">
        <h1 className="pt-4 pl-4 pb-2 text-white text-2xl font-medium">
          {props.result.name}, {props.result.sys.country}
        </h1>
        <div className="flex items-center">
          <img className="pl-2 w-16" src={props.icon} alt="weather icon"></img>
          <p className="text-white text-xl font-medium ml-2">
            {props.result.main.temp.toFixed(0)}
            <span>&#176;</span>C
          </p>
          <p className="text-white text-xl ml-4 pr-4">
            {props.result.weather[0].description}
          </p>
        </div>
        <div className="flex items-center mb-2 ml-4">
          <p className="text-white text-lg font-medium mr-4">
            Min temp: {props.result.main.temp_min.toFixed(0)}
            <span>&#176;</span>C
          </p>
          <p className="text-white text-lg font-medium">
            Max temp: {props.result.main.temp_max.toFixed(0)}
            <span>&#176;</span>C
          </p>
        </div>
        <div className="flex items-center pl-4 pb-2">
          <p className="text-white pr-4">Humidity: {props.result.main.humidity}%</p>
          <p className="text-white">Pressure: {props.result.main.pressure}</p>
        </div>
        <div className="flex items-center pl-4 pb-4">
          <p className="text-white pr-4">
            Sunrise: {moment(props.sunrise).format("LT").slice(0, 5)} AM
          </p>
          <p className="text-white">
            Sunset: {moment(props.sunset).format("LT").slice(0, 5)} PM
          </p>
        </div>
      </div>
    </>
  );
};

export default Weather;
