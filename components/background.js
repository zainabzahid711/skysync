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

  const description =
    typeof weatherDescription === "string"
      ? weatherDescription.toLowerCase()
      : "";

  const images = {
    clear: clearSky,
    clouds: cloudy,
    rain: rainy,
    snow: snowy,
  };

  const backgroundImage = images[description] || snowy.src;

  return {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
    filter: "opacity(0.5)",
  };
}
export default BackgroundStyle;
