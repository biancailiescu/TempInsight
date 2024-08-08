const cityInput = document.getElementById("cityInput");
const cityResults = document.getElementById("cityResults");
let cityName = "";

cityInput.addEventListener("input", debounce(handleInput, 300));

function handleInput() {
  const inputValue = cityInput.value.trim();

  if (inputValue.length >= 2) {
    fetchCitySuggestions(inputValue)
      .then(displayCitySuggestions)
      .catch((error) =>
        console.error("Error fetching city suggestions", error)
      );
  } else {
    clearCityResults();
  }
}

function fetchCitySuggestions(query) {
  const apiKey = "936071b338bf4d27a57e814611391556";
  const apiUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
    query
  )}&apiKey=${apiKey}`;

  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error fetching city suggestions", error);
      throw error;
    });
}

function displayCitySuggestions(data) {
  clearCityResults();

  data.features.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = city.properties.formatted;
    li.addEventListener("click", () => {
      cityInput.value = city.properties.formatted;
      clearCityResults();
    });
    cityResults.appendChild(li);
  });

  cityResults.style.display = "block";
}

function clearCityResults() {
  cityResults.innerHTML = "";
  cityResults.style.display = "none";
}

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
