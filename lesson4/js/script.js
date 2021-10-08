function toggleMenu() {
    console.log(document.getElementById("bid").classList);
    document.getElementById("bid").classList.toggle("hide");
}








//let myDate = new Date();
//let myYear = myDate.getFullYear();
//document.getElementById("theYear").textContent = myYear;


//document.getElementById("lu").textContent = "Last Updated: " + document.lastModified;

let today = new Date();
let str = today.toGMTString();

document.getElementById("lu").textContent = str;

