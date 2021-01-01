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

// 1. Create a variable to keep track of all the filters as an object.
var filters = [];
  
// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // let dateEle = d3.select("#datetime");
    // let cityEle = d3.select("#city");
    // let stateEle = d3.select("#state");
    // let countryEle = d3.select("#country");
    // let shapeEle = d3.select("#shape");

    // 4b. Save the value that was changed as a variable.
    let dateInput = d3.select("#datetime").property("value");
    let cityInput = d3.select("#city").property("value");
    let stateInput = d3.select("#state").property("value");
    let countryInput = d3.select("#country").property("value");
    let shapeInput = d3.select("#shape").property("value");

    // 4c. Save the id of the filter that was changed as a variable.
    // let dateId = d3.select("#datetime").property("id");
    // let cityId = d3.select("#city").property("id");
    // let stateId = d3.select("#state").property("id");
    // let countryId = d3.select("#country").property("id");
    // let shapeId = d3.select("#shape").property("id");

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    // if (date != null) {
    //   filters.push({dateId: date});
    // } else {
    //   filters.remove({dateId: date}); 
    // } 

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

    // if (city == null) {
    //   filters.remove(cityId); 
    // } else {
    //   filters = {cityId: city};
    // }
    // if (state == null) {
    //   filters.remove(stateId); 
    // } else {
    //   filters = {stateId: state};
    // }
    // if (country == null) {
    //   filters.remove(countryId); 
    // } else {
    //   filters = {countryId: country};
    // }
    // if (shape == null) {
    //   filters.remove(shapeId); 
    // } else {
    //   filters = {shapeId: shape};
    // }
    

    // 6. Call function to apply all filters and rebuild the table
    
    buildTable(filterData);
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  // function filterTable() {
  
  //   // 8. Set the filtered data to the tableData.
  //   let filteredData = tableData
  
  //   // 9. Loop through all of the filters and keep any data that
  //   // matches the filter values
  //   filteredData.forEach(row => row.filters === filters);
  
  //   // 10. Finally, rebuild the table using the filtered data
  //   buildTable(filteredData);
  // }
  
  // 2. Attach an event to listen for changes to each filter
  // document.getElementById("#datetime").addEventListener("submit", updateFilters);
  // document.getElementById("#city").addEventListener("submit", updateFilters);
  // document.getElementById("#state").addEventListener("submit", updateFilters);
  // document.getElementById("#country").addEventListener("submit", updateFilters);
  // document.getElementById("#shape").addEventListener("submit", updateFilters);

  d3.selectAll("input").on("click",updateFilters)

  // function formSubmit(e) {
  //   if(e && e.keyCode == 13) {
  //     document.forms[0].submit();
  //   }
  // }

  // dateEle.on("change", function() {
  //   let dateVal = d3.event.target.value;
  //   console.log(dateVal);
  // });
  // cityEle.on("change", function() {
  //   let newText = d3.event.target.value;
  //   console.log(newText);
  // });
  // stateEle.on("change", function() {
  //   let newText = d3.event.target.value;
  //   console.log(newText);
  // });
  // countryEle.on("change", function() {
  //   let newText = d3.event.target.value;
  //   console.log(newText);
  // });
  // shapeEle.on("change", function() {
  //   let newText = d3.event.target.value;
  //   console.log(newText);
  // });

  // Build the table when the page loads
  buildTable(tableData);
