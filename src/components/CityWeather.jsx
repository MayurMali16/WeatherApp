import React from "react";
import temp from "../assets/temp.png";
import humdity from "../assets/humidity.png";
import windy from "../assets/wind.png";
import update from "../assets/sun.png";
import { Link } from "react-router-dom";



const CityWeather = ({ weatherData }) => {
  const { main, weather, wind } = weatherData;
  const temperature = main.temp;

  return (
    <div className="text-center">
      <div className="inline-block justify-center items-center mb-4">
        <img src={temp} alt="" className="w-[200px]" />
        <span className="text-4xl font-bold">{temperature}</span>
        <span className="text-2xl ml-2">°C</span>
      </div>
      <div className="flex flex-col justify-center sm:flex-row gap-14">
        <p className="mb-2 text-2xl flex flex-col items-center border-2 px-12 py-4">
          <img src={humdity} alt="" className="w-[150px]" />
          <b>Humidity: {main.humidity}%</b>
        </p>
        <p className="mb-2 text-2xl flex flex-col items-center border-2 px-8">
          <img src={windy} alt="" className="w-[150px]" />
          <b>Wind Speed: {wind.speed} m/s</b>
        </p>
        <p className="mb-2 text-2xl flex flex-col items-center border-2 px-8">
          <img src={update} alt="" className="w-[150px]" />
          <b>Update: {weather[0].description}</b>
        </p>
      </div>
      <div className="flex justify-center py-3">
        {temperature < 45 ? (
          <h2>Weather is clear and good</h2>
        ) : (
          <p>Weather: {weather[0].description}</p>
        )}
      </div>
           <div className="flex justify-center py-3">
        <Link to="/">
          <button className="bg-black text-white px-2 py-2 rounded-xl hover:bg-violet-600">
            Search Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CityWeather;



