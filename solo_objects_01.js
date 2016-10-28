// initial data
var atticus = ["Atticus",	"2405"	,	"47000"	, 3];
var jem = 		["Jem"		, "62347"	, "63500"	, 4];
var boo = 		["Boo"		, "11435"	, "54000"	, 3];
var scout = 	["Scout"	, "6243"	, "74750"	, 5];
var robert = 	["Robert"	, "26835"	, "66000"	, 1];
var mayella = ["Mayella", "89068"	, "35000"	,	2];

var employees = [atticus, jem, boo, scout, robert, mayella];
var employeeObjects = []; // array of employee objects

var empBonuses = []; // bonuses of all employees

// run through each item in employees array and construct an object
employees.forEach(function(employee){
	employeeObjects.push(new HumanResource(employee));
});

// convert employee array into an object
function HumanResource(employee){
	this.name 					= employee[0];
	this.employeeNumber = parseInt(employee[1]);
	this.baseSalary 		= parseInt(employee[2]);
	this.reviewScore 		= parseInt(employee[3]);
}
