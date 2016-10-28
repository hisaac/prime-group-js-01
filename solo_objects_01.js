// initial data
var atticus = ["Atticus",	"2405"	,	"47000"	, 3];
var jem = 		["Jem"		, "62347"	, "63500"	, 4];
var boo = 		["Boo"		, "11435"	, "54000"	, 3];
var scout = 	["Scout"	, "6243"	, "74750"	, 5];
var robert = 	["Robert"	, "26835"	, "66000"	, 1];
var mayella = ["Mayella", "89068"	, "35000"	,	2];

var employees = [atticus, jem, boo, scout, robert, mayella];
var employeeObjects = []; // array of employee objects

var employeeBonuses = []; // bonuses of all employees

// run through each item in employees array and construct an object
employees.forEach(function(employee){
	employeeObjects.push(new HumanResource(employee));
});

employeeObjects.forEach(function(employee){
	console.log(bonusArrayBuilder(employee));
});

// convert employee array into an object
function HumanResource(employee){
	this.name 					= employee[0];
	this.employeeNumber = parseInt(employee[1]);
	this.baseSalary 		= parseInt(employee[2]);
	this.reviewScore 		= parseInt(employee[3]);
}

function bonusArrayBuilder(employee){
	var employeeName = employee.name;
	var employeeNumber = employee.employeeNumber;
	var baseSalary = employee.baseSalary;
	var reviewScore = employee.reviewScore;
}

// calculate base bonus percentage based on employee review score
function baseBonusCalculator(reviewScore){
	var baseBonus = 0;
	switch(reviewScore){
		case 3: baseBonus = .04; break;
		case 4: baseBonus = .06; break;
		case 5: baseBonus = .1; break;
	}
	return baseBonus;
}

// add extra bonus based on employee longevity
function longevityBonus(employeeNumber){
	var longevityBonus = 0;
	if(employeeNumber.length === 4){longevityBonus += .05;}
	return longevityBonus;
}
