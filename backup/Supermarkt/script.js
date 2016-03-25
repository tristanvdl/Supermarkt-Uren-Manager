$(document).ready(function(){

var hoursInput = document.getElementById('hours');
var weeksInput = document.getElementById('weeks');
var wage = document.getElementById('wage');
var toeslag = document.getElementById('toeslag');
var result = document.getElementById('result');
var nameResult = document.getElementById('nameResult');




document.querySelector('form#rosterForm').addEventListener('submit', function(){

    var savedname = document.getElementById("resultName").value;
    localStorage.setItem('savedname', savedname);
    location.reload();
	
	});
	
document.querySelector('form#form').addEventListener('submit', function () {
	
    var outcome = hoursInput.value * weeksInput.value * wage.value;
	var total = outcome * (toeslag.value / 100) + outcome;
	result.innerHTML = Math.round(total * 100) / 100 + "&#8364; p.m";

});

$("#form").on('submit',function(){return false;});
$("#rosterForm").on('submit',function(){return false;});

var name = localStorage.getItem('savedname');
	if (name != "undefined" || name != "null" || name != "") {
		document.getElementById('resultNameOutput').innerHTML = "Hello " + name + "!";
		} else{
	document.getElementById('resultNameOutput').innerHTML = "Hello!";
		}


});

