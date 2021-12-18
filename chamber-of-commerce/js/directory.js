const requestURL= "https://anikal25.github.io/wdd230/chamber-of-commerce/data/chamber.json"


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const directory = jsonObject['directory'];
    directory.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('h4');
        let image = document.createElement('img');
        let yearFounded = document.createElement('p');
        let details = document.createElement('div');
        name.textContent = businesses[i].name;
        motto.textContent = businesses[i].motto;
        yearFounded.textContent = 'Year Founded: ' + businesses[i].yearFounded;
        image.setAttribute('src', 'images/' + businesses[i].photo);
        image.setAttribute('alt', businesses[i].name);
        details.setAttribute('id', 'details');
        card.appendChild(details);
        card.appendChild(image);
        details.appendChild(name);
        details.appendChild(motto);
        details.appendChild(yearFounded);
        
      document.querySelector('.directory').appendChild(card);
    });
});