let city;
let result;
function apiFetch() {
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c06bd6702dmsh527fb73dd67c1d2p1e5840jsn55b272f0df53',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    async function getData() {

        try {
            const response = await fetch(url, options);
            result = await response.json();
            console.log(result);
            showDetails();
        } catch (error) {
            document.getElementsByClassName("showcityname")[0].innerHTML = `Something went wrong...`;
        }
    }
    getData();
}
function cityName() {
    city = document.getElementById("searchInput").value;
    apiFetch();
}
function showDetails() {
    document.getElementsByClassName("showcityname")[0].innerHTML = `${city}`;
    let iconLink = result.current.condition.icon;
    document.getElementsByClassName("icon")[0].innerHTML = `<img src=${iconLink} alt="icon">`;
    let currentTemp = result.current.temp_c;
    console.log(currentTemp);
    document.getElementsByClassName("temp")[0].innerHTML = `${currentTemp}°`;
    let condition = result.current.condition.text;
    document.getElementsByClassName("currentWeather")[0].innerHTML = `${condition}`;
    let realfeel = result.current.feelslike_c;
    document.getElementsByClassName("value")[0].innerHTML = `${realfeel}°C`;
    let windspeed = result.current.wind_kph;
    document.getElementsByClassName("value")[1].innerHTML = `${windspeed}km/h`;
    let c_humidity = result.current.humidity;
    document.getElementsByClassName("value")[2].innerHTML = `${c_humidity}%`;
    let uvIndex = result.current.uv;
    document.getElementsByClassName("value")[3].innerHTML = `${uvIndex}`;
    let maxTemp = result.forecast.forecastday[0].day.maxtemp_c;
    document.getElementsByClassName("leftvalue")[0].innerHTML = `${maxTemp}°C`;
    let minTemp = result.forecast.forecastday[0].day.mintemp_c;
    document.getElementsByClassName("leftvalue")[1].innerHTML = `${minTemp}°C`;
    let sunrise = result.forecast.forecastday[0].astro.sunrise;
    document.getElementsByClassName("rightvalue")[0].innerHTML = `${sunrise}`;
    let sunset = result.forecast.forecastday[0].astro.sunset;
    document.getElementsByClassName("rightvalue")[1].innerHTML = `${sunset}`;
    let rain = result.forecast.forecastday[0].day.daily_chance_of_rain;
    document.getElementsByClassName("rightvalue")[2].innerHTML = `${rain}%`;
    let time = result.current.last_updated;
    time = time.slice(11,);
    document.getElementsByClassName("rightvalue")[3].innerHTML = `${time}`;
    for (let i = 0; i < 24; i++) {
        let hourlyicon = result.forecast.forecastday[0].hour[i].condition.icon;
        let hourlytemp = result.forecast.forecastday[0].hour[i].temp_c;
        let hourlyrain = result.forecast.forecastday[0].hour[i].chance_of_rain;
        let hourlycondition = result.forecast.forecastday[0].hour[i].condition.text;
        let hourlytime = result.forecast.forecastday[0].hour[i].time;
        hourlytime = hourlytime.slice(11,);
        document.getElementsByClassName("hourlyicon")[i].innerHTML = `<img src=${hourlyicon} alt="">`;
        document.getElementsByClassName("hourlytemp")[i].innerHTML = `Temp:${hourlytemp}°C`;
        document.getElementsByClassName("hourlyrainchance")[i].innerHTML = `Rain:${hourlyrain}%`;
        document.getElementsByClassName("hourlycondition")[i].innerHTML = `${hourlycondition}`;
        document.getElementsByClassName("hourlytime")[i].innerHTML = `${hourlytime}`;
    }
}
function hourlyData() {
    document.getElementsByClassName("hddata")[0].innerHTML = `
    <div class="hour">
            <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
              Temp:25°C
            </div>
            <div class="hourlyrainchance">
              Rain:50%
            </div>
            <div class="hourlycondition">
              Cloudy
              </div>
            <div class="hourlytime">
            00:00
            </div>
            </div>
            <div class="hour">
            <div class="hourlyicon">
            <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
            Temp:25°C
            </div>
            <div class="hourlyrainchance">
            Rain:50%
            </div>
            <div class="hourlycondition">
            Cloudy
            </div>
            <div class="hourlytime">
            00:00
            </div>
            </div>
            <div class="hour">
            <div class="hourlyicon">
            <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
            Temp:25°C
            </div>
            <div class="hourlyrainchance">
            Rain:50%
            </div>
            <div class="hourlycondition">
            Cloudy
            </div>
            <div class="hourlytime">
            00:00
            </div>
            </div>
            <div class="hour">
            <div class="hourlyicon">
            <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
              Temp:25°C
            </div>
            <div class="hourlyrainchance">
            Rain:50%
            </div>
            <div class="hourlycondition">
            Cloudy
            </div>
            <div class="hourlytime">
            00:00
            </div>
            </div>
            <div class="hour">
            <div class="hourlyicon">
            <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
            Temp:25°C
            </div>
            <div class="hourlyrainchance">
            Rain:50%
            </div>
            <div class="hourlycondition">
            Cloudy
            </div>
            <div class="hourlytime">
              00:00
            </div>
            </div>
          <div class="hour">
          <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
              Temp:25°C
            </div>
            <div class="hourlyrainchance">
              Rain:50%
            </div>
            <div class="hourlycondition">
              Cloudy
            </div>
            <div class="hourlytime">
            00:00
            </div>
          </div>
          <div class="hour">
            <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
            <div class="hourlytemp">
              Temp:25°C
            </div>
            <div class="hourlyrainchance">
            Rain:50%
            </div>
            <div class="hourlycondition">
            Cloudy
            </div>
            <div class="hourlytime">
            00:00
            </div>
            </div>
            <div class="hour">
            <div class="hourlyicon">
            <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
              Temp:25°C
            </div>
            <div class="hourlyrainchance">
            Rain:50%
            </div>
            <div class="hourlycondition">
            Cloudy
            </div>
            <div class="hourlytime">
            00:00
            </div>
          </div>
          <div class="hour">
            <div class="hourlyicon">
            <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
            Temp:25°C
            </div>
            <div class="hourlyrainchance">
              Rain:50%
            </div>
            <div class="hourlycondition">
              Cloudy
            </div>
            <div class="hourlytime">
              00:00
            </div>
          </div>
          <div class="hour">
            <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
              Temp:25°C
            </div>
            <div class="hourlyrainchance">
              Rain:50%
            </div>
            <div class="hourlycondition">
              Cloudy
            </div>
            <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
            <div class="hourlytime">
            00:00
            </div>
          </div>
          <div class="hour">
            <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
              <div class="hour">
              <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
              </div>
              <div class="hourlytemp">
              Temp:25°C
              </div>
              <div class="hourlyrainchance">
              Rain:50%
              </div>
              <div class="hourlycondition">
              Cloudy
              </div>
              <div class="hourlytime">
              00:00
              </div>
              </div>
          <div class="hour">
          <div class="hourlyicon">
          <img src="assets/143.webp" alt="">
          </div>
          <div class="hourlytemp">
          Temp:25°C
          </div>
          <div class="hourlyrainchance">
          Rain:50%
          </div>
          <div class="hourlycondition">
          Cloudy
          </div>
          <div class="hourlytime">
          00:00
          </div>
          </div>
          <div class="hour">
          <div class="hourlyicon">
          <img src="assets/143.webp" alt="">
          </div>
          <div class="hourlytemp">
          Temp:25°C
          </div>
          <div class="hourlyrainchance">
          Rain:50%
          </div>
          <div class="hourlycondition">
          Cloudy
          </div>
          <div class="hourlytime">
          00:00
          </div>
          </div>
          <div class="hour">
            <div class="hourlyicon">
              <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
              Temp:25°C
            </div>
            <div class="hourlyrainchance">
              Rain:50%
            </div>
            <div class="hourlycondition">
            Cloudy
            </div>
            <div class="hourlytime">
            00:00
            </div>
            </div>
            <div class="hour">
            <div class="hourlyicon">
            <img src="assets/143.webp" alt="">
            </div>
            <div class="hourlytemp">
              Temp:25°C
            </div>
            <div class="hourlyrainchance">
              Rain:50%
            </div>
            <div class="hourlycondition">
            Cloudy
            </div>
            <div class="hourlytime">
            00:00
            </div>
            </div>
            </div>`;
    for (let i = 0; i < 24; i++) {
        let hourlyicon = result.forecast.forecastday[0].hour[i].condition.icon;
        let hourlytemp = result.forecast.forecastday[0].hour[i].temp_c;
        let hourlyrain = result.forecast.forecastday[0].hour[i].chance_of_rain;
        let hourlycondition = result.forecast.forecastday[0].hour[i].condition.text;
        let hourlytime = result.forecast.forecastday[0].hour[i].time;
        hourlytime = hourlytime.slice(11,);
        document.getElementsByClassName("hourlyicon")[i].innerHTML = `<img src=${hourlyicon} alt="">`;
        document.getElementsByClassName("hourlytemp")[i].innerHTML = `Temp:${hourlytemp}°C`;
        document.getElementsByClassName("hourlyrainchance")[i].innerHTML = `Rain:${hourlyrain}%`;
        document.getElementsByClassName("hourlycondition")[i].innerHTML = `${hourlycondition}`;
        document.getElementsByClassName("hourlytime")[i].innerHTML = `${hourlytime}`;
    }
}
function dailyData() {
    document.getElementsByClassName("hddata")[0].innerHTML = `
            <div class="date">
            <div class="tomorrow">Tomorrow</div>
            <div class="datomorrow">Day After Tomorrow</div>
            </div>
            <div class="dailydetails">
            <div class="dailyDetailsName">
            <div class="dailyMaxTemp dailyText">Max Temperature</div>
            <div class="dailyMinTemp dailyText">Min Temperature</div>
            <div class="dailyAvgTemp dailyText">Avg. Temperature</div>
              <div class="dailyAvgHumidity dailyText">Avg. Humidity</div>
              <div class="dailyRainChance dailyText">Chance of Rain</div>
            </div>
            <div class="tomorrowDetails">
              <div class="dailyValue">38°C</div>
              <div class="dailyValue">24°C</div>
              <div class="dailyValue">31°C</div>
              <div class="dailyValue">72%</div>
              <div class="dailyValue">65%</div>
            </div>
            <div class="datomorrowDetails">
              <div class="dailyValue">38°C</div>
              <div class="dailyValue">24°C</div>
              <div class="dailyValue">31°C</div>
              <div class="dailyValue">72%</div>
              <div class="dailyValue">65%</div>
            </div>
          </div>
          `;
    let tomMaxTemp = result.forecast.forecastday[1].day.maxtemp_c;
    document.getElementsByClassName("dailyValue")[0].innerHTML = `${tomMaxTemp}°C`;
    let tomMinTemp = result.forecast.forecastday[1].day.mintemp_c;
    document.getElementsByClassName("dailyValue")[1].innerHTML = `${tomMinTemp}°C`;
    let tomAvgTemp = result.forecast.forecastday[1].day.avgtemp_c;
    document.getElementsByClassName("dailyValue")[2].innerHTML = `${tomAvgTemp}°C`;
    let tomAvgHumidity = result.forecast.forecastday[1].day.avghumidity;
    document.getElementsByClassName("dailyValue")[3].innerHTML = `${tomAvgHumidity}%`;
    let tomRain = result.forecast.forecastday[1].day.daily_chance_of_rain;
    document.getElementsByClassName("dailyValue")[4].innerHTML = `${tomRain}%`;
    let datomMaxTemp = result.forecast.forecastday[2].day.maxtemp_c;
    document.getElementsByClassName("dailyValue")[5].innerHTML = `${datomMaxTemp}°C`;
    let datomMinTemp = result.forecast.forecastday[2].day.mintemp_c;
    document.getElementsByClassName("dailyValue")[6].innerHTML = `${datomMinTemp}°C`;
    let datomAvgTemp = result.forecast.forecastday[2].day.avgtemp_c;
    document.getElementsByClassName("dailyValue")[7].innerHTML = `${datomAvgTemp}°C`;
    let datomAvgHumidity = result.forecast.forecastday[2].day.avghumidity;
    document.getElementsByClassName("dailyValue")[8].innerHTML = `${datomAvgHumidity}%`;
    let datomRain = result.forecast.forecastday[2].day.daily_chance_of_rain;
    document.getElementsByClassName("dailyValue")[9].innerHTML = `${datomRain}%`;
}