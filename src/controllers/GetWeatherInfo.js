async function GetWeatherInfo(location) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=a6d8f2312dbd492487d131316232505&q=${location}&days=7&aqi=yes&alerts=yes`
  const weatherApi = await fetch
  (url);
  const weatherData = await weatherApi.json();
  return weatherData;
}


export default GetWeatherInfo;