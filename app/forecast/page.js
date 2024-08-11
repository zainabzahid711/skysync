"use client";

import CurrentForeCast from "@/components/currentForeCast";
import ForecastForDays from "@/components/daysForeCast";
import WeatherSearch from "@/components/weatherCard";
import { styled } from "@mui/system";
import { useState } from "react";

const MainForeCast = styled("div")({
  maxWidth: "100%",
});

function ForecastPage() {
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
        throw new Error("failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setForecast(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MainForeCast>
        <WeatherSearch onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {forecast && (
          <>
            <CurrentForeCast forecast={forecast} />
            <ForecastForDays forecast={forecast} />
          </>
        )}
      </MainForeCast>
    </>
  );
}

export default ForecastPage;
