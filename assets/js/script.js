// displaying current time
var currentTime = moment().format("dddd, MMMM Do ");
var dayDisplay = document.getElementById("currentDay");


// displaying current time on top of page
dayDisplay.textContent = currentTime;