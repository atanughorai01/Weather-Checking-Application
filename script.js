const apiKey = "669b02167a5448b50be2c8e0fb84a474"

const weatherDataEle = document.querySelector(".weather-data")
const cityNameElement = document.querySelector("#city-name")
const formEle = document.querySelector("form")
const imgIcon = document.querySelector(".icon")

formEle.addEventListener("submit",(e) => {
  e.preventDefault()
  //console.log(cityNameElement.value)
  const cityValue = cityNameElement.value

  getWeatherData(cityValue)
})

async function getWeatherData(cityValue){
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
    if(!response.ok){
      throw new Error("Network Response is not ok!")
    }
    const data = await response.json()
    console.log(data)

    const temprature = Math.floor(data.main.temp);
    const description = data.weather[0].description
    const icon = data.weather[0].icon
    const feels_like = `Feels Like: ${Math.floor(data.main.feels_like)}`;
    const humidity = `Humidity: ${data.main.humidity}`;
    const wind_speed = `Wind Speed: ${data.wind.speed}`;
    //console.log(humidity);

    // const details = [
    //   `Feels Like: ${Math.floor(data.main.feels_like)}`,
    //   `Humidity: ${data.main.humidity}%`,
    //   `Wind Speed: ${data.wind.speed} m/s`
    // ]
    
    weatherDataEle.querySelector(".temp").textContent = `${temprature}°C`;
    weatherDataEle.querySelector(".desc").textContent = `${description}`;

    imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="">`
    
    weatherDataEle.querySelector(".feels_like").textContent = `${feels_like}°C`;
    weatherDataEle.querySelector(".humidity").textContent = `${humidity}%`;
    weatherDataEle.querySelector(".wind_speed").textContent = `${wind_speed} m/s`;
   
  
  }
  catch(err){

  }

}