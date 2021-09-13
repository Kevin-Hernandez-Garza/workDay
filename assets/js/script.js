// targeting the class with the value "saveBtn" 
var buttonEl = $(".saveBtn");
// displaying current time
var currentTime = moment().format("dddd, MMMM Do ");
var dayDisplay = document.getElementById("currentDay");
// displaying current time on top of page
dayDisplay.textContent = currentTime;

function timeBlocks () {
    // getting the hour based on a 24-hour Day
    var hourNow = moment().hours();
    // adding the css classes depending on the current hour, for each time-block div
    $(".time-block").each(function() {
        var currentTime = parseInt($(this).attr('id'));

        if (currentTime > hourNow) {
            $(this).addClass('future');
        } else if (currentTime < hourNow) {
            $(this).addClass('past');
        }   else {
            $(this).addClass('present');
        }
    })
};

// saving the items even after the user refreshed the page. TRY IT 💜
function persistentFunc () {
    // target each of the hours on the time-blocks
    $(".hour").each(function() {
        var getEl = localStorage.getItem(hourEl);
        var hourEl = $(this).text();
        
        if (getEl !== null) {
            $(this).siblings(".description").val(getEl);
        }
    });
}

// saving the key/value pair of the classes for the hour and textarea triggered on click
buttonEl.on('click', function() {
    var hourEl = $(this).siblings(".hour").text();
    var textEl = $(this).siblings(".description").val();

    localStorage.setItem(hourEl, textEl);
});

// calling the functions to run 🏃🏽‍♂️
timeBlocks();
persistentFunc();


