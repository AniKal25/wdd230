const data = {
    businesses: [
        {
            name: "House of Zara",
            photo: "zara.jpg",
            motto: "Beauty Lies Within Us.",
            yearFounded: 2007,
            events: [
                "February 4: Cancer Awareness Day",
                "June 8: Celebrating Women",
                "November 25-30: Black Friday Promo"
            ],
            
        },
        {
            name: "Dudu Osun",
            photo: "dudu-osun.jpg",
            motto: "Beauty is All About You.",
            yearFounded: 1995,
            events: [
                "March 18: Skin Connect Day",
                "June 8: Beauty Show",
                "November 25: Eliminating Violence Against Women"
            ],
            
        },
        {
            name: "Nike Art Gallery",
            photo: "nike-art.jpg",
            motto: "Art Is Beauty.",
            yearFounded: 1927,
            events: [
                "March 4: Art Fair And Show",
                "June 29: Art Exhibition",
                "December 9: Portrait Drawing"
            ],
            
        },
    ],
    };

const requestURL= "https://anikal25.github.io/wdd230/chamber-of-commerce/data/chamber.json"
//"C:/Users/Anita/Downloads/wdd230/chamber-of-commerce/data/chamber.json"
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking valid response and data parsing

        // store the data received into an variable
        const businesses = jsonObject["businesses"];
        businesses.reverse();
        for (let i = 0; i < businesses.length; i++) {
            if (businesses[i].name == "House of Zara" || businesses[i].name == "Dudu Osun" || businesses[i].name == "Nike Art Gallery") {
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
                document.querySelector('div.card').appendChild(card);
            }
        }
});
