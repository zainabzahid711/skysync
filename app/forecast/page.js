"use client";

import BackgroundStyle from "@/components/background";
import CurrentForeCast from "@/components/currentForeCast";
import ForecastForDays from "@/components/daysForeCast";
import WeatherSearch from "@/components/weatherCard";
import styles from "../page.module.css";

import "../page.module.css";
import { styled } from "@mui/system";
import { useState } from "react";

const MainForeCast = styled("div")({
  position: "relative",
  maxWidth: "100%",
  zIndex: "1300",
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
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

  const backgroundStyle = forecast ? BackgroundStyle(forecast) : {};
  const dynamicImageURL = forecast
    ? BackgroundStyle(forecast).backgroundImage
    : null;

  return (
    <>
      <div>
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: dynamicImageURL
              ? `url(${dynamicImageURL})`
              : "url(/assets/backgroundImage.jpeg)",
            opacity: dynamicImageURL ? 0.2 : 1,
          }}
        ></div>
        <MainForeCast
          style={backgroundStyle}
          className={styles.backgroundContainer}
        >
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
      </div>
    </>
  );
}

export default ForecastPage;
