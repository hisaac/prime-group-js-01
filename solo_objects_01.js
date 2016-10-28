// declare variables
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];
var employees = [atticus, jem, boo, scout, robert, mayella];
var employeeObjects = []; // array of employee objects
var employeeBonuses = []; // bonuses of all employees
var bonusTable = ""; // html table to inject into web page

// run through each item in employees array and construct an object
employees.forEach(function(employee){
	employeeObjects.push(new HumanResource(employee));
});

// push data to employeeBonuses array
employeeObjects.forEach(function(employee){
	employeeBonuses.push(bonusArrayBuilder(employee));
});

// log bonus information to the console
employeeObjects.forEach(function(employee){
	var employee = bonusArrayBuilder(employee);
	console.log(
		" | Employee Name: " + employee[0] +
		" | Bonus Percentage: " + employee[1] + "%" +
		" | Bonus Amount: $" + employee[3] +
		" | Final Salary: $" + employee[2] + "|"
	);
});

buildTable(employeeBonuses);

// convert employee array into an object
function HumanResource(employee){
	this.name = employee[0];
	this.employeeNumber = parseInt(employee[1]);
	this.baseSalary = parseInt(employee[2]);
	this.reviewScore = parseInt(employee[3]);
}

// build employeeBonuses array
function bonusArrayBuilder(employee){
	var employeeName = employee.name;
	var employeeNumber = employee.employeeNumber;
	var baseSalary = employee.baseSalary;
	var reviewScore = employee.reviewScore;

	var bonusPercentage = outliers(
		baseBonusCalculator(reviewScore)
		+ longevityBonus(employeeNumber)
		- highSalaryDeduction(baseSalary)
	);

	var bonusAmount = baseSalary * bonusPercentage;
	var totalCompensation = baseSalary + bonusAmount;
	var roundedBonus = Math.round(bonusAmount);

	return [employeeName, bonusPercentage, totalCompensation, roundedBonus];
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
	if(employeeNumber.toString().length === 4){longevityBonus += .05;}
	return longevityBonus;
}

// subtract bonus based on base salary amount
function highSalaryDeduction(baseSalary){
	var deduction = 0;
	if(baseSalary > 65000){deduction = .01};
	return deduction;
}

// keep all bonuses between 0% and 13%
function outliers(bonusPercentage){
	bonusPercentage = Math.min(bonusPercentage, .13);
	bonusPercentage = Math.max(bonusPercentage, 0);
	return bonusPercentage;
}

// creation of table for employee bonus data
function buildTable(array){
	// generate table headers
	bonusTable +=
		"<table>" +
			"<tr>" +
				"<th>Name</th>" +
				"<th>Bonus Percentage</th>" +
				"<th>Total Compensation</th>" +
				"<th>Total Bonus</th>" +
			"</tr>";

	// add class based on employee's bonus amount
	array.forEach(function(array){
		bonusTable +=
			"<tr>" +
				"<td>" + array[0] + "</td>" +
				"<td>" + array[1] + "</td>" +
				"<td>" + array[2] + "</td>" +
				"<td>" + array[3] + "</td>" +
			"</tr>";
	});

	// add table closing tag
	bonusTable += "</table>";

	// inject table into index.html
	document.getElementById('bonusTable').innerHTML = bonusTable;
}
