const apiKey = 'bc8a1627156835b75f4863cbf7ccbdd0';

const getWeather = async (city) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
  .then((res) => res.json() )
  .then((json) =>{
    
    return json
  })
}


export default getWeather;