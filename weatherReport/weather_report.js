function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '74a8686f4752d549234fb68dd800045e'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        const temperatureCelsius = (data.main.temp - 273.15).toFixed(2);  // Convert Kelvin to Celsius
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${temperatureCelsius} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);




function showWeatherDetailsV2(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;

    const apiKey = '74a8686f4752d549234fb68dd800045e'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        const temperatureCelsius = (data.main.temp - 273.15).toFixed(2);  // Convert Kelvin to Celsius
        weatherInfo.innerHTML = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${temperatureCelsius} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

document.getElementById('weatherFormV2').addEventListener('submit', showWeatherDetailsV2);
