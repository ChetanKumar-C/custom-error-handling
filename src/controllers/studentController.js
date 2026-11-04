
const studentService = require("../services/studentService");
const asyncHandler = require("../utils/asyncHandler");

// Get all students
const getAllStudents = asyncHandler(async (req, res) => {

    const students = studentService.getAllStudents();

    res.status(200).json({
        success: true,
        message: "Students retrieved successfully",
        data: students
    });

});

// Get student by ID
const getStudentById = asyncHandler(async (req, res) => {

    const student = studentService.getStudentById(req.params.id);

    res.status(200).json({
        success: true,
        message: "Student retrieved successfully",
        data: student
    });

});

// Create student
const createStudent = asyncHandler(async (req, res) => {

    const { name, email } = req.body;

    const student = studentService.createStudent(name, email);

    res.status(201).json({
        success: true,
        message: "Student created successfully",
        data: student
    });

});

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent
};
