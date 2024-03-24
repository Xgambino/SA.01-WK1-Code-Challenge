// Function to calculate PAYE (Pay As You Earn) tax
function calculatePAYE(grossSalary) {
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = 0;
    } else if (grossSalary <= 32333) {
        tax = (grossSalary - 24000) * 0.1;
    } else if (grossSalary <= 40667) {
        tax = 833.33 + (grossSalary - 32333) * 0.15;
    } else if (grossSalary <= 49000) {
        tax = 2500 + (grossSalary - 40667) * 0.2;
    } else if (grossSalary <= 57333) {
        tax = 5416.67 + (grossSalary - 49000) * 0.25;
    } else {
        tax = 8500 + (grossSalary - 57333) * 0.3;
    }
    return tax;
}

// Function to calculate NHIF deductions
function calculateNHIF(grossSalary) {
    let nhif = 0;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate NSSF deductions
function calculateNSSF(grossSalary) {
    // Assuming NSSF is 6% of gross salary
    return grossSalary * 0.06;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const deductions = paye + nhif + nssf;
    const netSalary = grossSalary - deductions;

    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        deductions,
        netSalary
    };
}

// Example usage:
const basicSalary = 50000; // Example basic salary
const benefits = 10000; // Example benefits

const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE:", salaryDetails.paye);
console.log("NHIF Deductions:", salaryDetails.nhif);
console.log("NSSF Deductions:", salaryDetails.nssf);
console.log("Total Deductions:", salaryDetails.deductions);
console.log("Net Salary:", salaryDetails.netSalary);
