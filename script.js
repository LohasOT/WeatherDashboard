// var weatherApiRootUrl = 'https://api.openweathermap.org';
// var weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';

// const cityName = document.getElementById('searchCity').value
let cityName = "Irvine"

axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
  .then(res => {
    const weather = res.data

    console.log(res.data)

    const latitude = weather.city.coord.lat
    const longtitude = weather.city.coord.lon

    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
      .then(resp => {

        const uvi = resp.data.current.uvi
        const city = weather.city.name

        let current = {
          date: weather.list[0].dt_txt,
          temp: weather.list[0].main.temp,
          humid: weather.list[0].main.humidity,
          wind: weather.list[0].wind.speed,
          icon: weather.list[0].weather[0].icon,
          uvi: uvi
        }

        let day1 = {
          date: weather.list[8].dt_txt,
          temp: weather.list[8].main.temp,
          humid: weather.list[8].main.humidity,
          wind: weather.list[8].wind.speed,
          icon: weather.list[8].weather[0].icon
        }

        let day2 = {
          date: weather.list[16].dt_txt,
          temp: weather.list[16].main.temp,
          humid: weather.list[16].main.humidity,
          wind: weather.list[16].wind.speed,
          icon: weather.list[16].weather[0].icon
        }
        let day3 = {
          date: weather.list[24].dt_txt,
          temp: weather.list[24].main.temp,
          humid: weather.list[24].main.humidity,
          wind: weather.list[24].wind.speed,
          icon: weather.list[24].weather[0].icon
        }
        let day4 = {
          date: weather.list[32].dt_txt,
          temp: weather.list[32].main.temp,
          humid: weather.list[32].main.humidity,
          wind: weather.list[32].wind.speed,
          icon: weather.list[32].weather[0].icon
        }
        let day5 = {
          date: weather.list[39].dt_txt,
          temp: weather.list[39].main.temp,
          humid: weather.list[39].main.humidity,
          wind: weather.list[39].wind.speed,
          icon: weather.list[39].weather[0].icon
        }
        console.log(resp.data)

        const currentElem = document.createElement('div')
        currentElem.innerHTML = `

        City: ${city} Date:${current.date} Temperature: ${current.temp} Humidity: ${current.humid} Wind: ${current.wind} ${current.icon} UVI: ${uvi}

        `
        document.getElementById('today').append(currentElem)
        
      })
  })



  // document.getElementById('search').addEventListener('click', event => {
  //   event.preventDefault()