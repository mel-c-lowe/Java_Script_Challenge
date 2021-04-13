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
var form = d3.select("#form");

// Create the event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Establish the function runEnter
function runEnter() {

    // Prevent default reset
    d3.event.preventDefault();

    // Clear the table
    tbody.html("");

    // Select input field
    var inputDate = d3.select("#datetime");

    // Get the value from the input field
    var dateValue = inputDate.property("value");

    console.log(dateValue);
    console.log(ufoSighting);

    var filteredData = ufoSighting.filter(sighting => sighting.datetime === dateValue);

    console.log(filteredData);

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