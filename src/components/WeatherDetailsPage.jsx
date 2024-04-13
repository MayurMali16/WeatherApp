// WeatherDetailsPage.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CityWeather from "./CityWeather";

const WeatherDetailsPage = () => {
  const { cityName, cityId } = useParams();
  const [cityWeather, setCityWeather] = useState(null);

  useEffect(() => {
    const fetchCityWeather = async () => {
      try {
        const apiKey = "2edee9d7cfee7b977c32c3acddd04505";
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();
        setCityWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (cityId) {
      fetchCityWeather();
    }
  }, [cityId]);

  return (
    <div className=" bg-center bg-fixed">
      <div className="container mx-auto p-4" >
        <h1 className="flex justify-center text-3xl font-bold mb-4">Weather Details for {cityName}</h1>
        {cityWeather ? (
          <CityWeather weatherData={cityWeather} />
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
    </div>
  );
};

export default WeatherDetailsPage;

