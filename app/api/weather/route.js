import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  const apiKey = "09db8c5c48c92c9dee1a605ee0b18f0d";
  const units = "metric";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;

  try {
    // Fetch current weather data
    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) {
      const errorData = await weatherResponse.json();
      console.error("Weather API Error:", errorData);
      return NextResponse.json(
        { error: `Weather API Error: ${errorData.message}` },
        { status: weatherResponse.status }
      );
    }
    const weatherData = await weatherResponse.json();

    // Fetch 5-day forecast data
    const forecastResponse = await fetch(forecastUrl);
    if (!forecastResponse.ok) {
      const errorData = await forecastResponse.json();
      console.error("Forecast API Error:", errorData);
      return NextResponse.json(
        { error: `Forecast API Error: ${errorData.message}` },
        { status: forecastResponse.status }
      );
    }
    const forecastData = await forecastResponse.json();

    // Extract 5-day forecast (one entry per day)
    const dailyForecasts = forecastData.list.filter(
      (entry, index, self) => index % 8 === 0
    );

    // Combine and return data
    const combinedData = {
      current: weatherData,
      forecast: {
        list: dailyForecasts,
      },
    };

    return NextResponse.json(combinedData);
  } catch (error) {
    console.error("API Request Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// app/api/weather/route.js

// export async function GET(request) {
//   const url = new URL(request.url);
//   const city = url.searchParams.get("city");

//   if (!city) {
//     return new Response(JSON.stringify({ error: "City is required" }), {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   const apiKey = "09db8c5c48c92c9dee1a605ee0b18f0d";

//   try {
//     // Fetch 5-day forecast
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
//     );
//     if (!response.ok) throw new Error("Failed to fetch forecast data");
//     const data = await response.json();

//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// app/api/weather/route.js

// export async function GET(request) {
//   const url = new URL(request.url);
//   const city = url.searchParams.get("city");

//   if (!city) {
//     return new Response(JSON.stringify({ error: "City is required" }), {
//       status: 400,
//       headers: { "Content-Type": "application/json" },
//     });
//   }

//   const apiKey = "09db8c5c48c92c9dee1a605ee0b18f0d"; // Replace with your OpenWeatherMap API key

//   try {
//     // Fetch current weather
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     );
//     if (!response.ok) throw new Error("Failed to fetch weather data");
//     const data = await response.json();

//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
