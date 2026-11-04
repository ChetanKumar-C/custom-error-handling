
const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

// GET all students
router.get("/", studentController.getAllStudents);

// GET student by ID
router.get("/:id", studentController.getStudentById);

// CREATE student
router.post("/", studentController.createStudent);

module.exports = router;
