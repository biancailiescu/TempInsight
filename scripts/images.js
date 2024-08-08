const unsplashAccessKey = "Xbem5e3BTppOc33rUM30-0nwUwlehZJMFPk-2qM6iEs";
const apiUrl =
  "https://api.unsplash.com/search/photos?orientation=landscape&query=${cityName}";

const weatherCard = document.querySelector(".weatherCard");
function fetchWeatherImage(cityName) {
  fetch(apiUrl + cityName, {
    headers: {
      Authorization: `Client-ID ${unsplashAccessKey}`,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(cityName);

      const backgroundImageUrl = data.results[0].urls.raw;
      document
        .querySelector(".weatherCard")
        .style.setProperty(
          "--background-image",
          `url('${backgroundImageUrl}')`
        );
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
