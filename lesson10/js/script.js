function toggleMenu() {
    console.log(document.getElementById("bid").classList);
    document.getElementById("bid").classList.toggle("hide");
}

const apiUrl = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=14d6f75c6393671b4385e8e50078b55b&units=imperial";

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('.temperature').textContent = Math.round(jsObject.main.temp);
    //document.querySelector('.humidity').textContent = jsObject.main.humidity;
    document.querySelector('.sumright').textContent = jsObject.weather[0].main;
    document.querySelector('.humidity').textContent = Math.round(jsObject.main.humidity);
    document.querySelector('.windspeed').textContent = Math.round(jsObject.wind.speed);


});
