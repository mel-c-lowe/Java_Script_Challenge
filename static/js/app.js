console.log("app.js loaded")

// from data.js
var tableData = data;

// YOUR CODE HERE!

// Let's see what a reference to tbody gets me
var tbody = d3.select("tbody");

// Take a look at the data
console.log(data);

// Use d3 to append a table row for each sighting
data.forEach(function(ufoSighting) {
    // console.log(ufoSighting)
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
    })
});