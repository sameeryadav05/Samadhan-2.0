// highestMarks.js
const marks = [75, 88, 92, 67, 99, 81];

function findHighest(arr) {
  let highest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > highest) {
      highest = arr[i];
    }
  }
  return highest;
}

console.log("Highest Marks:", findHighest(marks));
