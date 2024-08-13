import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const WeatherDetails = styled("div")(({ theme }) => ({
  padding: "2rem",
  maxWidth: "100%",
  width: "700px",
  margin: "0 auto",
  background: "rgba(30, 40, 60, .9)",
  color: "white",
  padding: "40px",
  borderRadius: "20px",
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    padding: ".7rem",
    padding: "20px",
    justifyContent: "space-between",
  },
}));

const TempDiv = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: 600,
  fontSize: "30px",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const DescriptionDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    gap: "10px",
  },
}));

const Descriptions = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
}));

const SkyDetails = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",

  [theme.breakpoints.down("sm")]: {
    gap: "9px",
    flexDirection: "column",
  },
}));

const CenterDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
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
          <p style={{ color: "white" }}>{forecast.current.main.temp}°C</p>
        </TempDiv>

        <DescriptionDiv>
          <CenterDiv>
            <Typography variant="h4">{forecast.current.name}</Typography>
          </CenterDiv>
          <SkyDetails>
            {skyDetailsItems.map((item, index) => (
              <Descriptions key={index}>
                <p>
                  <strong style={{ color: "white" }}>{item.label}</strong>
                </p>
                <p style={{ color: "white" }}>{item.value}</p>
              </Descriptions>
            ))}
          </SkyDetails>
          <CenterDiv>{forecast.current.weather[0].description}</CenterDiv>
        </DescriptionDiv>
      </WeatherDetails>
    </>
  );
}

export default CurrentForeCast;
