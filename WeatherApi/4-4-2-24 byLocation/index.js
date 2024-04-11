

const showWeatherData = (data) => {
    let disPlayDiv = `
    <div class="weather-card">
        <div class="weather">
            <img class="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="...">
            <h1 class="temp">${Math.round(data.main.temp)}°C</h1>
            <h2 class="city">${data.name}</h2>
            <div class="details">
                <div style="display: flex;" class="col">
                    <img class="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png">
                    <div class="info">
                        <p class="humidity">${data.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png">
                    <div class="info">
                        <p class="wind">${data.wind.speed} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
           
            
        </div>
    </div>`;
    document.getElementById('box').innerHTML = disPlayDiv;

};

const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        getWeatherData(lat, lon);
    });
};
// handleLocation();
const getWeatherData = async (lat, lon) => {
   
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8cad9935800e8b71f613e6dfa1d5acdb&units=metric`);
        let data = await response.json();
        showWeatherData(data);
   
};
