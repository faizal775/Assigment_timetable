const XLSX = require('xlsx'); 

// Load the Excel file (Replace 'your-file.xlsx' with the actual file path)
const workbook = XLSX.readFile('https://docs.google.com/spreadsheets/d/1eRujNQYov-tZ8j9yvkah6lSzJOpNweMF/edit#gid=478598190.xlsx');

// Assuming the employees' information is in the first sheet
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert the worksheet to an array of objects
const employeesData = XLSX.utils.sheet_to_json(worksheet);

// Function to check if an employee has worked for 7 consecutive days
function hasWorkedFor7ConsecutiveDays(employee) {
    // Your logic to check 7 consecutive days goes here
}

// Function to check if an employee has less than 10 hours between shifts but more than 1 hour
function hasLessThan10HoursBetweenShifts(employee) {
    // Your logic to check the time between shifts goes here
}

// Function to check if an employee has worked for more than 14 hours in a single shift
function hasWorkedMoreThan14Hours(employee) {
    // Your logic to check the shift duration goes here
}

// Iterate through the employees and check for each condition
for (const employee of employeesData) {
    if (hasWorkedFor7ConsecutiveDays(employee)) {
        console.log(`Employee ${employee.name} has worked for 7 consecutive days at position ${employee.position}`);
    }

    if (hasLessThan10HoursBetweenShifts(employee)) {
        console.log(`Employee ${employee.name} has less than 10 hours between shifts at position ${employee.position}`);
    }

    if (hasWorkedMoreThan14Hours(employee)) {
        console.log(`Employee ${employee.name} has worked for more than 14 hours in a single shift at position ${employee.position}`);
    }
}

// Make sure to implement the logic in the three functions according to your data structure and requirements.
