import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    if (capital) {
      const fetchWeather = async () => {
        try {
          const api_key = import.meta.env.VITE_SOME_KEY; // Your OpenWeather API key
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`);
          setWeather(response.data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [capital]);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error fetching weather data: {error.message}</div>;
  
  return (
    <div>
      <h4>Weather in {capital}</h4>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
    </div>
  );
};

export default Weather;
