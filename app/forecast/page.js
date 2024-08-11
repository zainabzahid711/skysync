"use client";

import WeatherSearch from "@/components/weatherCard";
// import ForecastForDays from "../forecastForDays/page";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

const MainForeCast = styled("div")({
  maxWidth: "100%",
});

const WeatherDetails = styled("div")({
  maxWidth: "100%",
  width: "700px",
  background: "rgba(28, 36, 50, 0.7)",
  padding: "40px",
  borderRadius: "20px",
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-around",
});

const TempDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "600",
  fontSize: "30px",
});

const DescriptionDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

const SkyDetails = styled("div")({
  display: "flex",
  gap: "20px",
});

const CenterDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ForecastContainer = styled("div")({
  marginTop: "20px",
  background: "rgba(28, 36, 50, 0.7)",
  padding: "20px",
  borderRadius: "10px",
  width: "90%",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "space-between",
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

  const skyDetailsItems = [
    {
      label: "Wind Speed",
      value: `${forecast?.current?.wind?.speed?.toFixed(1)} m/s`,
    },
    { label: "Humidity", value: `${forecast?.current?.main?.humidity}%` },
    { label: "Feels Like", value: `${forecast?.current?.main?.feels_like}°C` },
  ];

  return (
    <>
      <MainForeCast>
        <WeatherSearch onSearch={handleSearch} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {forecast && (
          <>
            <WeatherDetails>
              <TempDiv>
                <img
                  src={`http://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}
                  alt="Weather icon"
                />
                <p>{forecast.current.main.temp}°C</p>
              </TempDiv>

              <DescriptionDiv>
                <CenterDiv>
                  <Typography variant="h4">{forecast.current.name}</Typography>
                </CenterDiv>
                <SkyDetails>
                  {skyDetailsItems.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p>
                        <strong>{item.label}</strong>
                      </p>
                      <p>{item.value}</p>
                    </div>
                  ))}
                </SkyDetails>
                <CenterDiv>{forecast.current.weather[0].description}</CenterDiv>
              </DescriptionDiv>
            </WeatherDetails>

            <ForecastContainer>
              <Typography variant="h5">5-Day Forecast</Typography>
              {forecast.forecast.list.slice(0, 5).map((entry, index) => (
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
            </ForecastContainer>
          </>
        )}
      </MainForeCast>
    </>
  );
}

export default ForecastPage;
