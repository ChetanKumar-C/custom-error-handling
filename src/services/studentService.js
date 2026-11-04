
const AppError = require("../errors/AppError");

// Temporary student data
let students = [
    {
        id: 1,
        name: "Rahul",
        email: "rahul@gmail.com"
    },
    {
        id: 2,
        name: "Priya",
        email: "priya@gmail.com"
    }
];

// Get all students
const getAllStudents = () => {
    return students;
};

// Get student by ID
const getStudentById = (id) => {

    const student = students.find(s => s.id === Number(id));

    if (!student) {
        throw new AppError("Student not found", 404);
    }

    return student;
};

// Create student
const createStudent = (name, email) => {

    if (!name || !email) {
        throw new AppError("Name and email are required", 400);
    }

    const existingStudent = students.find(s => s.email === email);

    if (existingStudent) {
        throw new AppError("Email already exists", 409);
    }

    const newStudent = {
        id: students.length
            ? Math.max(...students.map(s => s.id)) + 1
            : 1,
        name,
        email
    };

    students.push(newStudent);

    return newStudent;
};

// Export functions
module.exports = {
    getAllStudents,
    getStudentById,
    createStudent
};
