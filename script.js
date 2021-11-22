// var weatherApiRootUrl = 'https://api.openweathermap.org';
// var weatherApiKey = 'd91f911bcf2c0f925fb6535547a5ddc9';

axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Irvine&appid=d91f911bcf2c0f925fb6535547a5ddc9`)
    .then(res => {

      const weather = res.data
      console.log(res.data)

      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat={33.6695}&lon={-117.8231}&appid=d91f911bcf2c0f925fb6535547a5ddc9`)

    })


  
  // document.getElementById('search').addEventListener('click', event => {
  //   event.preventDefault()