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


let myDate = new Date();
let myYear = myDate.getFullYear();
document.getElementById("theYear").textContent = myYear;


document.getElementById("lu").textContent = "Last Updated: " + document.lastModified;



function toggleMenu() {
    console.log(document.getElementById("bid").classList);
    document.getElementById("bid").classList.toggle("hide");
}