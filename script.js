//Global Vars
let gridRows = 0;
let gridCols = 0;

//insert cell
function insertCell(input){
	let td = document.createElement("td");
	input.appendChild(td);
}

//add row
function addRow() {
	let row = document.createElement("tr");
	//Special case where no cols yet
	if(gridCols<=0){
		insertCell(row);
		gridCols++;
	}
	else{
		for(let x=0;x<gridCols;x++){
			insertCell(row);
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
			insertCell(grid.children[x]);
		}
	}
	gridCols++;
	console.log(gridRows, gridCols);
		
}
