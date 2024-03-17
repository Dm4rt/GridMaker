//Global Vars
let gridRows = 0;
let gridCols = 0;

//add cell 
function addCell(input){
	let td = document.createElement("td");
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
	gridRows--;
	console.log(gridRows, gridCols);
}
