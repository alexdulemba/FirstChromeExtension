var timeID = "time";
var dateID = "date";
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var consoleGreeting = "Hello Word!";

function setTimeandDate (timeElement, dateElement){
	var date = new Date();
	var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
	var time = date.getHours() + ':' + minutes;

	var date = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + " " + date.getFullYear(); 
	timeElement.innerHTML = time;
	dateElement.innerHTML = date; 
}

console.log(consoleGreeting);
document.addEventListener("DOMContentLoaded", function(dcle){
	var timeElement = document.getElementById(timeID);
	var dateElement = document.getElementById(dateID); 
	setTimeandDate(timeElement, dateElement);
}); 