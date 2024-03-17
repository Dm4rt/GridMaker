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
	//Special case where last row emptys grid on remove
	if(gridRows == 1){
		for(let r=gridCols;r>1;r--){
			removeCol();
		}
	}
	gridRows--;
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
	if(gridCols == 1){
		for(let r=gridRows;r>0;r--){
			removeRow();
		}
	}
	gridCols--;
	console.log(gridRows, gridCols);
}
