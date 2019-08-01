function UpdateDisplay() {
//append it to older table line
//clear out search box
// need new function to do logi for will it flood which will be called here
};

function WeatherMapAPI() {
  var WMAPIquery = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=95bdc5084ebe0a4fc6446275aa22aabb";
  $.ajax({
    url: WMAPIquery,
    method: "GET"
  })
    .then(function (response) {

      latt = response.coord.lat;
      long = response.coord.lon;
      console.log(latt);
      console.log(long);

      initialize(latt, long);
    })
    .catch(function(){
      console.log("didnt work");
    })
};


function initialize(lat, lng) {
  var userChosenLocation = { lat: lat, lng: lng };
  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById("mapdrop"), {
      position: userChosenLocation,
      pov: {
        heading: 34,
        pitch: 10
      }
    });
};

$("#city-search").on("click", function (event) {
  event.preventDefault();
  cityName = $("#location-search").val();
  console.log(cityName);
  WeatherMapAPI();
  UpdateDisplay();
});
