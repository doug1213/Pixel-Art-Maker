
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
var pickAColor = document.getElementById("colorPicker");


function makeGrid(rows,columns) {
    // lines 9-21 are used to create the grid.
    document.getElementById("pixelCanvas").innerHTML = "";
    for(i=0;i<rows; i++) {
        var row = document.createElement("tr");
        var gridtable = document.getElementById('pixelCanvas');
        gridtable.appendChild(row);
    
        for(n = 0; n < columns; n++) {
            var column = document.createElement("td");
            var gridtable = document.getElementsByTagName('tr');
            gridtable[i].appendChild(column);
            }
    }
  event.preventDefault();

    // lines 25 to 30 set an event listener on every square for hilighting
 
    var squares = document.querySelectorAll('td');
    squares.forEach(function(square){
        square.addEventListener('click', function() {
            square.style.background = pickAColor.value;
         });
        });
}

document.getElementById('sizePicker').addEventListener('submit',function(){ makeGrid(height.value, width.value); });


