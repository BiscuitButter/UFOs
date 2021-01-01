// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

buildTable(data)

// 1. Create a variable to keep track of all the filters as an object.
// var filters = [];
  
// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.

    // 4b. Save the value that was changed as a variable.
    let dateInput = d3.select("#datetime").property("value");
    let cityInput = d3.select("#city").property("value");
    let stateInput = d3.select("#state").property("value");
    let countryInput = d3.select("#country").property("value");
    let shapeInput = d3.select("#shape").property("value");

    // 4c. Save the id of the filter that was changed as a variable.

    if (dateInput) {
      filterData = data.filter(date => date.datetime === dateInput)
    }
    if (cityInput) {
      filterData = data.filter(c => c.city === cityInput)
    }
    if (stateInput) {
      filterData = data.filter(s => s.state === stateInput)
    }
    if (countryInput) {
      filterData = data.filter(c => c.country === countryInput)
    }
    if (shapeInput) {
      filterData = data.filter(s => s.shape === shapeInput)
    }
   

    // 6. Call function to apply all filters and rebuild the table
    
    buildTable(filterData);
  
  }
  
  

  d3.selectAll("input").on("keypress",updateFilters)
  // d3.selectAll("#filter-btn").on("keypress",updateFilters)


 

  // Build the table when the page loads
  // buildTable(tableData);
