// const clearSky = "/assets/clearSky.jpg";
// const cloudy = "/assets/cloudySky.jpg";
// const snowyy = "/assets/snowyWeather.jpg";
// const raining = "/assets/rainingSky.jpg";

// function BackgroundStyle(weather) {
//   if (!weather || !weather.weather || !weather.weather[0])
//     return { backgroundColor: "transparent" };

//   const mainWeather = weather.weather[0].main.toLowerCase();
//   console.log("Main Weather:", mainWeather);
//   console.log("Applying raining background");
//

// switch (mainWeather) {
//   case "clear":
//     console.log("Applying clear sky background"); // Debugging line
//     return {
//       backgroundImage: `url(${clearSky.src})`,
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       minHeight: "100vh",
//       width: "100%",
//       maxWidth: "100%",
//     };
//   case "clouds":
//     console.log("Applying cloudy background"); // Debugging line
//     return {
//       backgroundImage: `url(${cloudy.src})`,
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       minHeight: "100vh",
//       width: "100%",
//     };
//   case "rain":
//     console.log("Applying raining background"); // Debugging line
//     return {
//       backgroundImage: `url(${raining.src})`,
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       minHeight: "100vh",
//       width: "100%",
//     };
//   case "snow":
//     console.log("Applying snowy background");
//     return {
//       backgroundImage: `url(${snowyy.src})`,
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       minHeight: "100vh",
//       width: "100%",
//     };
//   default:
//     console.log("Applying default background"); // Debugging line
//     return { backgroundColor: "#333", minHeight: "100vh" };
// }
// }

// export default BackgroundStyle;
import clearSky from "../public/assets/clearSky.jpg";
import cloudy from "../public/assets/cloudySky.jpg";
import rainy from "../public/assets/rainingSky.jpg";
import snowy from "../public/assets/snowyWeather.jpg";
function BackgroundStyle(weatherDescription) {
  console.log("Weather Description:", weatherDescription);

  // Ensure weatherDescription is a string and handle invalid types
  const description =
    typeof weatherDescription === "string"
      ? weatherDescription.toLowerCase()
      : "";

  // Define your images mapping
  const images = {
    clear: clearSky,
    clouds: cloudy,
    rain: rainy,
    snow: snowy,
  };

  // Get the appropriate background image or use a default
  const backgroundImage = images[description] || clearSky.src;

  console.log("Selected Background Image:", backgroundImage);

  // Return style object
  return {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    opacity: ".5",
  };
}
export default BackgroundStyle;
