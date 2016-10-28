// initial data
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

var empBonuses = [];  // bonuses of all employees

// for loop to run through each employee's data
for (var i = 0; i < employees.length; i++) {
  empBonuses.push(calcBonus(employees[i]));
}

// log data to the console to test functionality
// empBonuses.forEach(function(employee) {
//   console.log("Name: " + employee[0] + ", Bonus Percentage: " + employee[1] +
//   "%, Total Compensation: $" + employee[2] + ", Total Bonus: $" + employee[3]);
// });

// function to calculate percentages for each employee, and push them to their
// own array
function calcBonus(employee) {
  var empBonus = []; // individual employee bonus array
  var bonusPercent = 0;
  empBonus.push(employee[0]); // add employee name to empBonus array

	// check employee's rating, and set bonus percentage based on that
	switch (employee[3]) {
    case 1, 2: bonusPercent = 0; break;
    case 3: bonusPercent = .04; break;
    case 4: bonusPercent = .06; break;
    case 5: bonusPercent = .1; break;
    default: bonusPercent = 0;
  };

	// check if employee number is 4 digits long, and add to bonus % if true
  if (employee[1].length === 4){bonusPercent += .05;}

	// check if salary is over $65k, and add to bonus % if true
  if (employee[2] > 65000){bonusPercent -= .01;}

	// make sure no bonus is over 13% or less than 0%
  if (bonusPercent > .13){bonusPercent = .13;}
	else if (bonusPercent < 0){bonusPercent = 0;}

	// change bonus percentage to readable value, and push to array
  empBonus.push(bonusPercent * 100);

	// calculate adjusted salary and push to array
  empBonus.push(Math.round(employee[2] * 100) * (1 + bonusPercent) / 100);

	// calculate total bonus amount, and push to array
  empBonus.push(Math.round(bonusPercent * employee[2]));

  return empBonus;
};

// creation of table for employee bonus data
var bonusTable = "";

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
empBonuses.forEach(function(empBonuses) {
  var badBonus = "class=\"badBonus\"";
  badBonus = empBonuses[1] === 0 ? "class=\"badBonus\"" : "class=\"goodBonus\"";

bonusTable +=
	"<tr " + badBonus + ">" +
		"<td>" + empBonuses[0] + "</td>" +
    "<td>" + empBonuses[1] + "</td>" +
    "<td>" + empBonuses[2] + "</td>" +
    "<td>" + empBonuses[3] + "</td>" +
  "</tr>";
});

// add table closing tag
bonusTable += "</table>";

// inject table into index.html
document.getElementById('bonusTable').innerHTML = bonusTable;
