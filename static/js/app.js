// from data.js
var tableData = data;

// iniciating button and table
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");


data.forEach(function(tableData) {
    console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

submit.on("click", function() {
    d3.event.preventDefault();
    var input, filter, table, tr, td, i;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
  })
 
   

