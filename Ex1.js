// Get the mean of an array
function getAverage(marks) {
  if (marks) {
    // calculates total number of marks
    let total = 0
    for (let i = 0; i < marks.length; i++) {
        total += marks[i]
    }
    /* returns total number of marks divided by number of marks
     rounded down to nearest integer */
    return Math.floor(total / marks.length)
  }
}

console.log(getAverage([1.24,3.65,4]));