enum weathercondition {
  Sunny = "Sunny",
  Rainy = "Rainy",
  Cloudy = "Cloudy",
  Snowy = "Snowy",
  Windy = "Windy",
  Stormy = "Stormy",
  Foggy = "Foggy",
}

const currentWeather: weathercondition = weathercondition.Sunny;

console.log(`The current weather is: ${currentWeather}`);   
