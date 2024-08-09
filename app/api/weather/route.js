// --------via express--------

// const express = require("express");

// const app = express();

// app.get("/", function (req, res) {
//   res.send("server is runininggg");
// });

// const port = 3001;
// app.listen(port, () => {
//   console.log("server is runing on port");
// });

//////////--------api gett-----------
// const https = require("https");

// app.get("/", function (req, res) {
//   const url =
//     "https://api.openweathermap.org/data/2.5/weather?q=London&appid=09db8c5c48c92c9dee1a605ee0b18f0d&units=metric";
//   https.get(url, function (response) {
//     console.log(responce.statusCode);

//     response.on("data", function (data) {
//       const weatherdata = JSON.parse(data);
//       const temperature = weatherdata.main.temperature;

//       res.write("the temperature is " + temperature + "degree celsius");
//     });
//   });
//   res.send("server is running");
// });

// ----------via next api----------

// app/api/weather/route.js
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const city = searchParams.get("city");
  if (!city) {
    return NextResponse.json({ error: "city is required" }, { status: 400 });
  }

  const apiKey = "09db8c5c48c92c9dee1a605ee0b18f0d";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
