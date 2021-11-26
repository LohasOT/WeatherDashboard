let history = JSON.parse(localStorage.getItem('storedHistory')) || []
console.log(history)
for (let i = 0; i < history.length; i++) {
  let historyBox = document.getElementById('history')
  let cityButton = document.createElement('button')
  cityButton.innerText = history[i]
  historyBox.appendChild(cityButton)
}

document.getElementById('history').addEventListener('click', event => {
  const cityName = event.target.innerText
  let foundInArray = false
  for (let i = 0; i< history.length; i++) {
    if (history[i] === cityName) {
      foundInArray = true
    }
  }
  if (!foundInArray) {
    history.push(cityName)
  }

  localStorage.setItem('storedHistory', JSON.stringify(history))

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
    .then(res => {
      const weather = res.data

      console.log(res.data)

      const latitude = weather.city.coord.lat
      const longtitude = weather.city.coord.lon

      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&units=imperial&appid=d91f911bcf2c0f925fb6535547a5ddc9`)

        .then(resp => {
          let today = resp.data
          const uvi = resp.data.current.uvi
          const city = weather.city.name

          let current = {
            temp: today.current.temp,
            humid: today.current.humidity,
            wind: today.current.wind_speed,
            icon: today.current.weather[0].icon,
            uvi: uvi
          }

          let day1 = {
            date: weather.list[0].dt_txt,
            temp: weather.list[0].main.temp,
            humid: weather.list[0].main.humidity,
            wind: weather.list[0].wind.speed,
            icon: weather.list[0].weather[0].icon
          }

          let day2 = {
            date: weather.list[8].dt_txt,
            temp: weather.list[8].main.temp,
            humid: weather.list[8].main.humidity,
            wind: weather.list[8].wind.speed,
            icon: weather.list[8].weather[0].icon
          }
          let day3 = {
            date: weather.list[16].dt_txt,
            temp: weather.list[16].main.temp,
            humid: weather.list[16].main.humidity,
            wind: weather.list[16].wind.speed,
            icon: weather.list[16].weather[0].icon
          }
          let day4 = {
            date: weather.list[24].dt_txt,
            temp: weather.list[24].main.temp,
            humid: weather.list[24].main.humidity,
            wind: weather.list[24].wind.speed,
            icon: weather.list[24].weather[0].icon
          }
          let day5 = {
            date: weather.list[32].dt_txt,
            temp: weather.list[32].main.temp,
            humid: weather.list[32].main.humidity,
            wind: weather.list[32].wind.speed,
            icon: weather.list[32].weather[0].icon
          }
          console.log(resp.data)
          document.getElementById('today').innerHTML = ''
          const currentElem = document.createElement('div')
          currentElem.innerHTML = `
          <div class= "currentday">
            <h3>Current</h3>
            <h3>City: ${city} <img src="http://openweathermap.org/img/w/${current.icon}.png" alt="icon"></h3>
            <h3>Temperature: ${current.temp}</h3>
            <h3>Humidity: ${current.humid}</h3>
            <h3>Wind: ${current.wind}</h3>
            <h3>UVI: ${uvi}</h3>
          </div>
        `
          document.getElementById('today').append(currentElem)

          let forecasts = [day1, day2, day3, day4, day5]

          document.getElementById('forecast').innerHTML = ''
          forecasts.forEach(day => {

            document.getElementById('forecast').innerHTML += `
            
              <div class="card" style="width: 15rem";>
                  <img src="http://openweathermap.org/img/w/${day.icon}.png" class="card-img-top" alt="icon">
                  <div class="card-body">
                  <h5 class="card-title">${day.date}</h5>
                  <p class="card-text">            
                  <h3>temp: ${day.temp}</h3>
                  <h3>humid: ${day.humid}<h3>
                  <h3>wind: ${day.wind}</h3></p>
              </div>
            </div>
        `
          })
        })

    })
})


document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()

  const cityName = document.getElementById('searchCity').value

  let foundInArray = false
  for (let i = 0; i < history.length; i++) {
    if (history[i] === cityName) {
      foundInArray = true
    }
  }
  if (!foundInArray) {
    history.push(cityName)
  }

  localStorage.setItem('storedHistory', JSON.stringify(history))

  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=imperial&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
    .then(res => {
      const weather = res.data

      console.log(res.data)

      const latitude = weather.city.coord.lat
      const longtitude = weather.city.coord.lon

      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&units=imperial&appid=d91f911bcf2c0f925fb6535547a5ddc9`)

        .then(resp => {
          let today = resp.data
          const uvi = resp.data.current.uvi
          const city = weather.city.name

          let current = {
            temp: today.current.temp,
            humid: today.current.humidity,
            wind: today.current.wind_speed,
            icon: today.current.weather[0].icon,
            uvi: uvi
          }

          let day1 = {
            date: weather.list[0].dt_txt,
            temp: weather.list[0].main.temp,
            humid: weather.list[0].main.humidity,
            wind: weather.list[0].wind.speed,
            icon: weather.list[0].weather[0].icon
          }

          let day2 = {
            date: weather.list[8].dt_txt,
            temp: weather.list[8].main.temp,
            humid: weather.list[8].main.humidity,
            wind: weather.list[8].wind.speed,
            icon: weather.list[8].weather[0].icon
          }
          let day3 = {
            date: weather.list[16].dt_txt,
            temp: weather.list[16].main.temp,
            humid: weather.list[16].main.humidity,
            wind: weather.list[16].wind.speed,
            icon: weather.list[16].weather[0].icon
          }
          let day4 = {
            date: weather.list[24].dt_txt,
            temp: weather.list[24].main.temp,
            humid: weather.list[24].main.humidity,
            wind: weather.list[24].wind.speed,
            icon: weather.list[24].weather[0].icon
          }
          let day5 = {
            date: weather.list[32].dt_txt,
            temp: weather.list[32].main.temp,
            humid: weather.list[32].main.humidity,
            wind: weather.list[32].wind.speed,
            icon: weather.list[32].weather[0].icon
          }
          console.log(resp.data)
          document.getElementById('today').innerHTML = ''
          const currentElem = document.createElement('div')
          currentElem.innerHTML = `
          <div class= "currentday">
            <h3>Current</h3>
            <h3>City: ${city} <img src="http://openweathermap.org/img/w/${current.icon}.png" alt="icon"></h3>
            <h3>Temperature: ${current.temp}</h3>
            <h3>Humidity: ${current.humid}</h3>
            <h3>Wind: ${current.wind}</h3>
            <h3>UVI: ${uvi}</h3>
          </div>
        `
          document.getElementById('today').append(currentElem)

          let forecasts = [day1, day2, day3, day4, day5]

          document.getElementById('forecast').innerHTML = ''
          forecasts.forEach(day => {

            document.getElementById('forecast').innerHTML += `
            
              <div class="card" style="width: 15rem";>
                  <img src="http://openweathermap.org/img/w/${day.icon}.png" class="card-img-top" alt="icon">
                  <div class="card-body">
                  <h5 class="card-title">${day.date}</h5>
                  <p class="card-text">            
                  <h3>temp: ${day.temp}</h3>
                  <h3>humid: ${day.humid}<h3>
                  <h3>wind: ${day.wind}</h3></p>
              </div>
            </div>
        `
          })
        })

    })
})
