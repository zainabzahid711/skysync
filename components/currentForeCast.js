import { Typography } from "@mui/material";
import { styled } from "@mui/system";

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

function CurrentForeCast({ forecast }) {
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
    </>
  );
}

export default CurrentForeCast;
