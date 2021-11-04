const millisecondsToDays = 86400000;

let lastVisit = localStorage.getItem("lastvisit");

console.log(lastVisit);

console.log(Date.now())

let todaysVisit = Math.floor(Date.now() / millisecondsToDays);

let daysFromVisit = todaysVisit - lastVisit;

localStorage.setItem("lastvisit", todaysVisit);

console.log(todaysVisit);

if (lastVisit != null) {

    document.getElementById("visit").textContent = daysFromVisit;
} else {
    document.getElementById("visit").textContent = 0;
}
