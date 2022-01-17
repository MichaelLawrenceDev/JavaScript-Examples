/* 
Michael Lawrence 
CSS-3351-001
10/15/2021
*/

window.onload = function() {
	
	var generateButton = document.getElementById("button")
	generateButton.onclick = buttonHandler
	
	
}

function buttonHandler() {
	
	var f = document.getElementById("fname").value
	var l = document.getElementById("lname").value
	var name = f+l
	
	var numOfRows = document.getElementById("emailNum").value
	createTable(numOfRows, name)
	
}

function createHeaders(table) {
	
	var header = document.createElement("tr")
	table.appendChild(header)
	
	for (i = 0; i < 4; i++) {
		
		var item = document.createElement("th")
		header.appendChild(item)
		
		if 		(i==0) 	{ item.innerHTML = "Seq" }
		else if (i==1)  { item.innerHTML = "Username" }
		else if (i==2)  { item.innerHTML = "Email" }
		else if (i==3)	{ item.innerHTML = "PIN" }
	}
	
}

function createTable(numOfRows, name) {
	
	// remove existing table
	var table = document.getElementById("table")
	if (table != null)
		table.remove()
	
	// create table
	table = document.createElement("table")
	table.setAttribute("id", "table")
	document.body.appendChild(table)
	
	createHeaders(table)
	
	// create rows
	for (i = 0; i < numOfRows; i++) {
		
		var column = document.createElement("tr")
		table.setAttribute("id", "table")
		table.appendChild(column)
		
		// data
		var username = name + Math.floor(Math.random() * 899 + 100)
		var email = username + "@mjl.edu"
		var pin = Math.floor(Math.random() * 8888 + 1111)
		
		// create items in row (columns)
		for (j = 0; j < 4; j++) {
			
			var rowItem = document.createElement("th")
			column.appendChild(rowItem)
			
			if 		(j==0) 	{ rowItem.innerHTML = i+1 }		 // Sequence Number
			else if (j==1)  { rowItem.innerHTML = username } // Username
			else if (j==2)  { rowItem.innerHTML = email }	 // Email
			else if (j==3)	{ rowItem.innerHTML = pin }		 // PIN

			
		} // items
		
	} // rows
	
}