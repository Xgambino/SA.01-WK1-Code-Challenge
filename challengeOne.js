function calculateGrade(mark) {
    if (mark > 79) {
        return 'A';
    } else if (mark >= 60 && mark <= 79) {
        return 'B';
    } else if (mark >= 50 && mark <= 59) {
        return 'C';
    } else if (mark >= 40 && mark <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}
function main() {
    let input = prompt("Enter student's mark (0-100):");
    let mark = parseFloat(input);
    
    if (!isNaN(mark) && mark >= 0 && mark <= 100) {
        let grade = calculateGrade(mark);
        console.log("Grade:", grade);
    } else {
        console.log("Invalid input! Mark must be between 0 and 100.");
    }
}

main();