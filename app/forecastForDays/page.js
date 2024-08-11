import WeatherSearch from "@/components/weatherCard";
import React, { useState } from "react";
import { Typography } from "@mui/material";

function ForecastForDays() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/weather?city=${encodeURIComponent(city)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setForecast(data); // Setting the fetched data to the 'forecast' state
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <WeatherSearch onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {forecast && forecast.list && Array.isArray(forecast.list) && (
        <div>
          <Typography variant="h5">5-Day Forecast</Typography>
          {forecast.list.slice(0, 5).map((entry, index) => (
            <div key={index}>
              <img
                src={`http://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
                alt="Weather icon"
              />
              <p>{entry.main.temp}°C</p>
              <p>{entry.weather[0].description}</p>
              <p>Feels like: {entry.main.feels_like}°C</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ForecastForDays;
