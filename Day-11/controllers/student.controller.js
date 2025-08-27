import students from "../models/student.model.js";

// CREATE

export const createStudent = (req, res) => {
  const { id, name, age } = req.body;
  const student = { id, name, age };
  students.push(student);
  res.status(201).json({ message: "student added", student });
};

// READ ALL

export const getStudents = (req, res) => {
  res.json(students);
};

// READ ONE

export const getStudentBYId = (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  if (!student) return res.status(404).json({ message: "student not found" });
  res.json(student);
};

// UPDATE

export const updateStudent = (req, res) => {
  const student = students.find((s) => s.id == req.params.id);
  if (!student) return res.status(404).json({ message: "student not found" });

  const { name, age } = req.body;
  if (name) student.name = name;
  if (age) student.age = age;

  res.json({ message: "student updated", student });
};

// DELETE

export const deleteStudent = (req, res) => {
  const index = students.findIndex((s) => s.id == req.params.id);
  if (index === -1)
    return res.status(404).json({ message: "student not found" });

  students.splice(index, 1);
  res.json({ message: "student deleted" });
};
