function addTable() {
    var body = document.querySelector("body"),
        tr = "",
        td = "",
		input = "",
		but = "";
	title = "";
	rowCounter = -1;
	cellCounter = 1;
	borderType = document.getElementById("border").value;
	borderWidth = document.getElementById("width").value;
	
	rows = document.getElementById("row").value;
    cols = document.getElementById("col").value;  
    table = document.createElement("table");
	table.id = "mainTable";
	title = document.createElement("caption");
    table.appendChild(title);
	$("#form").attr("hidden", "");
		
    for (var i = 0; i < rows; i++) {
        tr = document.createElement("tr");
		tr.id = rowCounter;
		rowCounter--;
        for (var j = 0; j < cols; j++) {
			td = document.createElement("td");
			td.id = cellCounter;
			cellCounter++;
			input = document.createElement("textarea");
			but = document.createElement("input");
			but.type = "button";
			but.addEventListener("click", saveTextArea); 
			but.value = "Сохранить"
			td.appendChild(input);
			td.appendChild(but);
			tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	rowCounter++;
	cellCounter--;
	$("#form").attr("hidden", "");
	$("#functions").removeAttr("hidden");
	body.appendChild(table);
	$("#mainTable").attr("cellpadding", 2);
	$("#mainTable").attr("cellspacing", 0);
}

function saveTextArea(){
	var $parentCell = this.parentElement, 
		string = ""; 
		
	string = $parentCell.children[0].value;
	$parentCell.children[0].remove();
	$parentCell.children[0].remove();
	data = document.createElement("span");
	data.innerHTML = string;
	$parentCell.prepend(data);
} 

function addTitle(){
	title.innerHTML = "<h2>" + document.getElementById("title").value + "</h2>";
}

function editTable(){
	borderType = document.getElementById("border").value;
	borderWidth = document.getElementById("width").value;
	if (borderWidth>999) borderWidth=999;
	$('td').css({'border':borderType + ' ' + borderWidth + 'px'});
}

function changerNumber(){
	borderWidth = document.getElementById("width").value;
	if (borderWidth>999) borderWidth=999;
	document.getElementById("dynamicBut").value = "Применить " + borderWidth + " px и рамка " + borderType;
}

function changerList(){
	borderType = document.getElementById("border").value;
	document.getElementById("dynamicBut").value = "Применить " + borderWidth + " px и рамка " + borderType;
}

function destroyTable() {
    var body = document.querySelector("body"),
        table = document.querySelector("table");
	
    document.body.removeChild(table);
	$("#functions").attr("hidden", "");
	$("#form").removeAttr("hidden");
}

function deleteRow() {
    var body = document.querySelector("body"),
        table = document.querySelector("table"),
		rowDeleteNumber = document.getElementById("rowDel").value,
		cells = cols * rows;
	
	for (i=rowDeleteNumber*cols+1; i <= cells; i++){ //Уменьшение ID ячеек
		cell = document.getElementById(i);
		cell.id = i-cols;
	}
	
	if (rowDeleteNumber > rows){ //Проверка на номер
		alert("Такой строки не существует");
		return;
	}
	
	rowDeleteNumber = -rowDeleteNumber; //Инверсия числа для того, чтобы  оно было отрицательным так же, как и ID строк
	
	rowDeleteString = "#" + rowDeleteNumber; //Удаление строки
	$(rowDeleteString).remove();
	//cellCounter = cellCounter - cols; 
	
	for (var i=rowDeleteNumber-1; i >= -rows; i--){ //Замена ID строк после удаления
		rowDeleteNumber = document.getElementById(i);
		rowDeleteNumber.id = i+1;
	}
	rows--; //Уменьшение кол-ва строк
}

function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

function magic() {
    var body = document.querySelector("body"),
        table = document.querySelector("table"),
		rand,
		color = "",
		colorRed,
		colorGreen,
		colorBlue,
		textHeight,
		randCellId;
	
	randCellId = randomInteger(1, (cols * rows));
	randCell = document.getElementById(randCellId);
	rand = randomInteger(1, 4);

	if (rand == 1 && randCell.children[0].tagName=="SPAN"){
		randCell.children[0].remove();
		input = document.createElement("textarea");
		but = document.createElement("input");
		but.type = "button";
		but.addEventListener("click", saveTextArea); 
		but.value = "Сохранить"
		randCell.appendChild(input);
		randCell.appendChild(but);
		return;
	} 
	
	colorRed = randomInteger(1, 255);
	colorGreen = randomInteger(1, 255);
	colorBlue = randomInteger(1, 255);
	textHeight = randomInteger(15, 25);
	colorBG = "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")";
	randCell.style.backgroundColor = colorBG;
	colorRed = randomInteger(1, 255);
	colorGreen = randomInteger(1, 255);
	colorBlue = randomInteger(1, 255);
	colorText = "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")";
	randCell.style.color = colorText;
	randCell.style.fontSize = textHeight + "pt";
}





