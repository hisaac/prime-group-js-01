// initial data
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

// for loop to iterate through employees array
// for (var i = 0; i < employees.length; i++) {
// 	var employee = employees[i];
// 	console.log(bonusArrayBuilder(employee));
// };

// forEach method to iterate through employees array
employees.forEach(function(employee){
	console.log(bonusArrayBuilder(employee));
});

// builds bonus array
function bonusArrayBuilder(employee){
	var employeeName 				= employee[0];
	var employeeNumber 			= employee[1];
	var employeeSalary 			= parseInt(employee[2]);
	var employeePerformance = employee[3];

	var bonusPercentage =  basePerformanceBonusCalculator(employeePerformance);
			bonusPercentage += employeeLongevityBonus(employeeNumber);
			bonusPercentage -= maxSalaryDeduction(employeeSalary);
			bonusPercentage =  outliers(bonusPercentage);

	var bonus 						= employeeSalary * bonusPercentage;
	var totalCompensation = employeeSalary + bonus;

	var roundedBonus 			= Math.round(bonus);

	return [employeeName, bonusPercentage, totalCompensation, roundedBonus];
}

// calculate bonus percentage based on employee's performance
function basePerformanceBonusCalculator(employeePerformance){
	var baseBonusPercentage = 0;
	switch (employeePerformance) {
		case 3: baseBonusPercentage = .04; break;
		case 4: baseBonusPercentage = .06; break;
		case 5: baseBonusPercentage =  .1; break;
	}
	return baseBonusPercentage;
}

// calculate extra bonus based on employee's employee number
function employeeLongevityBonus(employeeNumber){
	var longevityBonus = 0;
	if(employeeNumber.length === 4){longevityBonus += .05;}
	return longevityBonus;
}

// calculate bonus deduction based on salary amount
function maxSalaryDeduction(employeeSalary){
	var deduction = 0;
	if(employeeSalary > 65000){deduction = .01};
	return deduction;
}

// function reigns in outliers
function outliers(bonusPercentage){
	bonusPercentage = Math.min(bonusPercentage, .13);
	bonusPercentage = Math.max(bonusPercentage,   0);
	return bonusPercentage;
}
