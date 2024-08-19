import styled from "@emotion/styled";

const ForecastContainer = styled("div")({
  marginTop: "20px",
  background: "rgba(0, 0, 0, 0.9)",
  padding: "20px",
  borderRadius: "10px",
  width: "100%",
  maxWidth: "100%",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "space-evenly",
  overflow: "auto",
});

function ForecastForDays({ forecast }) {
  return (
    <div>
      <ForecastContainer>
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
