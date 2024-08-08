document.addEventListener("DOMContentLoaded", function () {
  const addToFavoritesBtn = document.getElementById("addToFavorites");
  const currentCityElement = document.querySelector(".city");
  const favoriteCitiesList = document.getElementById("favoriteCities");
  const cityInput = document.getElementById("cityInput");

  const storedFavorites =
    JSON.parse(localStorage.getItem("favoriteCities")) || [];

  function updateFavoritesList() {
    favoriteCitiesList.innerHTML = "";
    if (storedFavorites.length > 5) {
      storedFavorites.shift();
    }
    storedFavorites.forEach((city) => {
      const listItem = document.createElement("li");
      listItem.textContent = city;
      listItem.addEventListener("click", function () {
        cityInput.value = city;
        searchWeather(city);
      });

      favoriteCitiesList.appendChild(listItem);
    });
  }

  addToFavoritesBtn.addEventListener("click", function () {
    const currentCity = currentCityElement.textContent;

    if (!storedFavorites.includes(currentCity)) {
      storedFavorites.push(currentCity);
      localStorage.setItem("favoriteCities", JSON.stringify(storedFavorites));
      updateFavoritesList();
    }
  });

  updateFavoritesList();

  function searchWeather(city) {
    checkWeather(city);
  }
});
