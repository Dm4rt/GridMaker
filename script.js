//Global Vars
let gridRows = 0;
let gridCols = 0;
let gridColor = "White";

//add cell 
function addCell(input){
	let td = document.createElement("td");
	//add onclick event handler where the backgroud is updated on click
	td.onclick = function(){
		td.style.backgroundColor = gridColor;
	}
	input.appendChild(td);
}

//add row
function addRow() {
	let row = document.createElement("tr");
	//Special case where no cols yet
	if(gridCols<=0){
		addCell(row);
		gridCols++;
	}
	else{
		for(let x=0;x<gridCols;x++){
			addCell(row);
		}
	}
	document.getElementById("grid").appendChild(row);
	gridRows++;
	console.log(gridRows, gridCols);	
}

//add column
function addCol(){
	//Special case where no rows yet
	if(gridRows==0){
		addRow();
		return;
	}
	else{
		let grid = document.getElementById("grid");
		for(let x=0;x<gridRows;x++){
			addCell(grid.children[x]);
		}
	}
	gridCols++;
	console.log(gridRows, gridCols);
		
}

//Removes a row
function removeRow(){
	//Special case where no rows 
	if(gridRows == 0 ){
		return;
	}
	//Get grid and the last child
	let grid = document.getElementById("grid");
	let lastChild = grid.lastChild;
	grid.removeChild(lastChild);
	//Special case where last row emptys grid on remove
	//Basically replace grid with empty one
	if(gridRows == 1 ){ 
		grid.innerHTML= '';
		gridRows=0;
		gridCols=0;
	}
	else{
		gridRows--;
	}
	console.log(gridRows, gridCols);
}

//Removes a col
function removeCol(){
	//Special Case where no rows
	if(gridRows == 0){
		return;
	}
	let grid = document.getElementById("grid");
	for(let x=0;x<gridRows;x++){
		let row =grid.children[x];
		//we basically remove the last cell from each row
		if(row.children.length >0){
			row.removeChild(row.lastChild);
		}
	}
	//Special case where last column emptys grid on remove
	if(gridCols == 1 ){ 
		grid.innerHTML= '';
		gridRows=0;
		gridCols=0;
	}
	else{
		gridCols--;
	}
	console.log(gridRows, gridCols);
}

//update current grid color
function setGridColor(){
	//we get the value selected from the dropdown menu
	gridColor = document.getElementById("colorMenu").value;
	console.log("Grid Color:", gridColor);
}

//Color all uncolored cells
function fillEmpty(){
	let grid = document.getElementById("grid");
	//we will iterate through grid and find empty cells
	for(let x=0;x<grid.rows.length;x++){
		let curRow=grid.rows[x];
		for(let y=0;y<curRow.cells.length;y++){
			let curCell = curRow.cells[y];
			//Check if a cell has no color
			if(curCell.style.backgroundColor == ''){
				curCell.style.backgroundColor = gridColor;
			}
		}
	}
}

//Color all cells
function fillAll(){
	let grid = document.getElementById("grid");
	//Same as last function, we will iterate through grid
	for(let x=0;x<grid.rows.length;x++){
		let curRow=grid.rows[x];
		for(let y=0;y<curRow.cells.length;y++){
			let curCell = curRow.cells[y];
			curCell.style.backgroundColor = gridColor;
		}
	}
}

//Clear color of all cells
function clearAll(){
	let grid = document.getElementById("grid");
	//Again, same as last function, we will iterate through grid
	for(let x=0;x<grid.rows.length;x++){
		let curRow=grid.rows[x];
		for(let y=0;y<curRow.cells.length;y++){
			let curCell = curRow.cells[y];
			//Instead of setting to current color, set to original blank
			curCell.style.backgroundColor = '';
		}
	}
}

