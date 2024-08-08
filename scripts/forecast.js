const apiKey = "71638a8db45ce4b607a0a3cc2858efc5";
const apiURL =
  "http://api.openweathermap.org/data/2.5/forecast?&units=metric&q=";

const searchBox = document.querySelector(".container input");
const searchBtn = document.querySelector(".container button");
const weatherIcon1 = document.querySelector(".icon1");
const weatherIcon2 = document.querySelector(".icon2");
const weatherIcon3 = document.querySelector(".icon3");
const weatherIcon4 = document.querySelector(".icon4");
const weatherIcon5 = document.querySelector(".icon5");
const loader = document.querySelector(".loader");
searchBtn.addEventListener("click", function () {
  loader.classList.add("loading");

  setTimeout(function () {
    loader.classList.remove("loading");
  }, 400);
});
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weatherCard").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.city.name;
    cityName = data.city.name;
    console.log(cityName);

    fetchWeatherImage(cityName);

    document.querySelector(".temp").innerHTML =
      Math.round(data.list[0].main.temp) + "°C";
    document.querySelector(".tempM").innerHTML =
      "Feels like: " + Math.round(data.list[0].main.feels_like) + "°C";
    document.querySelector(".humidity").innerHTML =
      data.list[0].main.humidity + " %";
    document.querySelector(".wind").innerHTML =
      data.list[0].wind.speed + " km/h";
    document.querySelector(".pressure").innerHTML =
      data.list[0].main.pressure + " hPa";
    document.querySelector(".weatherCard").style.display = "flex";
    document.querySelector(".error").style.display = "none";
    var currentDate = new Date();
    var dayOfWeek = currentDate.getDay();
    var daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    document.querySelector(".day1").innerHTML = daysOfWeek[dayOfWeek + 1];
    document.querySelector(".day2").innerHTML = daysOfWeek[dayOfWeek + 2];
    document.querySelector(".day3").innerHTML = daysOfWeek[dayOfWeek + 3];
    document.querySelector(".day4").innerHTML = daysOfWeek[dayOfWeek + 4];
    document.querySelector(".day5").innerHTML = daysOfWeek[dayOfWeek + 5];

    document.querySelector(".futureTemp1").innerHTML =
      Math.round(data.list[8].main.temp) + "°C";
    document.querySelector(".futureTemp2").innerHTML =
      Math.round(data.list[16].main.temp) + "°C";
    document.querySelector(".futureTemp3").innerHTML =
      Math.round(data.list[24].main.temp) + "°C";
    document.querySelector(".futureTemp4").innerHTML =
      Math.round(data.list[32].main.temp) + "°C";
    document.querySelector(".futureTemp5").innerHTML =
      Math.round(data.list[39].main.temp) + "°C";

    if (data.list[8].weather[0].main == "Clear") {
      weatherIcon1.src = "assets/photos/clear.png";
    } else if (data.list[8].weather[0].main == "Clouds") {
      weatherIcon1.src = "assets/photos/clouds.png";
    } else if (data.list[8].weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/photos/drizzle.png";
    } else if (data.list[8].weather[0].main == "Mist") {
      weatherIcon1.src = "assets/photos/mist.png";
    } else if (data.list[8].weather[0].main == "Rain") {
      weatherIcon1.src = "assets/photos/rain.png";
    } else if (data.list[8].weather[0].main == "Snow") {
      weatherIcon1.src = "assets/photos/snow.png";
    }

    if (data.list[16].weather[0].main == "Clear") {
      weatherIcon2.src = "assets/photos/clear.png";
    } else if (data.list[16].weather[0].main == "Clouds") {
      weatherIcon2.src = "assets/photos/clouds.png";
    } else if (data.list[16].weather[0].main == "Drizzle") {
      weatherIcon2.src = "assets/photos/drizzle.png";
    } else if (data.list[16].weather[0].main == "Mist") {
      weatherIcon2.src = "assets/photos/mist.png";
    } else if (data.list[16].weather[0].main == "Rain") {
      weatherIcon2.src = "assets/photos/rain.png";
    } else if (data.list[16].weather[0].main == "Snow") {
      weatherIcon2.src = "assets/photos/snow.png";
    }

    if (data.list[24].weather[0].main == "Clear") {
      weatherIcon3.src = "assets/photos/clear.png";
    } else if (data.list[24].weather[0].main == "Clouds") {
      weatherIcon3.src = "assets/photos/clouds.png";
    } else if (data.list[24].weather[0].main == "Drizzle") {
      weatherIcon3.src = "assets/photos/drizzle.png";
    } else if (data.list[24].weather[0].main == "Mist") {
      weatherIcon3.src = "assets/photos/mist.png";
    } else if (data.list[24].weather[0].main == "Rain") {
      weatherIcon3.src = "assets/photos/rain.png";
    } else if (data.list[24].weather[0].main == "Snow") {
      weatherIcon3.src = "assets/photos/snow.png";
    }

    if (data.list[32].weather[0].main == "Clear") {
      weatherIcon4.src = "assets/photos/clear.png";
    } else if (data.list[32].weather[0].main == "Clouds") {
      weatherIcon4.src = "assets/photos/clouds.png";
    } else if (data.list[32].weather[0].main == "Drizzle") {
      weatherIcon4.src = "assets/photos/drizzle.png";
    } else if (data.list[32].weather[0].main == "Mist") {
      weatherIcon4.src = "assets/photos/mist.png";
    } else if (data.list[32].weather[0].main == "Rain") {
      weatherIcon4.src = "assets/photos/rain.png";
    } else if (data.list[32].weather[0].main == "Snow") {
      weatherIcon4.src = "assets/photos/snow.png";
    }

    if (data.list[39].weather[0].main == "Clear") {
      weatherIcon5.src = "assets/photos/clear.png";
    } else if (data.list[39].weather[0].main == "Clouds") {
      weatherIcon5.src = "assets/photos/clouds.png";
    } else if (data.list[39].weather[0].main == "Drizzle") {
      weatherIcon5.src = "assets/photos/drizzle.png";
    } else if (data.list[39].weather[0].main == "Mist") {
      weatherIcon5.src = "assets/photos/mist.png";
    } else if (data.list[39].weather[0].main == "Rain") {
      weatherIcon5.src = "assets/photos/rain.png";
    } else if (data.list[39].weather[0].main == "Snow") {
      weatherIcon5.src = "assets/photos/snow.png";
    }
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

const spinner = document.getElementById("spinner");
