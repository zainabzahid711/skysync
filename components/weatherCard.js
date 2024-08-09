"use client";

import styled from "@emotion/styled";
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const FromContainer = styled("div")({
  padding: "0 auto",
  textAlign: "center",
});

function WeatherSearch({ onSearch }) {
  const [city, setState] = useState(""); //state==city

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };
  return (
    <>
      <FromContainer>
        <Typography style={{ marginBottom: "20px" }}>
          Enter city name to see full forecast
        </Typography>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            style={{ marginRight: "10px" }}
            required
            label="city"
            variant="outlined"
            value={city}
            onChange={(e) => setState(e.target.value)}
            sx={{
              marginRight: "10px",
              input: {
                color: "#ffffff",
                background: "#1C2432",
                borderRadius: "10px",
              },
            }}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      </FromContainer>
    </>
  );
}

export default WeatherSearch;
