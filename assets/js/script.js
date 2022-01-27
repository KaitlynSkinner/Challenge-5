var calEvent = {};
var currentClock = moment().format('h');
var nine = $(".description")[0];
var ten = $(".description")[1];
var eleven = $(".description")[2];
var twelve = $(".description")[3];
var one = $(".description")[4];
var two = $(".description")[5];
var three = $(".description")[6];
var four = $(".description")[7];
var five = $(".description")[8];

console.log("Current clock:", currentClock);

//var timeId = parseInt($(this).attr('.description'));
//console.log(timeId);

/*
var cal_data = [];

var holidays = document.getElementById("#holidays");
var url = "https://calendarific.com/api/v2/holidays?api_key=0b1a8fe3ecd9fd08d231e319583a5bc0dfeb0f85&country=CA&year=2022";

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then (function (cal_data) {
        console.log(cal_data);
        var holidaysEl = cal_data.response.holidays;
        console.log(holidaysEl);

        if (!todaysDate) {
           holidayName.textContent = cal_data.response.holidays.name;
           holidayDate.textContent = cal_data.response.holidays.date;
        holidays.append(holidayName, holidayDate);
        }
        return holidays;
    });
*/

// Today's date in header
var todaysDate = moment().format("dddd, MMMM, DD"); //- check if tomorrow below date is tomorrows date
$("#currentDay").append(todaysDate);


var pastPresentFuture = function() {
    if (currentHour) {
        $(this).attr("past");
    } else if (currentHour === ten) {
        $(this).attr("present");
    } else if (currentHour === twelve) {
        $(this).attr("future")
    }
};
pastPresentFuture();

var textInput = $("#time").value;

localStorage.getItem("time");

// Local Storage for getting calendar events
var loadStorage = function() {
    $(nine).val(localStorage.getItem("type=text"));
    $(ten).val(localStorage.getItem(""));
    $(eleven).val(localStorage.getItem(""));
    $(twelve).val(localStorage.getItem(""));
    $(one).val(localStorage.getItem(""));
    $(two).val(localStorage.getItem(""));
    $(three).val(localStorage.getItem(""));
    $(four).val(localStorage.getItem(""));
    $(five).val(localStorage.getItem(""));
}



// Local Storage for saving calander events 
var saveCalEvent = function() {
    localStorage.setItem("time", input)
    textInput = JSON.stringify("time");
};

// Remove tasks?

/*
// Create an event in the Calander when typing in the input to edit and save
var createEvent = function() {
    
    $(".container").append();

    calEvent.push({
        text: 
    })
    saveCalEvent();
};
createEvent();
*/

//loadTasks();