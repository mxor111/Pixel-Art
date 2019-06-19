// Select color input
// Select size input
//dfining and create variables for the user to play
var submit = document.querySelector("input[type=onsubmit]");
var canvas = document.getElementById("pixel_canvas");
var height = document.getElementById("input_height");
var width = document.getElementById("input_width");
var form = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");

//allow users to pick colors
color.addEventListner("click", function(cell) {} ); //**allows the user to select the colors

//allows to submit selected
sizePicker.onsubmit = function(event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
};
// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  // set size of canvas
    for (var i = 0; i < height.value; i++) {
        const row = canvas.insertRow(i); // calls the function to set size rows
        for (var j = 0; j < width.value; j++) {
            const cell = row.insertCell(j); // cal the function to set size of insertCell
            cell.addEventListner("click", fillSquare);
    }
  }
}

function clearGrid() {
  while (table.rows.length > 0) {
    table.deleteRow(0); //clear the the grid upon entry
  }
}

function fillSquare() {
  this.setAttribute("style", "background-color: ${color.value}");
 //refers to calling the fill colors
})

}};

})
