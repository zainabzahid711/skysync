import { Typography } from "@mui/material";
import styled from "@emotion/styled";

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

function ForecastForDays({ forecast }) {
  return (
    <div>
      <ForecastContainer>
        <Typography variant="h5">5-Day Forecast</Typography>
        {forecast.forecast.list.slice(0, 5).map((entry, index) => (
          <div key={index}>
            <img
              src={`http://openweathermap.org/img/wn/${entry.weather[0].icon}@2x.png`}
              alt="Weather-icon"
            />
            <p>{entry.main.temp}°C</p>
            <p>{entry.weather[0].description}</p>
            <p>Feels like: {entry.main.feels_like}°C</p>
          </div>
        ))}
      </ForecastContainer>
    </div>
  );
}

export default ForecastForDays;
