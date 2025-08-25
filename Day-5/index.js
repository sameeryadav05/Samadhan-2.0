// expressStudents.js
const express = require("express");
const app = express();

const students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Priya", marks: 92 },
  { id: 3, name: "Rahul", marks: 78 },
  { id: 4, name: "Neha", marks: 88 }
];

// GET route
app.get("/students", (req, res) => {
  res.json(students);
});

app.listen(3000, () => {
  console.log("Express server running at http://localhost:3000/students");
});
