//import style css
import './style/style.css';

//import pages

//import controller
import GetWeatherInfo from './controllers/GetWeatherInfo';

async function testAsync() {
  const weatherInfo = await GetWeatherInfo()
  console.log(weatherInfo)
}
testAsync()