// studentMarksCalculator.js
const students = [
  { name: "Aman", marks: 85 },
  { name: "Priya", marks: 92 },
  { name: "Rahul", marks: 78 },
  { name: "Neha", marks: 88 }
];

function calculateAverage(students) {
  const total = students.reduce((sum, student) => sum + student.marks, 0);
  return total / students.length;
}

console.log("Average Marks:", calculateAverage(students));
