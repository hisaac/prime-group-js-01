// initial data
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

// for loop to iterate through employees array
for (var i = 0; i < employees.length; i++) {
	var employee = employees[i];
	console.log(bonusArrayBuilder(employee));
};

// builds bonus array
function bonusArrayBuilder(employee){
	var employeeName = employee[0];
	var employeeNumber = employee[1];
	var employeeSalary = employee[2];
	var employeePerformance = employee[3];

	var bonusPercentage = basePerformanceBonusCalculator(employeePerformance);


	return [employeeName, bonusPercentage];
}

// calculate bonus percentage based on employee's performance
function basePerformanceBonusCalculator(employeePerformance){
	var baseBonusPercentage = 0;
	switch (employeePerformance) {
		case 3: baseBonusPercentage = .04; break;
		case 4: baseBonusPercentage = .06; break;
		case 5: baseBonusPercentage = .1; break;
	}
	return baseBonusPercentage;
}
