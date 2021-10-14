function toggleMenu() {
    console.log(document.getElementById("bid").classList);
    document.getElementById("bid").classList.toggle("hide");
}

let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June",
             "July", "August", "September", "October", "November", "December"];

let date = newDate();
let dayName = dayNames[date.getDay()];
let monthName = months[date.getMonth()];
let fullDate = dayName + "," + date.getDay() + " "  + monthName + " " + date.getFullYear();
document.getElementById("cd").textContent = fullDate;






//let myDate = new Date();
//let myYear = myDate.getFullYear();
//document.getElementById("theYear").textContent = myYear;


//document.getElementById("lu").textContent = "Last Updated: " + document.lastModified;

//let today = new Date();
//let str = today.toGMTString();

//document.getElementById("lu").textContent = str;

