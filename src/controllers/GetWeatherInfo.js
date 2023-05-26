async function GetWeatherInfo() {
  const weatherApi = await fetch
  ('https://api.weatherapi.com/v1/forecast.json?key=a6d8f2312dbd492487d131316232505&q=Hong Kong&days=7&aqi=yes&alerts=yes');
  const weatherData = await weatherApi.json();
  return weatherData;
}


export default GetWeatherInfo;