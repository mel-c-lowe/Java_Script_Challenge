console.log("app.js loaded")

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Let's see what a reference to tbody gets me
var tbody = d3.select("tbody");

// Take a look at the data
// console.log(data);

// Use d3 to append a table row for each sighting
data.forEach(function(ufoSighting) {
    // console.log(ufoSighting)
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Notes for filter button: id: datetime

// Assign data to a variable
var ufoSighting = data;

// Use d.3 to select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#datetime");

// Create the event handlers
button.on("click", runEnter);
form.on("change", runEnter);

// Prevent default reset
// d3.event.preventDefault();

// Establish the function runEnter
function runEnter() {

    // Prevent default reset
    d3.event.preventDefault();

    // Clear the table
    tbody.html("");

    // Select date input field
    var inputDate = d3.select("#datetime");

    // Select city input field
    var inputCity = d3.select("#city");

    // Select state input field
    var inputState = d3.select("#state");

    // Select country input field
     var inputCountry = d3.select("#country");

    // Select shape input field
    var inputShape = d3.select("#shape");

    // Get the value from the date input field
    var dateValue = inputDate.property("value");

    //Get the value from the city input field
    var cityValue = inputCity.property("value");

    // Get value from state input fiels
    var stateValue = inputState.property("value");

    //Get the value from the country input field
    var countryValue = inputCountry.property("value");

    // Get value from shape input fiels
    var shapeValue = inputShape.property("value");

    console.log(dateValue);
    console.log(cityValue);
    // console.log(ufoSighting);

    var filteredData 

    if (dateValue) {
        filteredData = ufoSighting.filter(sighting => sighting.datetime === dateValue);
    };

    if (cityValue) {
        filteredData = filteredData.filter(sighting => sighting.city === cityValue)
    };  

    if (stateValue) {
        filteredData = filteredData.filter(sighting => sighting.state === stateValue)
    }

    if (countryValue) {
        filteredData = filteredData.filter(sighting => sighting.country === countryValue)
    };  

    if (shapeValue) {
        filteredData = filteredData.filter(sighting => sighting.shape === shapeValue)
    }

    // console.log(filteredData);

    filteredData.forEach(function(newTable) {
        // Append the filtered data to the table one row at a time
        var row = tbody.append("tr");

        Object.entries(newTable).forEach(function([key, value]) {
            console.log(key, value);
            // Add cell data
            var cell = row.append("td");
            cell.text(value);
        });
    });
};