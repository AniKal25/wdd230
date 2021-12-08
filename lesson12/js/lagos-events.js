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
        console.log(businesses);

        for (let i = 0; i < businesses.length; i++) {

            if (businesses[i].name == "House of Zara") {
                let businessEvents = document.createElement("ul");

                businesses[i].events.forEach(event => {
                    let businessEvent = document.createElement("li");
                    businessEvent.textContent = event;

                    businessEvents.appendChild(businessEvent);
                });

                document.querySelector("div.events").appendChild(businessEvents);
            }
            
        }
    })