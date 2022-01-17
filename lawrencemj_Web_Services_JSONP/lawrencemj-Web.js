/* 
Michael Lawrence 
CSS-3351-001
11/7/2021
*/

var dir = "pictures/"
var departments = [{
	name: "SFA Departments",
	url: "https://www.sfasu.edu/",
	desc: "Click the image to browse through recommended SFA departments!",
	picFileName: "sfa.png"
}]

window.onload = function() {
	
	displayDepartment(0)
	document.getElementById("img").onclick = clickHandler
	
	// get JSONP data and refresh data every 3 seconds.
	handleRefresh()
	setInterval(handleRefresh, 3000);
}

// JSONP will call this function
function getDepartments(jsonp) {
	departments = jsonp;
}

function clickHandler() {
	
	var random = Math.floor(Math.random() * departments.length)
	displayDepartment(random)
	
}

function handleRefresh() {
	var url = "http://cs.sfasu.edu/csit3351-00113/web/data.jsonp"
	
	var script = document.createElement("script")
	script.setAttribute("src", url)
	script.setAttribute("id", "jsonp")
	
	// create/replace script in html
	var head = document.getElementsByTagName("head")[0]
	var oldScript = document.getElementById("jsonp")
	
	if(oldScript == null)
		head.appendChild(script)
	else
		head.replaceChild(script, oldScript)
}

function displayDepartment(index) {
	
	document.getElementById("title").innerHTML = departments[index].name
	document.getElementById("desc").innerHTML = departments[index].desc
	document.getElementById("link").setAttribute("href", departments[index].url)
	document.getElementById("img").setAttribute("src", 
		dir + departments[index].picFileName
	)
}