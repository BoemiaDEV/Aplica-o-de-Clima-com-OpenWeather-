// 04c82481420beda92f20d94e4208606f
// variaveis
const apikey = "04c82481420beda92f20d94e4208606f"

const apiCountryUrl = "https://flagsapi.com/BR/flat/64.png"

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

//funcções
const showWeatherData = (city) => {
    console.log(city)
}




//eventos

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const city = cityInput.value;
    showWeatherData(city);
})
