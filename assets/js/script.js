// Variable to store the created a p element's id
var holidays = $("#holidays");
// Calandarific API - I created my own APIkey and used parameters to narrow down the search for holidays in Canada specifically this year, 2022.
var url = "https://calendarific.com/api/v2/holidays?api_key=0b1a8fe3ecd9fd08d231e319583a5bc0dfeb0f85&country=CA&year=2022&per_page=1";
 
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then (function (cal_data) {
        //console.log(cal_data);
        var jumboHoliday = $("#holiday");
        var holidays = cal_data.response.holidays;
        //console.log(holidays);

        // For loop through Calanderific Array to get the Holidays date and name and append the name to the page, if no holiday display "Holidays Display Here!"
        for (var i = 0; i < holidays.length; i++) {
            var holidayName = holidays[i].name;
            var holidayDate = holidays[i].date.iso;
            var compareDate = moment().format('YYYY-MM-DD');

            if (holidayDate === compareDate) {
                jumboHoliday.append(holidayName);
            } 
            else {
                jumboHoliday.append("Holidays Display Here!")
                    break;
            }
        }
    });

// Current day's date to display in header, using [Moment.js](https://momentjs.com/)
var todaysDate = moment().format("dddd, MMMM, DD");
$("#currentDay").append(todaysDate);

// Function will argue if currentHour:
    // is greater than timeId, then apply .past class 
    // is equal to timeId, then apply .present class  
    // is less than timeId, then apply .future class
var pastPresentFuture = function() {
    var currentHour = moment().format('H');
    //console.log("Current hour:", currentHour);

    $(".description").each(function() {
        var timeId = parseInt($(this).attr('id'));
        //console.log(timeId);
        //var timeId = parseInt($(this).attr('data-id').val(), 10);

        if (currentHour < timeId) {
            $(this).addClass("future");
        } else if (currentHour > timeId) {
            $(this).addClass("past");
        } else {
            $(this).addClass("present")
        }
        //console.log(this);
    });
};

// Variable to store the "time" id of the textarea
var nineEl = $("#9");
var tenEl = $("#10");
var elevenEl = $("#11");
var twelveEl = $("#12");
var oneEl = $("#13");
var twoEl = $("#14");
var threeEl = $("#15");
var fourEl = $("#16");
var fiveEl = $("#17");

var calEvent = "";

$(document).ready(function() {     
    renderData();       
    //When the save button is clicked, set/get localStorage for each textarea's Calander Events that will be typed by the user
    $(".row").on("click", "button", function(e) {
        e.preventDefault();

        // Get the textarea id's and the trimmed value of user's calander events
        var calEvent = {
            
            ten: tenEl.val().trim(),
            eleven: elevenEl.val().trim(),
            twelve: twelveEl.val().trim(),
            one: oneEl.val().trim(),
            two: twoEl.val().trim(),
            three: threeEl.val().trim(),
            four: fourEl.val().trim(),
            five: fiveEl.val().trim(),
        };

        // Local Storage for set/get user's calendar events
        localStorage.setItem('calEvent', JSON.stringify(calEvent));
    });
    pastPresentFuture();
});

// When refreshing the page, then the data and saved event persists
var renderData = function() {
    // Parse into a string of objects
    var calEventMemory = localStorage.getItem('calEvent');
    calEventMemory = JSON.parse(calEventMemory);
    console.log(calEventMemory);

    // Loop over all enumerable properties of the calEventMemory(calEvent) object, keyed by strings
    for (var key in calEventMemory) {
        nineEl.text(calEventMemory["nine"]);
        tenEl.text(calEventMemory["ten"]);
        elevenEl.text(calEventMemory["eleven"]);
        twelveEl.text(calEventMemory["twelve"]);
        oneEl.text(calEventMemory["one"]);
        twoEl.text(calEventMemory["two"]);
        threeEl.text(calEventMemory["three"]);
        fourEl.text(calEventMemory["four"]);
        fiveEl.text(calEventMemory["five"]);
    }
};