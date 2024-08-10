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
            style={{
              marginRight: "10px",
              background: "#2D3A50",
              borderRadius: "10px",
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
