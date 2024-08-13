"use client";

import styled from "@emotion/styled";
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { useState } from "react";

const FromContainer = styled("div")({
  margin: "0 auto",
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
      <FromContainer style={{ padding: "2rem" }}>
        <Typography style={{ marginBottom: "20px" }}>
          Enter city name to see forecast
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
            style={{
              width: "700px",
              marginRight: "10px",
              background: "rgba(25, 36, 50, .8)",
              color: "rgba(255, 255, 255, 1)",
              borderRadius: "20px",
              zIndex: "100",
            }}
            required
            label="city"
            placeholder="City Name e.g Lahore"
            variant="outlined"
            value={city}
            onChange={(e) => setState(e.target.value)}
            sx={{
              marginRight: "10px",
              input: {
                color: "#ffffff",
                borderRadius: "10px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit" edge="end" color="primary">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </FromContainer>
    </>
  );
}

export default WeatherSearch;
