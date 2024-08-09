"use client";

import WeatherSearch from "@/components/weatherCard";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const MainForeCast = styled("div")({
  maxWidth: "100%",
  backgroundColor: "#0000",
});

function ForecastPage() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    console.log("city submitted", city);

    try {
      const response = await fetch(`/api/weather?city=${city}`);
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      const data = await response.json();
      console.log("data is fetched", data);
      setForecast(data);
    } catch (error) {
      setError(error.message);
      console.log("error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MainForeCast>
        <WeatherSearch onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>error: {error}</p>}
        {forecast && (
          <div>
            <Typography variant="h4">
              Weather Forecast for {forecast.name}
            </Typography>
            <p>
              <strong>Temperature:</strong> {forecast.main.temp.toFixed(1)}°C
            </p>
            <p>
              <strong>Description:</strong> {forecast.weather[0].description}
            </p>
            <p>
              <strong>Wind Speed:</strong> {forecast.wind.speed.toFixed(1)} m/s
            </p>
            <p>
              <strong>Humidity:</strong> {forecast.main.humidity}%
            </p>
          </div>
        )}
      </MainForeCast>
    </>
  );
}

export default ForecastPage;
