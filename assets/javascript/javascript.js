// function to set up page
// function to call weather api, which will return long/latt
// take that data and make second api call to google street view
// return image of location
// function that takes sea lvl and does see level math
// function that updates display and puts it all on page
// will it flood?
// 




function UpdateDisplay() {
    //take input from users
    //update repeating element
    //
}

function WeatherMapAPI() {
    var cityName = "";
    var WMAPIquery = "https://api.openweathermap.org/data/2.5/weather?" +
        "q=" + cityName + "&units=imperial&appid=";
    $.ajax({
        url: WMAPIquery,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
        });
}

function StreetViewAPI() {
    var longitude="";
    var latitude="";
    var SVAPIquery="";
    $.ajax({
        url: SVAPIquery,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {
        })

}



//need an on click for user submitting data

//need a way to flood city