const apiUrl = "//api.openweathermap.org/data/2.5/weather?id=2332453&appid=14d6f75c6393671b4385e8e50078b55b&units=imperial";


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


const mydate = new Date();
const todayDayNumber = mydate.getDay();
console.log(todayDayNumber);

const myweekday = new Array(7);

myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

const apiForecastURL = "//api.openweathermap.org/data/2.5/forecast?id=2332453&appid=14d6f75c6393671b4385e8e50078b55b&units=imperial";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((forecastInfo) => {
    console.log(forecastInfo);

        let forecastDayNumber = todayDayNumber;
        console.log(forecastDayNumber);

        for (i = 0; i < forecastInfo.list.length; i++) {
            let time = forecastInfo.list[i].dt_txt;
            if (time.includes('18:00:00')) {

                forecastDayNumber += 1;

                if (forecastDayNumber === 7) {forecastDayNumber = 0;}

                let theDayName = document.createElement("h5");
                theDayName.textContent = myweekday[forecastDayNumber];
                console.log(">"+myweekday[forecastDayNumber]);

                let theTemp = document.createElement("p");
                theTemp.textContent = Math.round(forecastInfo.list[i].main.temp) + "\xB0";
                console.log(theTemp);

                let iconcode = forecastInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/wn/" + iconcode + "@2x.png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theIcon);
                theDay.appendChild(theTemp);
                

                document.getElementById("threeday").appendChild(theDay);
            }
        }
});