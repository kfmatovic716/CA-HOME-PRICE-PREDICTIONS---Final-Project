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

//Clear layer group
var markers = L.layerGroup().addTo(myMap)

// JavaScript here - event listeners and event handlers
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

var testData 
// Create the function to run for both events
function runFind() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Removes markers
 markers.clearLayers()

  // Select the input element of county name (inputElement1) and house type (inputElement2)
  // Get the value property of the input element
  var inputCounty = d3.select("#example-form-input1").property("value");
  var inputHouseType = d3.select("#example-form-input2").property("value");

  // Filtering data
  var filteredCounty = data.filter(rowItem => rowItem.county === inputCounty)
                           .filter(rowItem => rowItem.house_type === inputHouseType)
  
  // testData = filteredCounty

  console.log(filteredCounty)
  console.log(filteredCounty.map(rowItem => rowItem.lat))

  filteredCounty.forEach(function(rowItem) {
    markers.addLayer(L.marker([rowItem.lat, rowItem.lng])
                    .bindPopup("<h3>Zip Code:" + rowItem.zipcode + "</h3> <hr> <h4>Estimated Home Price: " + rowItem.est_price + "</h4>"))
  })

    
    var southWest = L.latLng(math.min(filteredCounty.map(rowItem => rowItem.lat)), 
                              math.min(filteredCounty.map(rowItem => rowItem.lng)))
    northEast = L.latLng(math.max(filteredCounty.map(rowItem => rowItem.lat)), 
    math.max(filteredCounty.map(rowItem => rowItem.lng)))
    bounds = L.latLngBounds(southWest, northEast);
      
  myMap.flyToBounds(bounds);
}

  // Create event handlers for clicking the button 
button.on('click', runFind);




