// Create initial map object centered in Los Angeles
var myMap = L.map("map", 
                  {center: [34.05, -118.24],
                   zoom: 15
                });

// Add the background map image (tile layer)
// Street map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", 
            { attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
              tileSize: 512,
              maxZoom: 18,
              zoomOffset: -1,
              id: "mapbox/streets-v11",
              accessToken: API_KEY})
            .addTo(myMap);

// TO DO! Used arbitrary filename because don't know how the flask output will be
//link to get the geojson data
var geojsonPath = "static/data/homeprice.geojson";

// Grab data with d3
d3.json(geojsonPath).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data)
   .addTo(myMap);
});

//console.log(data)


// JavaScript here - event listeners and event handlers
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create the function to run for both events
function runFind() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element of county name (inputElement1) and house type (inputElement2)
  // Get the value property of the input element
  var inputCounty = d3.select("#example-form-input").property("value");
  // var inputHouseType = d3.select("#example-form-input").property("value");

  // Print the value to the console
  // console.log(inputValue);

  var filteredCounty = 
  // var filteredHouseType =

  filteredCounty.


  
  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
}

filterButton.on('click', runFind);
// Each counties object contains the different zip codes and predicted price
var counties = [
                {
                  zipcode: "90620",
                  location: [33.84, -118.01],
                  estimated_price: 720000
                },
                {
                  zipcode: "92711",
                  location: [33.76, -117.85],
                  estimated_price: 625000
                },
                {
                  zipcode: "90720",
                  location: [33.79, -118.07],
                  estimated_price: 1300000
                },
                {
                  zipcode: "92602",
                  location: [33.75, -117.75],
                  estimated_price: 1400000
                },
                {
                  zipcode: "92801",
                  location: [33.84, -117.95],
                  estimated_price: 680000
                }
              ];

// Loop through the counties array and create one marker for each zipcode
counties.forEach(city => {
    L.marker(city.location, {
      draggable: true,
      title: "Details"
      
    }).bindPopup("<h3>" + city.zipcode + "</h3> <hr> <h4>Estimated Home Price: " + city.estimated_price + "</h4>").addTo(myMap);
  })






// Create event handlers for clicking the button or pressing the enter key
button.on("click", runFind);
form.on("submit", runFind);
