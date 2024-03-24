function overallGrade(mark) {
    if (mark > 100 || mark < 0) {
        return 'Invalid Input';
    } else if (mark > 79) {
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
console.log (overallGrade(80))
console.log (overallGrade(110))
console.log (overallGrade (39))
console.log (overallGrade (-1))