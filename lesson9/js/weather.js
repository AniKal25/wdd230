function toggleMenu() {
   console.log(document.getElementById("bid").classList);
   document.getElementById("bid").classList.toggle("hide");
}

const date = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

document.getElementById('currentdate');
currentdate.textContent = date.toLocaleDateString('en-GB', options);

document.getElementById('theYear');
theYear.textContent = date.getFullYear();



const data = {
   towns: [

      {
         name: "Preston",
         photo:"images/preston.jpg",
         motto: "Home of Napoleon Dynamite.",
         yearFounded: 1866,
         currentPopulation: 5204,
         averageRainfall: 16.65,
         events: [
            "March 29: Work Creek Revival",
            "July 8-12: Napoleon Dynamite Festival",
            "November 2-4: Freedom Days",
          ],
       },


     {
       name: "Soda Springs",
       photo:"images/sodasprings.jpg",
       motto: "Historic Oregon Trail Oasis. The Soda is on Us.",
       yearFounded: 1858,
       currentPopulation: 2985,
       averageRainfall: 15.75,
       events: [
         "February 29: Geyser Song Day",
         "May 1-6: Days of May Celebration",
         "October 15-16: Octoberfest",
       ],
     },

    {
      name: "Fish Haven",
      photo:"images/fishhaven.jpg",
      motto: "This is Fish Heaven.",
      yearFounded: 1864,
      currentPopulation: 501,
      averageRainfall: 14.2,
      events: [
         "April 1: How Big Was That Fish Day",
         "May 15-30: Rush the Creek Days",
         "July 24: Bear Lake Blunder Run",
         "December 12: Light the Tree",
       ],
    },
   ],
   };



const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
   towns.sort((a,b) => (a.averageRainfall > b.averageRainfall) ? 1 : ((b.averageRainfall > a.averageRainfall) ? -1 : 0));
   towns.reverse();
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h4');
      let image = document.createElement('img');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');
      let details = document.createElement('div');
      name.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
      averageRainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';
      yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      image.setAttribute('src', 'images/' + towns[i].photo);
      image.setAttribute('alt', towns[i].name);
      details.setAttribute('id', 'details');
      card.appendChild(details);
      card.appendChild(image);
      details.appendChild(name);
      details.appendChild(motto);
      details.appendChild(yearFounded);
      details.appendChild(currentPopulation);
      details.appendChild(averageRainfall);
      document.querySelector('div.cards').appendChild(card);
      }
   }
});
