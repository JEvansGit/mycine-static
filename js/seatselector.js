
var seatsPerRow = 5;
var rows = 12;

function drawGrid(seatsPerRow, rows) {

	for (var j = 0, grid='Grids = '; j < (seatsPerRow * rows); j++) {
		grid += "*";
	}
	console.log(grid);
}

drawGrid(seatsPerRow, rows);
