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
            } else {
                jumboHoliday.append("Holidays Display Here!")
                    .trim();
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
pastPresentFuture();

// Variable to store the "time" id of the textarea
var nineId = $("#9");
var tenId = $("#10");
var elevenId = $("#11");
var twelveId = $("12");
var oneId = $("#13");
var twoId = $("#14");
var threeId = $("#15");
var fourId = $("#16");
var fiveId = $("#17");

//When the save button is clicked, set/get localStorage for each textarea's Calander Events that will be typed by the user
$("#saveBtn").on("click", function(e) {
    e.preventDefault();

    // Get the textarea id's and the trimmed value of user's calander events
    var calEvent = {
        nine: nineId.val.trim(),
        ten: tenId.val.trim(),
        eleven: elevenId.val.trim(),
        twelve: twelveId.val.trim(),
        one: oneId.val.trim(),
        two: twoId.val.trim(),
        three: threeId.val.trim(),
        four: fourId.val.trim(),
        five: fiveId.val.trim(),
    };

    // Local Storage for set/get user's calendar events
    localStorage.setItem('calEvent', JSON.stringify(calEvent));
    var calEventMemory = localStorage.getItem('calEvent');
    calEventMemory = JSON.parse(calEventMemory);

        console.log(calEvent.nine);
        console.log(calEvent.ten);
        console.log(calEvent.eleven);
        console.log(calEvent.twelve);
        console.log(calEvent.one);
        console.log(calEvent.two);
        console.log(calEvent.three);
        console.log(calEvent.four);
        console.log(calEvent.five);
});
//WHEN I click the save button for that timeblock
//THEN the text for that event is saved in local storage
//WHEN I refresh the page
//THEN the saved events persist

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