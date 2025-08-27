import express from "express";
import {
  createStudent,
  getStudents,
  getStudentBYId,
  updateStudent,
  deleteStudent,
} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentBYId);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
