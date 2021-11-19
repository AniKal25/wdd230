//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=14d6f75c6393671b4385e8e50078b55b&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    
    

 }); //end of "then" fat arrow function



